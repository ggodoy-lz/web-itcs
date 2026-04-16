import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import HeroBackground from '@/components/HeroBackground'
import { partners as allPartners } from '@/data/partners'
import { getPublishedPosts } from '@/lib/blog-db'
export const dynamic = 'force-dynamic'
import {
  ServerIcon, ShieldCheckIcon, WifiIcon, CircleStackIcon,
  CodeBracketIcon, ArrowPathIcon, CpuChipIcon, WrenchScrewdriverIcon,
  BuildingOffice2Icon, ArrowRightIcon, CheckBadgeIcon, CalendarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { ClientImg, BrandLogoCard } from '@/components/ClientImg'
import NewsletterForm from '@/components/NewsletterForm'

const services = [
  { icon: ServerIcon,           title: 'Infraestructura & Productividad',           desc: 'Implementación de servidores Microsoft/Linux, virtualización VMware/Hyper-V y servicios en la nube Azure/AWS.',              color: 'text-blue-400',   bg: 'bg-blue-500/10',   href: '/servicios/infraestructura' },
  { icon: ShieldCheckIcon,      title: 'Ciberseguridad',                             desc: 'Seguridad perimetral, protección de endpoints y auditorías de vulnerabilidades para tu organización.',                         color: 'text-red-400',    bg: 'bg-red-500/10',    href: '/servicios/ciberseguridad' },
  { icon: WifiIcon,             title: 'Networking & Telecomunicaciones',            desc: 'Cableado estructurado, fibra óptica, optimización de conectividad y montaje de Data Centers.',                               color: 'text-green-400',  bg: 'bg-green-500/10',  href: '/servicios/networking' },
  { icon: CircleStackIcon,      title: 'Base de Datos',                              desc: 'Diseño, tuning y replicación de bases de datos SQL, Oracle y MongoDB para entornos críticos.',                              color: 'text-yellow-400', bg: 'bg-yellow-500/10', href: '/servicios/bases-de-datos' },
  { icon: CodeBracketIcon,      title: 'Desarrollo de Sistemas',                     desc: 'Desarrollo de software a medida y aplicaciones móviles adaptadas a las necesidades de tu negocio.',                          color: 'text-purple-400', bg: 'bg-purple-500/10', href: '/servicios/desarrollo' },
  { icon: ArrowPathIcon,        title: 'Backup & Continuidad',                       desc: 'Soluciones de respaldo, Disaster Recovery y soluciones inmutables para garantizar la continuidad.',                         color: 'text-cyan-400',   bg: 'bg-cyan-500/10',   href: '/servicios/backup' },
  { icon: CpuChipIcon,          title: 'Cómputo de Misión Crítica',                  desc: 'Infraestructura de alta performance y almacenamiento para entornos de misión crítica.',                                    color: 'text-orange-400', bg: 'bg-orange-500/10', href: '/servicios/mision-critica' },
  { icon: WrenchScrewdriverIcon, title: 'Soporte Técnico',                           desc: 'Soporte de hardware y software con servicio de outsourcing especializado para tu empresa.',                                   color: 'text-teal-400',   bg: 'bg-teal-500/10',   href: '/servicios/soporte' },
  { icon: BuildingOffice2Icon,  title: 'Obras Civiles',                              desc: 'Consultoría y ejecución de proyectos técnicos de construcción para infraestructura IT.',                                    color: 'text-pink-400',   bg: 'bg-pink-500/10',   href: '/servicios/obras-civiles' },
]

const partners = [
  { name: 'Veeam',          desc: 'Backup & Recovery',       logo: '/logos/logo-veeam.png',          href: '/productos/veeam' },
  { name: 'Sophos',         desc: 'Ciberseguridad',          logo: '/logos/logo-sophos.png',         href: '/productos/sophos' },
  { name: 'PRTG',           desc: 'Monitoreo de Red',        logo: '/logos/logo-prtg.png',           href: '/productos/prtg' },
  { name: 'HPE',            desc: 'Servidores & Storage',    logo: '/logos/logo-hpe.png',            href: '/productos/hpe' },
  { name: 'Aruba',          desc: 'Networking',              logo: '/logos/logo-aruba.png',          href: '/productos/aruba' },
  { name: 'ManageEngine',   desc: 'ERP & Gestión',           logo: '/logos/logo-manageengine.png',   href: '/productos/motor-gestion' },
  { name: 'Samsung',        desc: 'Dispositivos B2B',        logo: '/logos/logo-samsung.png',        href: '/productos/samsung' },
  { name: 'Microsoft',      desc: 'Cloud & Productividad',   logo: '/logos/logo-microsoft.png',      href: '/productos' },
]

const stats = [
  { value: '20+', label: 'Años de experiencia' },
  { value: '500+', label: 'Clientes satisfechos' },
  { value: '1,200+', label: 'Proyectos ejecutados' },
  { value: '2', label: 'Certificaciones ISO' },
]

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('es-PY', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function HomePage() {
  const latestPosts = getPublishedPosts().slice(0, 3)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">
        <HeroBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-sm text-blue-400 font-medium">ISO 9001:2015 · ISO 27001:2022</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Soluciones IT que{' '}
              <span className="gradient-text">impulsan</span>{' '}
              tu negocio
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mb-4">
              iTCS S.A. — <strong className="text-slate-200">20 años</strong> siendo el socio tecnológico de confianza en Paraguay.
              Infraestructura, ciberseguridad, networking y desarrollo de sistemas.
            </p>
            <p className="text-sm text-slate-500 mb-10">
              Atención: <span className="text-slate-400">Lunes a Viernes · 08:00 – 18:00 hs</span> &nbsp;|&nbsp; Soporte 24/7 para clientes con SLA
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/servicios" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 flex items-center gap-2">
                Explorar servicios <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link href="/contacto" className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all flex items-center gap-2">
                Hablar con un experto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08} className="text-center">
                <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Lo que hacemos</span>
            <h2 className="mt-2 text-4xl font-extrabold text-white">Servicios especializados</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Cubrimos todo el ciclo tecnológico de tu empresa, desde la infraestructura hasta la seguridad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.04}>
                <div className="group dark-card rounded-2xl p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{service.desc}</p>
                  <Link
                    href={service.href}
                    className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${service.color} opacity-70 group-hover:opacity-100 transition-opacity`}
                  >
                    Ver más detalles <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/servicios" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              Ver todos los servicios <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Partners (ex-Productos) ── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Tecnología de clase mundial</span>
            <h2 className="mt-2 text-4xl font-extrabold text-white">Partners</h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Somos dealers autorizados de marcas líderes del mercado tecnológico internacional.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 0.05}>
                <Link
                  href={p.href}
                  className="group dark-card rounded-2xl p-6 flex flex-col items-center text-center transition-all hover:scale-105"
                >
                  <BrandLogoCard
                    src={p.logo}
                    alt={p.name}
                    fallbackInitial={p.name[0]}
                    className="mb-4"
                  />
                  <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors text-sm">
                    {p.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                </Link>
              </AnimatedSection>
            ))}
            <AnimatedSection delay={0.4}>
              <Link
                href="/productos"
                className="group flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-slate-800 hover:border-blue-500/40 transition-all h-full min-h-[140px]"
              >
                <ArrowRightIcon className="w-6 h-6 text-slate-600 group-hover:text-blue-400 transition-colors mb-2" />
                <span className="text-sm text-slate-500 group-hover:text-blue-400 transition-colors font-medium">Ver todos</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Why iTCS ── */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">¿Por qué iTCS?</span>
              <h2 className="mt-2 text-4xl font-extrabold text-white leading-tight">
                Compromiso con la excelencia tecnológica
              </h2>
              <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                Más de <strong className="text-white">20 años</strong> acompañando a empresas paraguayas en su transformación digital,
                con un equipo de expertos certificados y soluciones probadas en el mercado.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Certificados ISO 9001:2015 e ISO 27001:2022',
                  'Equipo de ingenieros certificados en tecnologías líderes',
                  'Soporte técnico 24/7 para clientes con SLA activo',
                  'Atención comercial Lunes a Viernes 08:00–18:00 hs',
                  'Distribuidor autorizado de marcas premium internacionales',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckBadgeIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/compania" className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                  Conoce nuestra empresa <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link href="/politicas" className="inline-flex items-center gap-2 text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 px-6 py-3 rounded-xl transition-all text-sm font-medium">
                  Políticas ISO
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.12}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Años de experiencia', value: '20+', color: 'bg-blue-600' },
                  { label: 'Proyectos ejecutados', value: '1,200+', color: 'bg-indigo-600' },
                  { label: 'Clientes activos', value: '500+', color: 'bg-violet-600' },
                  { label: 'Ingenieros certificados', value: '30+', color: 'bg-sky-600' },
                ].map((item) => (
                  <div key={item.label} className={`${item.color} rounded-2xl p-6 text-white`}>
                    <div className="text-4xl font-extrabold">{item.value}</div>
                    <div className="text-sm mt-1 text-white/80">{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Partners certificados (logo strip) ── */}
      <section className="py-14 bg-slate-950 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider text-center mb-8">
            Nuestros Partners certificados
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 items-center">
            {allPartners.map((p) => (
              <ClientImg
                key={p.name}
                src={p.img}
                alt={p.name}
                title={p.name}
                className="brand-logo-img"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipo humanizado ── */}
      <section className="bg-slate-900 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-2xl overflow-hidden h-64 col-span-2">
                    <img src="/team/team-group.jpg" alt="Equipo iTCS" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-44">
                    <img src="/team/team-meeting.jpg" alt="Reunión de equipo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-44">
                    <img src="/team/office-workspace.jpg" alt="Oficinas iTCS" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg">
                  Asunción, Paraguay 🇵🇾
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-4">Nuestro equipo</p>
              <h2 className="text-4xl font-extrabold text-white mb-5 leading-tight">
                Más de 30 profesionales<br />a su disposición
              </h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Detrás de cada proyecto hay personas reales con nombres, especializaciones y años
                de experiencia. Nuestro equipo vive la tecnología, no solo la gestiona.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Ingenieros certificados en Sophos, Veeam, HPE, Microsoft y más, disponibles
                24/7 para responder, proteger y hacer crecer su infraestructura IT.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { num: '30+', label: 'Ingenieros certificados' },
                  { num: '24/7', label: 'Soporte disponible' },
                  { num: '20+', label: 'Años de trayectoria' },
                  { num: '500+', label: 'Clientes activos' },
                ].map((s) => (
                  <div key={s.label} className="dark-card rounded-xl p-4">
                    <div className="text-2xl font-black text-blue-400 mb-0.5">{s.num}</div>
                    <div className="text-xs text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/compania" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2">
                Conocer al equipo <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Blog / Últimas Novedades ── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Noticias & Novedades</span>
              <h2 className="mt-2 text-4xl font-extrabold text-white">Últimas novedades</h2>
              <p className="mt-3 text-slate-400 max-w-xl">
                Tecnología, certificaciones y tendencias que impactan a las empresas en Paraguay.
              </p>
            </div>
            <Link href="/blog" className="hidden sm:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors text-sm">
              Ver todas <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post, i) => (
              <AnimatedSection key={post.id} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block dark-card rounded-2xl overflow-hidden h-full">
                  <div className="aspect-video bg-slate-800 relative overflow-hidden">
                    <ClientImg
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-3.5 h-3.5" />
                        {post.readTime} lectura
                      </span>
                    </div>
                    <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-blue-400 font-medium">
                      Leer más <ArrowRightIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              Ver todas las novedades <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">Newsletter</p>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Recibí novedades IT en tu correo
          </h2>
          <p className="text-slate-400 text-sm mb-6">
            Tendencias, actualizaciones de seguridad y noticias del sector. Sin spam.
          </p>
          <NewsletterForm />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            ¿Listo para transformar tu infraestructura?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Hablemos de cómo iTCS puede potenciar la tecnología de tu empresa.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contacto" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-xl hover:shadow-blue-500/30">
              Contactar ahora
            </Link>
            <Link href="/servicios" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
