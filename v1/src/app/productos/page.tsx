import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Productos',
  description:
    'Distribuimos las marcas tecnológicas líderes: Veeam, Sophos, PRTG, HPE, Aruba, Motor de Gestión y Samsung.',
}

const products = [
  {
    name: 'Veeam',
    category: 'Backup & Recovery',
    desc: 'Plataforma líder mundial en protección de datos, backup y recuperación ante desastres para entornos físicos, virtuales y en la nube.',
    features: ['Backup inmutable', 'Replicación automática', 'Recovery instantáneo', 'Soporte multi-cloud'],
    href: '/productos/veeam',
    gradient: 'from-green-500 to-emerald-700',
    badge: 'Backup Leader',
  },
  {
    name: 'Sophos',
    category: 'Ciberseguridad',
    desc: 'Plataforma de ciberseguridad adaptativa con IA, protección de endpoints, firewall next-gen y detección de amenazas en tiempo real.',
    features: ['Endpoint Protection', 'XDR & MDR', 'Firewall Next-Gen', 'Zero Trust'],
    href: '/productos/sophos',
    gradient: 'from-blue-500 to-blue-800',
    badge: 'Security Leader',
  },
  {
    name: 'PRTG Network Monitor',
    category: 'Monitoreo de Red',
    desc: 'Solución integral de monitoreo de red que permite supervisar toda la infraestructura IT desde una sola consola.',
    features: ['Monitoreo 24/7', 'Alertas en tiempo real', 'Dashboards personalizados', 'Reportes automáticos'],
    href: '/productos/prtg',
    gradient: 'from-orange-500 to-orange-700',
    badge: 'Network Monitor',
  },
  {
    name: 'HPE',
    category: 'Servidores & Storage',
    desc: 'Servidores, almacenamiento y soluciones de infraestructura de Hewlett Packard Enterprise para entornos críticos.',
    features: ['Servidores ProLiant', 'Storage Nimble', 'HCI SimpliVity', 'Servicios GreenLake'],
    href: '/productos/hpe',
    gradient: 'from-blue-700 to-indigo-800',
    badge: 'Enterprise Hardware',
  },
  {
    name: 'Aruba Networks',
    category: 'Networking Empresarial',
    desc: 'Soluciones de redes inalámbricas, switches y SD-WAN de nivel empresarial, con seguridad integrada y gestión centralizada.',
    features: ['Wi-Fi 6/6E', 'Switches inteligentes', 'SD-WAN', 'Network Access Control'],
    href: '/productos/aruba',
    gradient: 'from-purple-500 to-purple-800',
    badge: 'Networking Leader',
  },
  {
    name: 'Motor de Gestión',
    category: 'ERP & Software',
    desc: 'Suite de gestión empresarial integral que cubre las necesidades operativas y administrativas de empresas de todos los tamaños.',
    features: ['ERP modular', 'CRM integrado', 'Reportes BI', 'Gestión de inventario'],
    href: '/productos/motor-gestion',
    gradient: 'from-red-500 to-red-800',
    badge: 'ERP Suite',
  },
  {
    name: 'Samsung B2B',
    category: 'Dispositivos & Pantallas',
    desc: 'Soluciones Samsung para empresas: pantallas profesionales, dispositivos móviles, y equipos de videoconferencia.',
    features: ['Pantallas LED/OLED', 'Interactive Displays', 'Knox Security', 'Gestión MDM'],
    href: '/productos/samsung',
    gradient: 'from-slate-500 to-slate-800',
    badge: 'Display & Devices',
  },
]

export default function ProductosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-blue-400 font-medium">Distribución autorizada</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              Productos tecnológicos de clase mundial
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Somos distribuidores autorizados de las marcas líderes del mercado IT. Accede a
              las mejores soluciones con el respaldo de iTCS.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <AnimatedSection key={product.name} delay={i * 0.05}>
                <Link
                  href={product.href}
                  className="group block dark-card rounded-3xl overflow-hidden hover:scale-[1.02] transition-all"
                >
                  <div className={`bg-gradient-to-br ${product.gradient} p-8 relative overflow-hidden`}>
                    <div className="absolute top-3 right-3">
                      <span className="text-xs font-semibold bg-white/20 text-white rounded-full px-3 py-1">{product.badge}</span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-white">{product.name}</h2>
                    <p className="text-white/70 text-sm mt-1">{product.category}</p>
                  </div>
                  <div className="p-8">
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">{product.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-1 text-blue-400 group-hover:text-blue-300 font-semibold text-sm transition-colors">
                      Ver más detalles <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
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
              ¿Necesitas ayuda para elegir?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Nuestros consultores pueden asesorarte sobre cuál es la mejor solución para tu empresa.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              Solicitar asesoría
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
