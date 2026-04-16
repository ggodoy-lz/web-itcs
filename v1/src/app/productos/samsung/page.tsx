import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Samsung B2B — Dispositivos & Pantallas',
  description: 'Soluciones Samsung para empresas: pantallas profesionales LED/OLED, interactive displays, dispositivos móviles y gestión MDM.',
}

const products = [
  { title: 'Pantallas Profesionales', desc: 'Displays comerciales LED y OLED de alta luminosidad para señalética digital, salas de reuniones y videowall.' },
  { title: 'Interactive Displays', desc: 'Pizarras interactivas y pantallas táctiles para salas de reuniones y espacios colaborativos.' },
  { title: 'Samsung Knox', desc: 'Plataforma de seguridad empresarial que protege dispositivos móviles Samsung desde el chip hasta la nube.' },
  { title: 'MDM & Device Management', desc: 'Gestión centralizada de flotas de dispositivos móviles Samsung para empresas de cualquier tamaño.' },
  { title: 'All-in-One PC', desc: 'Equipos de escritorio todo-en-uno para entornos corporativos con diseño compacto y alto rendimiento.' },
  { title: 'Monitores Empresariales', desc: 'Monitores de alta resolución ergonómicos para entornos de trabajo que exigen productividad.' },
]

export default function SamsungPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link href="/productos" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">Productos</Link>
            <span className="text-slate-700">/</span>
            <span className="text-slate-300 text-sm font-medium">Samsung B2B</span>
          </div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-slate-500/10 border border-slate-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-slate-300 font-medium">Samsung Business</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              Samsung B2B — Tecnología para espacios de trabajo
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              Pantallas profesionales, dispositivos móviles y soluciones de gestión Samsung para
              equipar y modernizar los espacios de trabajo de tu empresa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2">
                Ver catálogo <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link href="/contacto" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all">
                Solicitar cotización
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white">Soluciones Samsung para empresas</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Desde pantallas de alta resolución hasta gestión de flotas móviles, Samsung ofrece la tecnología que tu empresa necesita.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.07}>
                <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 hover:shadow-lg hover:border-slate-600 transition-all">
                  <CheckCircleIcon className="w-6 h-6 text-slate-500 mb-4" />
                  <h3 className="font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4">Equipa tu empresa con Samsung</h2>
            <p className="text-slate-400 mb-8">
              iTCS es tu distribuidor autorizado Samsung B2B en Paraguay. Cotiza pantallas, dispositivos y soluciones de gestión.
            </p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all">
              Solicitar cotización <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
