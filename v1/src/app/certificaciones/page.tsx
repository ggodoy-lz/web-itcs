import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRightIcon, CheckBadgeIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Certificaciones & Políticas',
  description: 'iTCS S.A. cuenta con certificaciones ISO 9001:2015 e ISO 27001:2022.',
}

const isoCards = [
  {
    code: 'ISO 9001:2015',
    title: 'Sistema de Gestión de Calidad',
    desc: 'Certificación internacional que avala nuestros procesos de gestión de calidad, garantizando que nuestros servicios cumplen consistentemente con los requisitos del cliente y los estándares reglamentarios.',
    scope: 'Todos los servicios de consultoría, implementación y soporte técnico de iTCS S.A.',
    benefits: ['Procesos estandarizados y documentados', 'Mejora continua verificable', 'Satisfacción del cliente medida y gestionada', 'Trazabilidad de todos los proyectos'],
    color: 'bg-green-600',
    accent: 'text-green-400 bg-green-500/10 border-green-500/20',
  },
  {
    code: 'ISO 27001:2022',
    title: 'Sistema de Gestión de Seguridad de la Información',
    desc: 'La certificación de seguridad de la información más reconocida a nivel mundial. Demuestra nuestro compromiso con la confidencialidad, integridad y disponibilidad de la información.',
    scope: 'Gestión y tratamiento de la información de clientes, sistemas y procesos internos de iTCS S.A.',
    benefits: ['Protección de datos de clientes garantizada', 'Gestión de riesgos de seguridad estructurada', 'Cumplimiento normativo y legal', 'Planes de continuidad y recuperación'],
    color: 'bg-blue-600',
    accent: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
]

const policyObjectives = [
  'Asegurar la confidencialidad, integridad y disponibilidad de la información.',
  'Dar cumplimiento a los requisitos legales aplicables en materia de calidad y seguridad de la información.',
  'Definir, medir y mejorar los objetivos organizacionales.',
  'Establecer y cumplir los requisitos contractuales con las partes interesadas.',
  'Garantizar la continuidad de los sistemas de información mediante el establecimiento de planes de continuidad.',
  'Establecer planes de formación que incluyan requisitos de calidad y seguridad de la información.',
  'Fomentar la mejora continua del SGI, de los procesos y del desempeño.',
  'Actuar en todo momento dentro de la más estricta ética profesional.',
]

export default function CertificacionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
              <CheckBadgeIcon className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400 font-medium">Certificados internacionalmente</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              Certificaciones y Políticas de Calidad
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Nuestro compromiso con la excelencia está avalado por las normas internacionales ISO 9001
              e ISO 27001, que guían todos nuestros procesos.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ISO Cards */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white">Nuestras certificaciones</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Dos pilares fundamentales que definen nuestra forma de trabajar.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {isoCards.map((iso, i) => (
              <AnimatedSection key={iso.code} delay={i * 0.08}>
                <div className="dark-card rounded-3xl overflow-hidden">
                  <div className={`${iso.color} p-10 text-white`}>
                    <div className="flex items-center gap-4">
                      <ShieldCheckIcon className="w-12 h-12 text-white/80" />
                      <div>
                        <div className="text-3xl font-extrabold">{iso.code}</div>
                        <div className="text-white/80">{iso.title}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-slate-400 leading-relaxed mb-6">{iso.desc}</p>
                    <div className={`border rounded-xl p-4 mb-6 ${iso.accent}`}>
                      <p className="text-sm font-semibold mb-1">Alcance</p>
                      <p className="text-sm">{iso.scope}</p>
                    </div>
                    <h4 className="font-bold text-white mb-4">Beneficios para nuestros clientes</h4>
                    <ul className="space-y-2.5">
                      {iso.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-slate-400">
                          <CheckBadgeIcon className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Policy */}
      <section className="py-24 bg-slate-950 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-white">
              Política de Calidad y Seguridad
            </h2>
          </div>
          <div className="dark-card rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-800">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <ShieldCheckIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">iTCS S.A.</div>
                <div className="text-slate-500 text-sm">Information Technology Consulting and Support S.A.</div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-8">
              <strong className="text-white">iTCS S.A.</strong>, compañía líder en la prestación de servicios de tecnología
              de la información, con el objetivo de alcanzar la satisfacción esperada por los clientes
              y demás partes interesadas, asume abiertamente un compromiso con la calidad y seguridad
              de la información, basados en las Normas ISO 9001 e ISO 27001.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              A través de su <strong className="text-slate-200">Sistema de Gestión Integral (SGI)</strong>, la organización pretende:
            </p>
            <ul className="space-y-4">
              {policyObjectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/15 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-slate-400">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Confía en una empresa certificada
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            Nuestras certificaciones ISO garantizan que recibirás servicios de la más alta calidad.
          </p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all">
            Hablar con nosotros <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
