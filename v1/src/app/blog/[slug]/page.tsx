import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { getPublishedPosts, getPostBySlug } from '@/lib/blog-db'

export const dynamic = 'force-dynamic'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Artículo no encontrado' }
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-PY', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post || post.status !== 'published') notFound()

  const others = getPublishedPosts().filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-0 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6">
            <ArrowLeftIcon className="w-4 h-4" />
            Volver al blog
          </Link>
          <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="w-4 h-4" />
              {post.readTime} de lectura
            </span>
            <span className="text-slate-500">por {post.author}</span>
          </div>
        </div>

        {/* Cover image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-t-2xl overflow-hidden aspect-video bg-slate-800">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-slate-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead text-slate-300 text-xl leading-relaxed">{post.excerpt}</p>
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <>
                <p className="text-slate-400 leading-relaxed">
                  En iTCS S.A. llevamos más de 20 años acompañando a empresas paraguayas en su
                  transformación digital. Nuestro equipo de ingenieros certificados está disponible
                  para asesorarte sobre cómo implementar esta solución en tu organización.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  ¿Querés saber más sobre cómo {post.title.toLowerCase()} puede beneficiar a tu
                  empresa? Contactanos y un especialista te responderá en el horario comercial:
                  Lunes a Viernes de 08:00 a 18:00 hs.
                </p>
              </>
            )}
          </div>

          <div className="mt-12 p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
            <h3 className="text-white font-bold mb-2">¿Necesitás asesoramiento?</h3>
            <p className="text-slate-400 text-sm mb-4">
              Nuestro equipo puede ayudarte a implementar esta solución en tu empresa.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm"
            >
              Hablar con un especialista <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other posts */}
      {others.length > 0 && (
        <section className="py-16 bg-slate-950 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">Más artículos</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {others.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group dark-card rounded-xl p-5 flex gap-4">
                  <div className="w-20 h-16 rounded-lg bg-slate-800 overflow-hidden flex-shrink-0">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-blue-400 font-semibold">{p.category}</span>
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug line-clamp-2 mt-0.5">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
