'use client'

import { useState } from 'react'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    console.log('Newsletter subscription:', email)
    setDone(true)
    setEmail('')
  }

  if (done) {
    return (
      <div className="flex items-center justify-center gap-2 text-green-400 py-2">
        <CheckCircleIcon className="w-5 h-5" />
        <span className="text-sm font-medium">¡Suscrito! Te enviaremos novedades pronto.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl transition-all flex items-center gap-1.5 text-sm flex-shrink-0"
      >
        Suscribirme <ArrowRightIcon className="w-3.5 h-3.5" />
      </button>
    </form>
  )
}
