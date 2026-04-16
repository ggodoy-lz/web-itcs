import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Sophos — Ciberseguridad',
  description:
    'Plataforma de ciberseguridad adaptativa con IA de Sophos. Endpoint protection, firewall next-gen, XDR y MDR para proteger tu empresa.',
}

const solutions = [
  {
    title: 'Sophos Intercept X',
    desc: 'Protección avanzada de endpoints con IA profunda, anti-ransomware y detección de exploits.',
    badge: 'Endpoint',
    color: 'border-blue-500/30 bg-blue-500/5',
  },
  {
    title: 'Sophos XGS Firewall',
    desc: 'Firewall Next-Generation con inspección profunda de paquetes, IPS y filtrado web avanzado.',
    badge: 'Firewall',
    color: 'border-purple-500/30 bg-purple-500/5',
  },
  {
    title: 'Sophos XDR',
    desc: 'Detección y respuesta extendida que correlaciona eventos de endpoints, redes, email y nube.',
    badge: 'XDR',
    color: 'border-red-500/30 bg-red-500/5',
  },
  {
    title: 'Sophos MDR',
    desc: 'Servicio de detección y respuesta gestionado 24/7 por el equipo de expertos de Sophos.',
    badge: 'Managed',
    color: 'border-orange-500/30 bg-orange-500/5',
  },
  {
    title: 'Sophos Email',
    desc: 'Protección avanzada del correo electrónico contra phishing, spam y ataques de impersonación.',
    badge: 'Email',
    color: 'border-teal-500/30 bg-teal-500/5',
  },
  {
    title: 'Sophos Zero Trust',
    desc: 'Acceso de red Zero Trust (ZTNA) para reemplazar VPN con autenticación continua y granular.',
    badge: 'ZTNA',
    color: 'border-green-500/30 bg-green-500/5',
  },
]

export default function SophosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link href="/productos" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">Productos</Link>
            <span className="text-slate-700">/</span>
            <span className="text-blue-400 text-sm font-medium">Sophos</span>
          </div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <ShieldCheckIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Cybersecurity Leader — Gartner Magic Quadrant</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              Sophos — Toma el control de las amenazas
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              La plataforma de ciberseguridad adaptativa con IA más completa del mercado, disponible
              en Paraguay a través de iTCS S.A. — partner certificado Sophos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2">
                Solicitar evaluación
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link href="/contacto" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all">
                Ver demostración
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white">Soluciones Sophos</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Un ecosistema completo e integrado de ciberseguridad para proteger cada vector de ataque.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.07}>
                <div className={`border rounded-2xl p-7 h-full ${s.color}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-800 border border-slate-700 rounded-full px-2.5 py-1">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why + CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-extrabold text-white mb-8">
                La ventaja de Sophos en ciberseguridad
              </h2>
              <ul className="space-y-4">
                {[
                  'IA y machine learning para detectar amenazas desconocidas',
                  'Sincronización de seguridad entre endpoints y firewall',
                  'Consola de administración centralizada en la nube',
                  'Respuesta automática ante incidentes sin intervención manual',
                  'Equipo de Sophos Rapid Response disponible 24/7',
                  'Partner certificado Sophos en Paraguay — iTCS S.A.',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{b}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-white mb-2">Protege tu empresa hoy</h3>
                <p className="text-slate-400 mb-8">
                  Evalúa gratuitamente el nivel de protección actual de tu empresa con nuestros
                  expertos en ciberseguridad.
                </p>
                <div className="space-y-3">
                  <Link href="/contacto" className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-all">
                    Evaluación gratuita de seguridad
                  </Link>
                  <Link href="/contacto" className="block text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-3.5 rounded-xl transition-all">
                    Solicitar demostración
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
