import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import {
  ServerIcon,
  ShieldCheckIcon,
  WifiIcon,
  CircleStackIcon,
  CodeBracketIcon,
  ArrowPathIcon,
  CpuChipIcon,
  WrenchScrewdriverIcon,
  BuildingOffice2Icon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios IT de iTCS S.A.: infraestructura, ciberseguridad, networking, base de datos, desarrollo de software, backup y soporte técnico.',
}

const services = [
  { id: 'infraestructura',  icon: ServerIcon,           title: 'Infraestructura & Productividad',           desc: 'Diseño, implementación y gestión de servidores Microsoft y Linux, soluciones de virtualización con VMware e Hyper-V, y servicios en la nube con Azure y AWS.',           bullets: ['Servidores físicos y virtuales', 'Microsoft Azure & AWS', 'VMware vSphere / Hyper-V', 'Active Directory & M365', 'Migración a la nube'],          color: 'blue' },
  { id: 'ciberseguridad',   icon: ShieldCheckIcon,      title: 'Ciberseguridad',                             desc: 'Protección integral de tu empresa contra amenazas cibernéticas con tecnología de punta y un equipo de expertos en seguridad de la información.',                     bullets: ['Seguridad perimetral (Firewall)', 'Protección de endpoints', 'Auditorías de vulnerabilidades', 'SOC & Monitoreo 24/7', 'Gestión de identidades'],             color: 'red' },
  { id: 'networking',       icon: WifiIcon,             title: 'Networking & Telecomunicaciones',            desc: 'Infraestructura de red empresarial de alta disponibilidad, desde el cableado estructurado hasta la gestión centralizada de la conectividad.',                       bullets: ['Cableado estructurado & fibra óptica', 'Wi-Fi empresarial', 'SD-WAN & MPLS', 'Data Centers', 'Videoconferencia & colaboración'],                          color: 'green' },
  { id: 'bases-de-datos',   icon: CircleStackIcon,      title: 'Base de Datos',                              desc: 'Diseño, administración, optimización y replicación de bases de datos relacionales y no relacionales para entornos críticos.',                                      bullets: ['SQL Server, Oracle, PostgreSQL', 'MongoDB & NoSQL', 'Tuning & optimización', 'Replicación y alta disponibilidad', 'Migración de datos'],                   color: 'yellow' },
  { id: 'desarrollo',       icon: CodeBracketIcon,      title: 'Desarrollo de Sistemas',                     desc: 'Desarrollo de software a medida, aplicaciones móviles y sistemas web adaptados exactamente a los procesos y necesidades de tu empresa.',                           bullets: ['Aplicaciones web empresariales', 'Apps móviles iOS & Android', 'Integraciones & APIs', 'Automatización de procesos', 'Mantenimiento y evolución'],         color: 'purple' },
  { id: 'backup',           icon: ArrowPathIcon,        title: 'Respaldo & Continuidad de Negocio',          desc: 'Estrategias de backup, recuperación ante desastres y soluciones inmutables para garantizar la continuidad operativa de tu empresa.',                              bullets: ['Backup local y en la nube', 'Disaster Recovery (DR)', 'Soluciones inmutables anti-ransomware', 'Pruebas de recuperación', 'RTO/RPO garantizados'],        color: 'cyan' },
  { id: 'mision-critica',   icon: CpuChipIcon,          title: 'Cómputo & Almacenamiento de Alta Performance', desc: 'Soluciones de infraestructura de misión crítica con alta disponibilidad, escalabilidad y rendimiento para las aplicaciones más exigentes.',                    bullets: ['HCI (Hiperconvergencia)', 'Servidores de alta performance', 'SANs & NAS empresariales', 'Flash storage', 'Clustering y balanceo'],                       color: 'orange' },
  { id: 'soporte',          icon: WrenchScrewdriverIcon, title: 'Soporte Técnico & Outsourcing',              desc: 'Soporte técnico especializado de hardware y software, con modelos de outsourcing flexibles para complementar o cubrir por completo tu área IT.',                  bullets: ['Mesa de ayuda (Help Desk)', 'Soporte on-site y remoto', 'Outsourcing total de IT', 'Mantenimiento preventivo', 'Gestión de activos IT'],                  color: 'teal' },
  { id: 'obras-civiles',    icon: BuildingOffice2Icon,  title: 'Obras Civiles',                              desc: 'Consultoría, diseño y ejecución de proyectos de construcción e ingeniería civil orientados a infraestructura tecnológica.',                                      bullets: ['Centros de datos modulares', 'Cuartos de comunicaciones', 'Obras eléctricas especializadas', 'Climatización IT', 'Gestión de proyectos'],                 color: 'pink' },
]

const colorMap: Record<string, { bg: string; icon: string; iconBg: string; bullet: string; text: string }> = {
  blue:   { bg: 'bg-slate-800/60 border-blue-500/20',   icon: 'text-blue-400',   iconBg: 'bg-blue-500/15',   bullet: 'bg-blue-400',   text: 'text-slate-300' },
  red:    { bg: 'bg-slate-800/60 border-red-500/20',    icon: 'text-red-400',    iconBg: 'bg-red-500/15',    bullet: 'bg-red-400',    text: 'text-slate-300' },
  green:  { bg: 'bg-slate-800/60 border-green-500/20',  icon: 'text-green-400',  iconBg: 'bg-green-500/15',  bullet: 'bg-green-400',  text: 'text-slate-300' },
  yellow: { bg: 'bg-slate-800/60 border-yellow-500/20', icon: 'text-yellow-400', iconBg: 'bg-yellow-500/15', bullet: 'bg-yellow-400', text: 'text-slate-300' },
  purple: { bg: 'bg-slate-800/60 border-purple-500/20', icon: 'text-purple-400', iconBg: 'bg-purple-500/15', bullet: 'bg-purple-400', text: 'text-slate-300' },
  cyan:   { bg: 'bg-slate-800/60 border-cyan-500/20',   icon: 'text-cyan-400',   iconBg: 'bg-cyan-500/15',   bullet: 'bg-cyan-400',   text: 'text-slate-300' },
  orange: { bg: 'bg-slate-800/60 border-orange-500/20', icon: 'text-orange-400', iconBg: 'bg-orange-500/15', bullet: 'bg-orange-400', text: 'text-slate-300' },
  teal:   { bg: 'bg-slate-800/60 border-teal-500/20',   icon: 'text-teal-400',   iconBg: 'bg-teal-500/15',   bullet: 'bg-teal-400',   text: 'text-slate-300' },
  pink:   { bg: 'bg-slate-800/60 border-pink-500/20',   icon: 'text-pink-400',   iconBg: 'bg-pink-500/15',   bullet: 'bg-pink-400',   text: 'text-slate-300' },
}

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-blue-400 font-medium">Soluciones integrales</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              Servicios IT para cada necesidad empresarial
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Desde la infraestructura base hasta la ciberseguridad avanzada, cubrimos todo el
              ciclo tecnológico de tu empresa con expertos certificados.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const c = colorMap[service.color]
              return (
                <AnimatedSection key={service.title} delay={i * 0.06}>
                  <div id={service.id} className={`border rounded-3xl p-8 ${c.bg} h-full scroll-mt-24`}>
                    <div className="flex items-start gap-5">
                      <div className={`w-14 h-14 ${c.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <service.icon className={`w-7 h-7 ${c.icon}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-sm text-slate-400 leading-relaxed mb-5">{service.desc}</p>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {service.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2 text-sm text-slate-400">
                              <span className={`w-1.5 h-1.5 rounded-full ${c.bullet} flex-shrink-0`} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white mb-4">
              ¿Listo para optimizar tu infraestructura?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Hablemos sobre cómo iTCS puede resolver los desafíos tecnológicos de tu empresa.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              Solicitar asesoría gratuita
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
