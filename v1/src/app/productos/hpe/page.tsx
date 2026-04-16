import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRightIcon, CheckCircleIcon, ServerIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'HPE — Servidores & Storage',
  description: 'Soluciones HPE de servidores ProLiant, almacenamiento Nimble, hiperconvergencia SimpliVity y servicios GreenLake para empresas.',
}

const products = [
  { name: 'HPE ProLiant', desc: 'Servidores de gama industrial para cargas de trabajo críticas, con gestión iLO integrada.', tag: 'Servidores' },
  { name: 'HPE Nimble Storage', desc: 'Almacenamiento all-flash e híbrido con IA predictiva para el 99.9999% de disponibilidad.', tag: 'Storage' },
  { name: 'HPE SimpliVity', desc: 'Infraestructura hiperconvergente que simplifica la administración y reduce costos operativos.', tag: 'HCI' },
  { name: 'HPE GreenLake', desc: 'Modelo de consumo cloud on-premises: paga solo por lo que usas con capacidad escalable.', tag: 'Cloud' },
  { name: 'HPE Aruba (Networking)', desc: 'Soluciones de networking empresarial integradas con la infraestructura HPE.', tag: 'Networking' },
  { name: 'HPE Primera', desc: 'Almacenamiento de primera clase para las aplicaciones más demandantes del negocio.', tag: 'All-Flash' },
]

export default function HPEPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950/40 to-indigo-950/30 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link href="/productos" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">Productos</Link>
            <span className="text-slate-700">/</span>
            <span className="text-blue-400 text-sm font-medium">HPE</span>
          </div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <ServerIcon className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">Hewlett Packard Enterprise</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              HPE — Infraestructura de misión crítica
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              Servidores, storage y soluciones hiperconvergentes de HPE para impulsar las cargas de
              trabajo más exigentes de tu empresa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2">
                Cotizar equipos <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link href="/contacto" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all">
                Hablar con un especialista
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white">Portafolio HPE</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Soluciones completas de hardware y servicios para cada necesidad empresarial.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.07}>
                <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7 hover:shadow-lg hover:border-blue-500/30 transition-all">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/15 border border-blue-500/30 rounded-full px-2.5 py-1">{p.tag}</span>
                  <h3 className="font-bold text-white text-lg mt-4 mb-2">{p.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-extrabold text-white mb-4">¿Necesitas equipos HPE?</h2>
            <p className="text-slate-400 text-lg mb-8">
              Como partner autorizado HPE en Paraguay, podemos cotizar, implementar y dar soporte a toda la línea de productos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contacto" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2">
                Solicitar cotización <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[['Partner', 'Autorizado HPE'], ['Soporte', 'Post-venta local'], ['Stock', 'Disponible en PY']].map(([t, d]) => (
                <div key={t} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                  <div className="font-bold text-white">{t}</div>
                  <div className="text-sm text-slate-500 mt-1">{d}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
