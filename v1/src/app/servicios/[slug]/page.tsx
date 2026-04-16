import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon, CheckBadgeIcon } from '@heroicons/react/24/outline'
import { services } from '@/data/services'

type Props = { params: Promise<{ slug: string }> }

const colorAccents: Record<string, { badge: string; bullet: string; cta: string; ctaHover: string }> = {
  blue:   { badge: 'bg-blue-500/15 text-blue-400 border-blue-500/20',     bullet: 'text-blue-400',   cta: 'bg-blue-600',   ctaHover: 'hover:bg-blue-500' },
  red:    { badge: 'bg-red-500/15 text-red-400 border-red-500/20',        bullet: 'text-red-400',    cta: 'bg-red-600',    ctaHover: 'hover:bg-red-500' },
  green:  { badge: 'bg-green-500/15 text-green-400 border-green-500/20',  bullet: 'text-green-400',  cta: 'bg-green-600',  ctaHover: 'hover:bg-green-500' },
  yellow: { badge: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/20', bullet: 'text-yellow-400', cta: 'bg-yellow-600', ctaHover: 'hover:bg-yellow-500' },
  purple: { badge: 'bg-purple-500/15 text-purple-400 border-purple-500/20', bullet: 'text-purple-400', cta: 'bg-purple-600', ctaHover: 'hover:bg-purple-500' },
  cyan:   { badge: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',     bullet: 'text-cyan-400',   cta: 'bg-cyan-600',   ctaHover: 'hover:bg-cyan-500' },
  orange: { badge: 'bg-orange-500/15 text-orange-400 border-orange-500/20', bullet: 'text-orange-400', cta: 'bg-orange-600', ctaHover: 'hover:bg-orange-500' },
  teal:   { badge: 'bg-teal-500/15 text-teal-400 border-teal-500/20',     bullet: 'text-teal-400',   cta: 'bg-teal-600',   ctaHover: 'hover:bg-teal-500' },
  pink:   { badge: 'bg-pink-500/15 text-pink-400 border-pink-500/20',     bullet: 'text-pink-400',   cta: 'bg-pink-600',   ctaHover: 'hover:bg-pink-500' },
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const svc = services.find((s) => s.id === slug)
  if (!svc) return { title: 'Servicio no encontrado' }
  return { title: svc.title, description: svc.shortDesc }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const svc = services.find((s) => s.id === slug)
  if (!svc) notFound()

  const c = colorAccents[svc.color] ?? colorAccents.blue
  const others = services.filter((s) => s.id !== slug).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/servicios" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors mb-6">
            <ArrowLeftIcon className="w-4 h-4" /> Todos los servicios
          </Link>
          <span className={`inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-6 text-sm font-medium ${c.badge}`}>
            Servicio especializado
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">{svc.title}</h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">{svc.shortDesc}</p>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-300 text-lg leading-relaxed mb-10">{svc.longDesc}</p>

          <h2 className="text-2xl font-bold text-white mb-6">¿Qué incluye este servicio?</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {svc.bullets.map((b) => (
              <div key={b} className="flex items-start gap-3 dark-card rounded-xl p-4">
                <CheckBadgeIcon className={`w-5 h-5 mt-0.5 flex-shrink-0 ${c.bullet}`} />
                <span className="text-slate-300 text-sm">{b}</span>
              </div>
            ))}
          </div>

          {svc.relatedProducts.length > 0 && (
            <div className="mt-12 dark-card rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3">Tecnologías que utilizamos</h3>
              <div className="flex flex-wrap gap-2">
                {svc.relatedProducts.map((p) => (
                  <span key={p} className="text-xs font-semibold bg-slate-800 border border-slate-700 text-slate-300 rounded-full px-3 py-1.5">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contacto" className={`${c.cta} ${c.ctaHover} text-white font-semibold px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2`}>
              Solicitar asesoría <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link href="/servicios" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-6">Otros servicios</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {others.map((s) => {
              const sc = colorAccents[s.color] ?? colorAccents.blue
              return (
                <Link key={s.id} href={`/servicios/${s.id}`} className="group dark-card rounded-xl p-5">
                  <span className={`text-xs font-semibold ${sc.bullet}`}>{s.title}</span>
                  <p className="text-sm text-slate-400 mt-1 line-clamp-2">{s.shortDesc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                    Ver detalles <ArrowRightIcon className="w-3 h-3" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
