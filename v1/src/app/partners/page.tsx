import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { partners } from '@/data/partners'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Partners tecnológicos de iTCS S.A.: Microsoft, Sophos, Veeam, VMware, Adobe, ManageEngine, HP, QNAP, Synology, IBM y más.',
}

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-blue-400 font-medium">Alianzas estratégicas</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              {partners.length} partners tecnológicos de clase mundial
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Las alianzas con los principales fabricantes nos permiten ofrecer las mejores
              soluciones del mercado con soporte certificado en Paraguay.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              [String(partners.length), 'Partners tecnológicos'],
              ['20+', 'Certificaciones de partner'],
              ['20+', 'Años de alianzas'],
            ].map(([v, l]) => (
              <AnimatedSection key={l}>
                <div className="text-3xl font-extrabold text-white">{v}</div>
                <div className="text-sm text-slate-500 mt-1">{l}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <AnimatedSection key={partner.name} delay={i * 0.04}>
                <div className="group dark-card rounded-3xl overflow-hidden transition-all flex flex-col h-full hover:scale-[1.02]">
                  {/* Logo area */}
                  <div className="bg-slate-800/50 border-b border-slate-700/50 px-8 py-8 flex items-center justify-center h-32">
                    <img
                      src={partner.img}
                      alt={`Logo ${partner.name}`}
                      className="max-h-14 max-w-full w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <h2 className="font-bold text-white text-lg">{partner.name}</h2>
                      <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full px-2 py-0.5 ml-auto flex-shrink-0">
                        {partner.tier}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-3">
                      {partner.category}
                    </p>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1">
                      {partner.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              ¿Interesado en nuestras soluciones?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Con el respaldo de {partners.length} partners tecnológicos, tenemos la solución perfecta para tu empresa.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Contactar un especialista <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
