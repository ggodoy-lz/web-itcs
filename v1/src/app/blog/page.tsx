import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { getPublishedPosts } from '@/lib/blog-db'

export const metadata: Metadata = {
  title: 'Noticias & Novedades',
  description: 'Últimas noticias, novedades y artículos técnicos del equipo iTCS sobre tecnología, ciberseguridad e infraestructura IT en Paraguay.',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-PY', { day: 'numeric', month: 'long', year: 'numeric' })
}

export const dynamic = 'force-dynamic'

export default function BlogPage() {
  const blogPosts = getPublishedPosts()

  return (
    <>
      <section className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-blue-400 font-medium">Blog iTCS</span>
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4 max-w-3xl leading-tight">
            Noticias & Novedades
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Tecnología, ciberseguridad y tendencias que impactan a las empresas en Paraguay.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group dark-card rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="aspect-video bg-slate-800 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-3.5 h-3.5" />
                      {post.readTime} lectura
                    </span>
                  </div>
                  <h2 className="font-bold text-white group-hover:text-blue-400 transition-colors leading-snug mb-2 flex-1">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-blue-400 font-medium">
                    Leer más <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No hay artículos publicados todavía.
            </div>
          )}
        </div>
      </section>
    </>
  )
}
