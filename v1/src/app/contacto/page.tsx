'use client'

import { useState } from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  MapPinIcon, EnvelopeIcon, PhoneIcon, ClockIcon,
  CheckCircleIcon, ArrowRightIcon,
} from '@heroicons/react/24/outline'

const schema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  empresa: z.string().min(2, 'Ingresa el nombre de tu empresa'),
  email: z.string().email('Ingresa un email válido'),
  telefono: z.string().optional(),
  asunto: z.string().min(1, 'Selecciona un asunto'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type FormData = z.infer<typeof schema>

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200))
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-blue-400 font-medium">Estamos aquí para ayudarte</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-6 max-w-3xl leading-tight">
              Hablemos de tecnología
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Completa el formulario y un consultor de iTCS se pondrá en contacto contigo
              a la brevedad para entender tus necesidades y ofrecerte la mejor solución.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <AnimatedSection direction="right">
                <h2 className="text-2xl font-bold text-white mb-6">Información de contacto</h2>
                <div className="space-y-4">
                  {[
                    { icon: MapPinIcon, label: 'Ubicación', value: <span>Barrio Virgen del Huerto<br />Asunción, Paraguay</span> },
                    { icon: EnvelopeIcon, label: 'Email', value: <a href="mailto:info@itcs.com.py" className="text-blue-400 hover:text-blue-300 transition-colors">info@itcs.com.py</a> },
                    { icon: PhoneIcon, label: 'Teléfono', value: <a href="tel:+595217288222" className="text-blue-400 hover:text-blue-300 transition-colors">+595 21 728-8222</a> },
                    { icon: ClockIcon, label: 'Horario de atención', value: <span>Lunes a Viernes: 08:00 — 18:00 hs<br /><span className="text-slate-600 text-xs">Soporte 24/7 para clientes con SLA activo</span></span> },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 p-4 dark-card rounded-2xl">
                      <div className="w-10 h-10 bg-blue-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{item.label}</div>
                        <div className="text-slate-400 text-sm mt-0.5">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* RRHH */}
              <AnimatedSection direction="right" delay={0.1}>
                <div className="bg-blue-600 rounded-3xl p-8 text-white">
                  <h3 className="font-bold text-lg mb-2">¿Buscas trabajo?</h3>
                  <p className="text-blue-100 text-sm leading-relaxed mb-4">
                    Envía tu currículum a RRHH si estás interesado en formar parte de nuestro equipo.
                  </p>
                  <a href="mailto:rrhh@itcs.com.py" className="inline-flex items-center gap-2 bg-white text-blue-600 text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                    rrhh@itcs.com.py <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <div className="dark-card rounded-3xl p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-20 h-20 bg-green-500/15 rounded-full flex items-center justify-center mb-6">
                        <CheckCircleIcon className="w-10 h-10 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">¡Mensaje enviado!</h3>
                      <p className="text-slate-400 mb-8 max-w-sm">
                        Gracias por contactarnos. Un consultor de iTCS te responderá en las próximas horas hábiles.
                      </p>
                      <button onClick={() => setSubmitted(false)} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                        Enviar otro mensaje
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-white mb-8">Envíanos un mensaje</h2>
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1.5">Nombre completo *</label>
                            <input {...register('nombre')} type="text" placeholder="Juan Pérez" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" />
                            {errors.nombre && <p className="text-red-400 text-xs mt-1">{errors.nombre.message}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1.5">Empresa *</label>
                            <input {...register('empresa')} type="text" placeholder="Mi Empresa S.A." className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" />
                            {errors.empresa && <p className="text-red-400 text-xs mt-1">{errors.empresa.message}</p>}
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1.5">Email *</label>
                            <input {...register('email')} type="email" placeholder="juan@empresa.com" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" />
                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1.5">Teléfono (opcional)</label>
                            <input {...register('telefono')} type="tel" placeholder="+595 21 728-8222" className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-1.5">Asunto *</label>
                          <select {...register('asunto')} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm">
                            <option value="">Selecciona un asunto</option>
                            <option value="infraestructura">Infraestructura & Servidores</option>
                            <option value="ciberseguridad">Ciberseguridad</option>
                            <option value="networking">Networking</option>
                            <option value="backup">Backup & Continuidad</option>
                            <option value="productos">Productos & Licencias</option>
                            <option value="soporte">Soporte Técnico</option>
                            <option value="desarrollo">Desarrollo de Software</option>
                            <option value="otro">Otro</option>
                          </select>
                          {errors.asunto && <p className="text-red-400 text-xs mt-1">{errors.asunto.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-300 mb-1.5">Mensaje *</label>
                          <textarea {...register('mensaje')} rows={5} placeholder="Cuéntanos sobre tu empresa y qué soluciones estás buscando..." className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm resize-none" />
                          {errors.mensaje && <p className="text-red-400 text-xs mt-1">{errors.mensaje.message}</p>}
                        </div>
                        <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed">
                          {isSubmitting ? (
                            <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Enviando...</>
                          ) : (
                            <>Enviar mensaje <ArrowRightIcon className="w-4 h-4" /></>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
