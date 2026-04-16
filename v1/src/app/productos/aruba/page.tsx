import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Aruba Networks — Networking Empresarial',
  description: 'Soluciones de networking Aruba Networks: Wi-Fi 6, switches inteligentes, SD-WAN y Zero Trust Network Access para empresas.',
}

const features = [
  { title: 'Wi-Fi 6 / 6E', desc: 'Puntos de acceso de última generación para alta densidad de usuarios con velocidades ultrarrápidas.' },
  { title: 'Switches Aruba CX', desc: 'Switches inteligentes con AIOps integrado para gestión automatizada y auto-remediación.' },
  { title: 'SD-WAN', desc: 'Conectividad WAN definida por software para oficinas remotas con gestión centralizada.' },
  { title: 'Network Access Control', desc: 'Control granular de acceso a la red con visibilidad de todos los dispositivos conectados.' },
  { title: 'Aruba Central', desc: 'Plataforma de gestión cloud que unifica acceso cableado, inalámbrico y WAN desde un solo portal.' },
  { title: 'Zero Trust ZTNA', desc: 'Arquitectura Zero Trust para acceso seguro a aplicaciones sin exponer la red corporativa.' },
]

export default function ArubaPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link href="/productos" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">Productos</Link>
            <span className="text-slate-700">/</span>
            <span className="text-purple-400 text-sm font-medium">Aruba Networks</span>
          </div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-purple-400 font-medium">A Hewlett Packard Enterprise Company</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              Aruba — Networking inteligente y seguro
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              Soluciones de red inalámbrica, switches y SD-WAN con seguridad integrada y gestión
              basada en IA para empresas modernas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2">
                Diseñar mi red <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link href="/contacto" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all">
                Solicitar demostración
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white">Soluciones de red completas</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Desde Wi-Fi hasta WAN, Aruba ofrece una plataforma unificada para todas las necesidades de conectividad.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.07}>
                <div className="bg-purple-500/15 border border-purple-500/20 rounded-2xl p-7 hover:shadow-lg transition-all">
                  <CheckCircleIcon className="w-6 h-6 text-purple-500 mb-4" />
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Transforma la red de tu empresa
            </h2>
            <p className="text-purple-100 mb-8">
              Nuestros ingenieros certificados Aruba diseñarán la arquitectura de red perfecta para tu organización.
            </p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-purple-50 transition-colors">
              Contactar ahora <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
