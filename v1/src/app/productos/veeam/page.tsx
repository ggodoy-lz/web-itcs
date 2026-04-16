import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Veeam — Backup & Recovery',
  description:
    'Soluciones Veeam de backup, replicación y recuperación ante desastres. Protege tus datos en entornos físicos, virtuales y en la nube.',
}

const features = [
  {
    title: 'Backup Inmutable',
    desc: 'Protege tus backups con inmutabilidad para resistir ataques ransomware y eliminaciones accidentales.',
  },
  {
    title: 'Recovery Instantáneo',
    desc: 'Restaura VMs, aplicaciones y datos en segundos con RTO mínimo para garantizar la continuidad.',
  },
  {
    title: 'Soporte Multi-Cloud',
    desc: 'Gestiona backups en AWS, Azure, Google Cloud y entornos on-premise desde una única plataforma.',
  },
  {
    title: 'Replicación Automática',
    desc: 'Mantén réplicas actualizadas de tus sistemas críticos para Disaster Recovery inmediato.',
  },
  {
    title: 'Visibilidad Completa',
    desc: 'Dashboard centralizado con reportes de cumplimiento, alertas y estado de protección de datos.',
  },
  {
    title: 'Agentes para Cualquier SO',
    desc: 'Protege Windows, Linux, Unix, macOS y aplicaciones como SQL Server, Oracle, SAP y más.',
  },
]

const benefits = [
  'RPO de hasta 15 minutos para aplicaciones críticas',
  'Reducción de hasta 95% en el espacio de almacenamiento',
  'Cumplimiento normativo (GDPR, HIPAA, ISO 27001)',
  'Automatización completa de tareas de backup',
  'Soporte técnico certificado por Veeam en Paraguay',
]

export default function VeeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-green-950/30 to-slate-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link href="/productos" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">
              Productos
            </Link>
            <span className="text-slate-700">/</span>
            <span className="text-green-400 text-sm font-medium">Veeam</span>
          </div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm text-green-400 font-medium">Backup & Recovery Leader</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              Veeam — Protección total de tus datos
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              La plataforma de backup y recuperación más confiable del mundo, disponible en Paraguay
              a través de iTCS S.A. — tu partner certificado Veeam.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="bg-green-600 hover:bg-green-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2"
              >
                Solicitar demostración
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/contacto"
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                Cotizar licencias
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white">Capacidades clave</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Veeam ofrece protección de datos completa para cualquier entorno IT moderno.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.07}>
                <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 hover:shadow-lg transition-all">
                  <div className="w-10 h-10 rounded-xl bg-green-500/15 flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-5 h-5 text-green-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-extrabold text-white mb-8">
                ¿Por qué elegir Veeam con iTCS?
              </h2>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{b}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-white mb-2">¿Listo para proteger tus datos?</h3>
                <p className="text-slate-400 mb-8">
                  Nuestros ingenieros certificados Veeam están listos para diseñar la estrategia de
                  backup perfecta para tu empresa.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/contacto"
                    className="block text-center bg-green-600 hover:bg-green-500 text-white font-semibold py-3.5 rounded-xl transition-all"
                  >
                    Solicitar asesoría gratuita
                  </Link>
                  <Link
                    href="/contacto"
                    className="block text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-3.5 rounded-xl transition-all"
                  >
                    Ver precios y licencias
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
