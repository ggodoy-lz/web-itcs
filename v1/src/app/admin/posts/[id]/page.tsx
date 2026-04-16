'use client'

import { useState, useEffect, useCallback, lazy, Suspense } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'

const RichEditor = lazy(() => import('@/components/RichEditor'))
const ImageUpload = lazy(() => import('@/components/ImageUpload'))

export default function EditPost() {
  const router = useRouter()
  const params = useParams()
  const postId = params.id as string
  const [auth, setAuth] = useState<boolean | null>(null)
  const [saving, setSaving] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [form, setForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'General',
    author: 'Equipo iTCS',
    image: '',
    date: '',
    readTime: '3 min',
    status: 'draft' as 'published' | 'draft',
  })

  const loadPost = useCallback(async () => {
    const res = await fetch(`/api/posts/${postId}`)
    if (!res.ok) {
      setNotFound(true)
      return
    }
    const data = await res.json()
    setForm({
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: data.content || '',
      category: data.category || 'General',
      author: data.author || 'Equipo iTCS',
      image: data.image || '',
      date: data.date || '',
      readTime: data.readTime || '3 min',
      status: data.status || 'draft',
    })
  }, [postId])

  useEffect(() => {
    fetch('/api/auth')
      .then((r) => r.json())
      .then((d) => {
        if (!d.authenticated) router.push('/admin')
        else {
          setAuth(true)
          loadPost()
        }
      })
  }, [router, loadPost])

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    const res = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) router.push('/admin')
    setSaving(false)
  }

  if (!auth) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (notFound) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Post no encontrado</h1>
        <Link href="/admin" className="text-blue-400 hover:text-blue-300">Volver al dashboard</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/admin" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
            ← Volver al dashboard
          </Link>
          <h1 className="text-2xl font-bold mt-2">Editar post</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm text-slate-400 mb-1.5">Título</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => update('title', e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Título del artículo"
              required
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Categoría</label>
            <select
              value={form.category}
              onChange={(e) => update('category', e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>General</option>
              <option>Ciberseguridad</option>
              <option>Infraestructura IT</option>
              <option>Networking</option>
              <option>Cloud</option>
              <option>Noticias</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Fecha</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => update('date', e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Autor</label>
            <input
              type="text"
              value={form.author}
              onChange={(e) => update('author', e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1.5">Tiempo de lectura</label>
            <input
              type="text"
              value={form.readTime}
              onChange={(e) => update('readTime', e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="3 min"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm text-slate-400 mb-1.5">Imagen de portada</label>
            <Suspense fallback={<div className="h-32 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-sm">Cargando...</div>}>
              <ImageUpload value={form.image} onChange={(url) => update('image', url)} />
            </Suspense>
          </div>

          <div className="col-span-2">
            <label className="block text-sm text-slate-400 mb-1.5">Extracto</label>
            <textarea
              value={form.excerpt}
              onChange={(e) => update('excerpt', e.target.value)}
              rows={2}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Breve descripción del artículo..."
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm text-slate-400 mb-1.5">Contenido</label>
            <Suspense fallback={<div className="h-[400px] bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-500 text-sm">Cargando editor...</div>}>
              <RichEditor value={form.content} onChange={(html) => update('content', html)} />
            </Suspense>
          </div>

          <div className="col-span-2">
            <label className="block text-sm text-slate-400 mb-1.5">Estado</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  checked={form.status === 'draft'}
                  onChange={() => update('status', 'draft')}
                  className="accent-blue-500"
                />
                <span className="text-sm">Borrador</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  checked={form.status === 'published'}
                  onChange={() => update('status', 'published')}
                  className="accent-blue-500"
                />
                <span className="text-sm">Publicar</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
          <button
            type="submit"
            disabled={saving}
            className="bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            {saving ? 'Guardando...' : 'Guardar cambios'}
          </button>
          <Link href="/admin" className="text-slate-400 hover:text-white transition-colors px-4 py-3">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  )
}
