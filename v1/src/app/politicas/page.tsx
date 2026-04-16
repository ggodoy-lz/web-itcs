import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckBadgeIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { ClientImg } from '@/components/ClientImg'

export const metadata: Metadata = {
  title: 'Políticas de Calidad y Seguridad — iTCS S.A.',
  description: 'Políticas y objetivos de calidad y seguridad de la información de iTCS S.A., certificada ISO 9001:2015 e ISO 27001:2022.',
}

const qualityPolicies = [
  'Satisfacer las necesidades y expectativas de nuestros clientes brindando servicios y soluciones de tecnología de la información de alta calidad.',
  'Cumplir con los requisitos legales, reglamentarios y contractuales aplicables a nuestros servicios.',
  'Mejorar continuamente la eficacia del Sistema de Gestión de Calidad.',
  'Desarrollar y mantener las competencias del personal para garantizar la excelencia en la prestación de servicios.',
  'Establecer y revisar periódicamente los objetivos de calidad para asegurar el alineamiento con la estrategia organizacional.',
  'Fomentar una cultura de calidad en toda la organización, comprometiendo a todos los colaboradores con los objetivos establecidos.',
]

const securityPolicies = [
  'Proteger la confidencialidad, integridad y disponibilidad de la información de la organización y de sus clientes.',
  'Cumplir con los requisitos legales, regulatorios y contractuales relacionados con la seguridad de la información.',
  'Gestionar y mitigar los riesgos de seguridad de la información de manera proactiva y sistemática.',
  'Garantizar la continuidad del negocio mediante la implementación de planes de recuperación ante desastres.',
  'Capacitar y concientizar al personal sobre las buenas prácticas en seguridad de la información.',
  'Reportar, gestionar y aprender de los incidentes de seguridad para fortalecer continuamente las defensas de la organización.',
  'Revisar periódicamente las políticas y controles de seguridad para adaptarse a los cambios del entorno tecnológico y de negocio.',
]

const qualityObjectives = [
  'Mantener un índice de satisfacción del cliente superior al 90%.',
  'Reducir el tiempo de respuesta a incidentes críticos a menos de 2 horas.',
  'Garantizar la disponibilidad de los servicios de soporte en un 99.5% del tiempo.',
  'Capacitar al 100% del personal técnico en nuevas tecnologías al menos una vez por año.',
  'Completar el 95% de los proyectos dentro del plazo y presupuesto acordados.',
]

const securityObjectives = [
  'Reducir los incidentes de seguridad de la información en un 20% anual.',
  'Garantizar la disponibilidad de los sistemas críticos en un 99.9%.',
  'Completar la evaluación de riesgos de seguridad al menos una vez por año.',
  'Capacitar al 100% del personal en seguridad de la información anualmente.',
  'Realizar auditorías internas de seguridad al menos dos veces al año.',
  'Responder a incidentes de seguridad críticos en menos de 4 horas.',
]

export default function PoliticasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-sm text-green-400 font-medium">ISO 9001:2015 · ISO 27001:2022</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">
            Políticas de Calidad y Seguridad
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            iTCS S.A. está comprometida con los más altos estándares internacionales de calidad
            y seguridad de la información, respaldados por nuestras certificaciones ISO.
          </p>

          {/* ISO Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 rounded-xl px-5 py-3">
                <ClientImg src="/logos/iso-9001.png" alt="ISO 9001" className="h-10 w-auto" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">ISO 9001:2015</div>
                  <div className="text-slate-500 text-xs">Gestión de Calidad</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 rounded-xl px-5 py-3">
                <ClientImg src="/logos/iso-27001.png" alt="ISO 27001" className="h-10 w-auto" />
                <div className="text-left">
                  <div className="text-white font-bold text-sm">ISO 27001:2022</div>
                  <div className="text-slate-500 text-xs">Seguridad de la Información</div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Política de Calidad */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
              <CheckBadgeIcon className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-green-400 text-xs font-bold uppercase tracking-wider">ISO 9001:2015</p>
              <h2 className="text-2xl font-extrabold text-white">Política de Calidad</h2>
            </div>
          </div>

          <p className="text-slate-400 mb-6 leading-relaxed">
            En <strong className="text-white">iTCS S.A.</strong>, Information Technology Consulting and Support, estamos comprometidos
            con la excelencia en la prestación de servicios tecnológicos. Nuestra política de calidad establece:
          </p>

          <ul className="space-y-4 mb-10">
            {qualityPolicies.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckBadgeIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-950/60 border border-slate-700/50 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <DocumentTextIcon className="w-5 h-5 text-green-400" />
              Objetivos de Calidad
            </h3>
            <ul className="space-y-3">
              {qualityObjectives.map((o, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-slate-400 text-sm leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Política de Seguridad */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <ShieldCheckIcon className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <p className="text-blue-400 text-xs font-bold uppercase tracking-wider">ISO 27001:2022</p>
              <h2 className="text-2xl font-extrabold text-white">Política de Seguridad de la Información</h2>
            </div>
          </div>

          <p className="text-slate-400 mb-6 leading-relaxed">
            iTCS S.A. reconoce que la información es un activo crítico para su negocio y para sus clientes.
            Por ello, está comprometida con la protección de la información mediante los siguientes principios:
          </p>

          <ul className="space-y-4 mb-10">
            {securityPolicies.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <ShieldCheckIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <div className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <DocumentTextIcon className="w-5 h-5 text-blue-400" />
              Objetivos de Seguridad de la Información
            </h3>
            <ul className="space-y-3">
              {securityObjectives.map((o, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-slate-400 text-sm leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 mb-6 leading-relaxed">
            Estas políticas son revisadas anualmente por la Alta Dirección de iTCS S.A. para asegurar
            su continua adecuación, suficiencia y eficacia.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/certificaciones" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Ver certificaciones
            </Link>
            <Link href="/contacto" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
