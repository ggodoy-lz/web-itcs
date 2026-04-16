import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'PRTG Network Monitor',
  description: 'Monitorea toda tu infraestructura IT con PRTG Network Monitor. Alertas en tiempo real, dashboards y reportes automáticos.',
}

const features = [
  { title: 'Monitoreo unificado', desc: 'Supervisa servidores, redes, aplicaciones, bases de datos y servicios en la nube desde una sola consola.' },
  { title: 'Alertas inteligentes', desc: 'Recibe notificaciones por email, SMS, push o integración con sistemas ITSM cuando algo falla.' },
  { title: 'Más de 300 sensores', desc: 'Sensores listos para usar: SNMP, WMI, NetFlow, HTTP, bases de datos, VMware, y más.' },
  { title: 'Mapas y dashboards', desc: 'Crea mapas de red visuales y dashboards personalizados para diferentes equipos.' },
  { title: 'Reportes automáticos', desc: 'Genera reportes de disponibilidad, rendimiento y SLA de forma automática y programada.' },
  { title: 'Instalación flexible', desc: 'Disponible como appliance local, cloud o instalación híbrida según tus necesidades.' },
]

export default function PRTGPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link href="/productos" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">Productos</Link>
            <span className="text-slate-700">/</span>
            <span className="text-orange-400 text-sm font-medium">PRTG</span>
          </div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-orange-400 font-medium">Network Monitoring</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              PRTG — Visibilidad total de tu red
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              Monitorea toda tu infraestructura IT en tiempo real con la solución de monitoreo más
              completa y fácil de usar del mercado.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2">
                Probar gratis 30 días <ArrowRightIcon className="w-4 h-4" />
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
            <h2 className="text-4xl font-extrabold text-white">Monitoreo sin puntos ciegos</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              PRTG te da visibilidad completa de cada componente de tu infraestructura IT.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.07}>
                <div className="bg-orange-500/15 border border-orange-500/20 rounded-2xl p-7 hover:shadow-lg transition-all">
                  <CheckCircleIcon className="w-6 h-6 text-orange-500 mb-4" />
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4">Empieza a monitorear en minutos</h2>
            <p className="text-orange-100 mb-8">Instalación rápida, más de 300 sensores preconfigurados y soporte local de iTCS.</p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors">
              Solicitar demo <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
