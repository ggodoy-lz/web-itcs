import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Motor de Gestión — ERP & Software',
  description: 'Suite ERP Motor de Gestión para empresas: finanzas, inventario, CRM, RRHH y Business Intelligence integrados.',
}

const modules = [
  { title: 'Finanzas & Contabilidad', desc: 'Gestión financiera completa con contabilidad automatizada, tesorería y flujo de caja en tiempo real.' },
  { title: 'Inventario & Logística', desc: 'Control de stock, trazabilidad de productos y gestión de almacenes con código de barras y QR.' },
  { title: 'CRM & Ventas', desc: 'Gestión de clientes, pipeline de ventas, presupuestos y facturación electrónica integrada.' },
  { title: 'Recursos Humanos', desc: 'Liquidación de sueldos, control de asistencia, gestión de vacaciones y documentación digital.' },
  { title: 'Business Intelligence', desc: 'Dashboards ejecutivos y reportes personalizados con datos en tiempo real para toma de decisiones.' },
  { title: 'Compras & Proveedores', desc: 'Gestión completa del ciclo de compras, órdenes de pedido y evaluación de proveedores.' },
]

export default function MotorGestionPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-950 via-red-950/30 to-slate-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Link href="/productos" className="text-slate-500 hover:text-slate-400 text-sm transition-colors">Productos</Link>
            <span className="text-slate-700">/</span>
            <span className="text-red-400 text-sm font-medium">Motor de Gestión</span>
          </div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-red-400 font-medium">ERP Empresarial</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              Motor de Gestión — ERP para tu empresa
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              Suite de gestión empresarial integral que centraliza todos los procesos de tu organización
              en una sola plataforma, adaptada al mercado paraguayo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="bg-red-600 hover:bg-red-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2">
                Solicitar demo <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link href="/contacto" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-all">
                Conocer precios
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white">Módulos principales</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Un ERP modular que crece con tu empresa, adaptándose a cada proceso del negocio.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m, i) => (
              <AnimatedSection key={m.title} delay={i * 0.07}>
                <div className="bg-red-500/15 border border-red-500/20 rounded-2xl p-7 hover:shadow-lg transition-all">
                  <CheckCircleIcon className="w-6 h-6 text-red-500 mb-4" />
                  <h3 className="font-bold text-white mb-2">{m.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4">Digitaliza tu empresa hoy</h2>
            <p className="text-red-100 mb-8">
              Implementación local con soporte de iTCS S.A. y capacitación completa para tu equipo.
            </p>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition-colors">
              Solicitar demostración <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
