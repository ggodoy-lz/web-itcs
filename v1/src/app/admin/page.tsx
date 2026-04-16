'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

interface Post {
  id: string
  title: string
  slug: string
  category: string
  status: 'published' | 'draft'
  date: string
  author: string
}

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [loginError, setLoginError] = useState('')
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const checkAuth = useCallback(async () => {
    const res = await fetch('/api/auth')
    const data = await res.json()
    setAuthenticated(data.authenticated)
    if (data.authenticated) loadPosts()
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  async function loadPosts() {
    setLoading(true)
    const res = await fetch('/api/posts?all=1')
    if (res.ok) setPosts(await res.json())
    setLoading(false)
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoginError('')
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'login', user, pass }),
    })
    if (res.ok) {
      setAuthenticated(true)
      loadPosts()
    } else {
      setLoginError('Usuario o contraseña incorrectos')
    }
  }

  async function handleLogout() {
    await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'logout' }),
    })
    setAuthenticated(false)
    setPosts([])
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`¿Eliminar "${title}"?`)) return
    const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' })
    if (res.ok) loadPosts()
  }

  async function handleToggleStatus(post: Post) {
    const newStatus = post.status === 'published' ? 'draft' : 'published'
    const res = await fetch(`/api/posts/${post.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    })
    if (res.ok) loadPosts()
  }

  if (authenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-5"
        >
          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-slate-400 text-sm">iTCS S.A. — Panel de administración</p>
          </div>
          {loginError && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
              {loginError}
            </div>
          )}
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              autoFocus
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Blog Admin</h1>
          <p className="text-slate-400 text-sm mt-1">Gestión de publicaciones — iTCS S.A.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/posts/new"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            + Nuevo post
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-white text-sm transition-colors px-3 py-2.5"
          >
            Ver sitio
          </Link>
          <button
            onClick={handleLogout}
            className="text-slate-400 hover:text-red-400 text-sm transition-colors px-3 py-2.5"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-3xl font-bold text-blue-400">{posts.length}</div>
          <div className="text-slate-400 text-sm mt-1">Total posts</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-3xl font-bold text-green-400">
            {posts.filter((p) => p.status === 'published').length}
          </div>
          <div className="text-slate-400 text-sm mt-1">Publicados</div>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="text-3xl font-bold text-yellow-400">
            {posts.filter((p) => p.status === 'draft').length}
          </div>
          <div className="text-slate-400 text-sm mt-1">Borradores</div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-16 text-slate-500">
          <p className="text-lg">No hay posts aún</p>
          <p className="text-sm mt-1">Crea tu primer post haciendo clic en &quot;+ Nuevo post&quot;</p>
        </div>
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="text-left px-5 py-3 font-medium">Título</th>
                <th className="text-left px-5 py-3 font-medium">Categoría</th>
                <th className="text-left px-5 py-3 font-medium">Fecha</th>
                <th className="text-left px-5 py-3 font-medium">Estado</th>
                <th className="text-right px-5 py-3 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="px-5 py-4">
                    <Link href={`/admin/posts/${post.id}`} className="text-white hover:text-blue-400 transition-colors font-medium">
                      {post.title || '(Sin título)'}
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-slate-400">{post.category}</td>
                  <td className="px-5 py-4 text-slate-400">{post.date}</td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => handleToggleStatus(post)}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                        post.status === 'published'
                          ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                          : 'bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20'
                      }`}
                    >
                      {post.status === 'published' ? 'Publicado' : 'Borrador'}
                    </button>
                  </td>
                  <td className="px-5 py-4 text-right space-x-2">
                    <Link
                      href={`/admin/posts/${post.id}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id, post.title)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
