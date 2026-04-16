import type { Metadata } from 'next'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { ClientImg } from '@/components/ClientImg'

export const metadata: Metadata = { title: 'Compañía — iTCS S.A.' }

const milestones = [
  { year: '2005', event: 'Fundación de iTCS S.A. en Asunción, Paraguay.' },
  { year: '2010', event: 'Primera certificación ISO 9001. Apertura de soporte 24/7.' },
  { year: '2015', event: 'Alianza estratégica con Sophos como Partner Platinum.' },
  { year: '2018', event: 'Certificación ISO 27001. Primer Data Center propio.' },
  { year: '2021', event: 'Partnership con Veeam. Expansión a nivel nacional.' },
  { year: '2024', event: 'ISO 27001:2022 actualizado. Más de 500 empresas clientes.' },
]

const teamStats = [
  { val: '30+', label: 'Profesionales certificados' },
  { val: '20+', label: 'Años de trayectoria' },
  { val: '8', label: 'Áreas de especialización' },
  { val: '500+', label: 'Clientes satisfechos' },
]

export default function CompaniaPage() {
  return (
    <>
      {/* Hero con foto de equipo */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        {/* Foto de fondo */}
        <img
          src="/team/team-group.jpg"
          alt="Equipo iTCS S.A."
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-32 w-full">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/25 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-blue-300 text-sm font-semibold">Information Technology Consulting and Support S.A.</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white max-w-3xl leading-tight mb-5">
              Las personas detrás
              <br />
              de la tecnología
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Más de 30 profesionales apasionados por resolver los desafíos tecnológicos
              más complejos de las empresas paraguayas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats rápidos */}
      <section className="bg-blue-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {teamStats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-black text-white mb-1">{s.val}</div>
                <div className="text-sm text-blue-200">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-extrabold text-white mb-6">Quiénes somos</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Fundada en 2005, iTCS S.A. nació con una misión clara: llevar tecnología de
                clase mundial a las empresas paraguayas con el respaldo de ingenieros locales
                que conocen el contexto, el idioma y las necesidades de cada cliente.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Hoy somos el equipo de referencia en infraestructura IT, ciberseguridad y
                continuidad operativa, con certificaciones ISO 9001 e ISO 27001 que avalan
                cada proceso que ejecutamos.
              </p>

              {/* ISO Logos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { logo: '/logos/iso-9001.png', label: 'ISO 9001:2015', sub: 'Gestión de Calidad', color: 'border-green-500/30 bg-green-500/5' },
                  { logo: '/logos/iso-27001.png', label: 'ISO 27001:2022', sub: 'Seguridad de la Información', color: 'border-blue-500/30 bg-blue-500/5' },
                ].map((cert) => (
                  <div key={cert.label} className={`flex items-center gap-3 border rounded-xl p-3 ${cert.color}`}>
                    <ClientImg
                      src={cert.logo}
                      alt={cert.label}
                      className="h-10 w-10 object-contain flex-shrink-0"
                    />
                    <div>
                      <div className="text-white font-semibold text-xs">{cert.label}</div>
                      <div className="text-slate-500 text-xs">{cert.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/team/team-meeting.jpg"
                  alt="Reunión de equipo iTCS"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white text-sm font-semibold">Reunión de planificación técnica — Asunción, Paraguay</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Nuestras oficinas */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white text-center mb-4">Nuestras oficinas</h2>
            <p className="text-slate-400 text-center max-w-xl mx-auto mb-12">
              Un espacio diseñado para la colaboración, la innovación y la atención inmediata
              a cada cliente. Barrio Virgen del Huerto, Asunción.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6">
            <AnimatedSection delay={0.05}>
              <div className="relative rounded-2xl overflow-hidden h-72">
                <img
                  src="/team/office-workspace.jpg"
                  alt="Oficinas iTCS — área de trabajo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-semibold text-sm">Centro de operaciones</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden h-72">
                <img
                  src="/team/team-support.jpg"
                  alt="Equipo de soporte iTCS"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-semibold text-sm">Soporte técnico 24/7</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-3xl font-extrabold text-white text-center mb-14">Nuestra historia</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-transparent" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.07} direction="left">
                  <div className="flex gap-6 items-start">
                    <div className="w-16 flex-shrink-0 text-right">
                      <span className="text-blue-400 font-black">{m.year}</span>
                    </div>
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-xl px-6 py-4 flex-1">
                      <p className="text-slate-300">{m.event}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-extrabold text-white mb-3">¿Quiere trabajar con nosotros?</h3>
          <p className="text-blue-100 mb-8">Siempre estamos buscando talento apasionado por la tecnología.</p>
          <Link href="/contacto" className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors inline-block">
            Contactar
          </Link>
        </div>
      </section>
    </>
  )
}
