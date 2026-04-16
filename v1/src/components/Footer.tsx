import Link from 'next/link'
import Image from 'next/image'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { partnerNames } from '@/data/partners'

const productLinks = [
  { name: 'Veeam', href: '/productos/veeam' },
  { name: 'Sophos', href: '/productos/sophos' },
  { name: 'PRTG Monitor', href: '/productos/prtg' },
  { name: 'HPE', href: '/productos/hpe' },
  { name: 'Aruba', href: '/productos/aruba' },
  { name: 'Motor de Gestión', href: '/productos/motor-gestion' },
  { name: 'Samsung', href: '/productos/samsung' },
]

const serviceLinks = [
  { name: 'Infraestructura & Productividad', href: '/servicios' },
  { name: 'Ciberseguridad', href: '/servicios' },
  { name: 'Networking & Telecomunicaciones', href: '/servicios' },
  { name: 'Base de Datos', href: '/servicios' },
  { name: 'Desarrollo de Sistemas', href: '/servicios' },
  { name: 'Backup & Continuidad', href: '/servicios' },
]

const companyLinks = [
  { name: 'Quiénes somos', href: '/compania' },
  { name: 'Partners', href: '/partners' },
  { name: 'Certificaciones', href: '/certificaciones' },
  { name: 'Políticas ISO', href: '/politicas' },
  { name: 'Contacto', href: '/contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/60">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/">
              <Image
                src="/logos/logo-itcs-blanco-300x122.png.webp"
                alt="iTCS S.A."
                width={150}
                height={61}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Information Technology Consulting and Support S.A. — Empresa líder en
              soluciones tecnológicas en Paraguay, con más de 20 años de trayectoria.
            </p>
            <p className="text-xs text-slate-600">
              Horario comercial: Lun–Vie · 08:00 – 18:00 hs
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>Barrio Virgen del Huerto, Asunción, Paraguay</span>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@itcs.com.py" className="hover:text-white transition-colors">
                  info@itcs.com.py
                </a>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href="tel:+595217288222" className="hover:text-white transition-colors">
                  +595 21 728-8222
                </a>
              </div>
            </div>
            {/* ISO Badges */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-slate-300">ISO 9001:2015</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-xs font-medium text-slate-300">ISO 27001:2022</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Productos</h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Servicios</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Compañía</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Partners strip */}
      <div className="border-t border-slate-800/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-600 text-center mb-4 uppercase tracking-wider">
            Partners certificados
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 items-center">
            {partnerNames.map((partner) => (
              <span
                key={partner}
                className="text-xs font-semibold text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-wide"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/40 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} iTCS S.A. — Information Technology Consulting and Support. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/politicas" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Política de Calidad
            </Link>
            <Link href="/politicas" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Política de Seguridad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
