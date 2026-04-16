'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const productLinks = [
  { name: 'Veeam', href: '/productos/veeam', desc: 'Backup & Recovery' },
  { name: 'Sophos', href: '/productos/sophos', desc: 'Ciberseguridad' },
  { name: 'PRTG Monitor', href: '/productos/prtg', desc: 'Monitoreo de Red' },
  { name: 'HPE', href: '/productos/hpe', desc: 'Servidores & Storage' },
  { name: 'Aruba', href: '/productos/aruba', desc: 'Networking Empresarial' },
  { name: 'ManageEngine', href: '/productos/motor-gestion', desc: 'ERP & Software' },
  { name: 'Samsung', href: '/productos/samsung', desc: 'Dispositivos & Pantallas' },
]

const serviceLinks = [
  { name: 'Infraestructura & Productividad', href: '/servicios/infraestructura' },
  { name: 'Ciberseguridad', href: '/servicios/ciberseguridad' },
  { name: 'Networking & Telecomunicaciones', href: '/servicios/networking' },
  { name: 'Base de Datos', href: '/servicios/bases-de-datos' },
  { name: 'Desarrollo de Sistemas', href: '/servicios/desarrollo' },
  { name: 'Backup & Continuidad', href: '/servicios/backup' },
  { name: 'Cómputo de Misión Crítica', href: '/servicios/mision-critica' },
  { name: 'Soporte Técnico', href: '/servicios/soporte' },
  { name: 'Obras Civiles', href: '/servicios/obras-civiles' },
]

const companyLinks = [
  { name: 'Quiénes somos', href: '/compania' },
  { name: 'Partners', href: '/partners' },
  { name: 'Certificaciones', href: '/certificaciones' },
  { name: 'Políticas ISO', href: '/politicas' },
]

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Empresa', href: '/compania', hasDropdown: 'company' as const },
  { name: 'Partners', href: '/partners' },
  { name: 'Servicios', href: '/servicios', hasDropdown: 'services' as const },
  { name: 'Productos', href: '/productos', hasDropdown: 'products' as const },
  { name: 'Blog', href: '/blog' },
]

type DropdownKey = 'products' | 'services' | 'company' | null

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdown, setDropdown] = useState<DropdownKey>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileOpen(false); setDropdown(null) }, [pathname])

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  function openDropdown(key: DropdownKey) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setDropdown(key)
  }
  function closeDropdown() {
    timeoutRef.current = setTimeout(() => setDropdown(null), 150)
  }

  const dropdownData: Record<string, typeof productLinks> = {
    products: productLinks,
    services: serviceLinks,
    company: companyLinks,
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-slate-800/50'
        : 'bg-slate-950/80 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logos/logo-itcs-blanco-300x122.png.webp" alt="iTCS S.A." width={180} height={73} className="h-14 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const key = link.hasDropdown ?? null
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => key && openDropdown(key)}
                  onMouseLeave={() => key && closeDropdown()}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2.5 rounded-lg text-[15px] font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-white bg-white/8'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${dropdown === key ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {key && dropdown === key && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1.5 w-64 bg-slate-900 border border-slate-700/60 rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
                        onMouseEnter={() => openDropdown(key)}
                        onMouseLeave={closeDropdown}
                      >
                        <div className="py-2">
                          {dropdownData[key].map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex flex-col px-4 py-2.5 hover:bg-slate-800 transition-colors group"
                            >
                              <span className="text-sm font-medium text-slate-200 group-hover:text-white">{item.name}</span>
                              {'desc' in item && item.desc && (
                                <span className="text-xs text-slate-500">{item.desc}</span>
                              )}
                            </Link>
                          ))}
                          <div className="border-t border-slate-800 mt-1 pt-1">
                            <Link
                              href={link.href}
                              className="flex items-center gap-1.5 px-4 py-2 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
                            >
                              Ver todo → {link.name}
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contacto" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-[15px] px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25">
              Contacto
            </Link>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-slate-400 hover:text-white">
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950 border-t border-slate-800 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link href={link.href} className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors font-medium">
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 border-l border-slate-800 pl-3 space-y-0.5 mb-2">
                      {dropdownData[link.hasDropdown].map((item) => (
                        <Link key={item.name} href={item.href} className="block px-3 py-2 text-sm text-slate-400 hover:text-slate-200 rounded-lg transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-slate-800">
                <Link href="/contacto" className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-3 rounded-xl transition-all">
                  Contactar ahora
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
