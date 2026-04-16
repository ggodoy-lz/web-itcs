'use client'

import { useState, useEffect } from 'react'

const FONTS = [
  {
    id: 'inter',
    label: 'Inter',
    tag: 'Estándar Digital',
    variable: '--font-inter',
  },
  {
    id: 'jakarta',
    label: 'Plus Jakarta Sans',
    tag: 'Institucional',
    variable: '--font-jakarta',
  },
  {
    id: 'dm',
    label: 'DM Sans',
    tag: 'Corporativa',
    variable: '--font-dm',
  },
  {
    id: 'outfit',
    label: 'Outfit',
    tag: 'Contemporánea',
    variable: '--font-outfit',
  },
  {
    id: 'nunito',
    label: 'Nunito Sans',
    tag: 'Amigable',
    variable: '--font-nunito',
  },
  {
    id: 'space',
    label: 'Space Grotesk',
    tag: 'Tecnológica',
    variable: '--font-space',
  },
]

const STORAGE_KEY = 'itcs-font'

export default function FontSelector() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inter')

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) || 'inter'
    applyFont(saved)
    setActive(saved)
  }, [])

  function applyFont(id: string) {
    const font = FONTS.find((f) => f.id === id)
    if (!font) return
    document.documentElement.style.setProperty('--font-selected', `var(${font.variable})`)
    localStorage.setItem(STORAGE_KEY, id)
  }

  function handleSelect(id: string) {
    setActive(id)
    applyFont(id)
    setOpen(false)
  }

  const activeFont = FONTS.find((f) => f.id === active)!

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Panel */}
      {open && (
        <div className="mb-3 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl shadow-black/50 p-4 w-72">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-1">
            Tipografía
          </p>
          <div className="space-y-1">
            {FONTS.map((font) => (
              <button
                key={font.id}
                onClick={() => handleSelect(font.id)}
                className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                  active === font.id
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-slate-800 text-slate-300'
                }`}
                style={{ fontFamily: `var(${font.variable}), sans-serif` }}
              >
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-semibold leading-tight">{font.label}</span>
                  <span className={`block text-xs leading-tight ${active === font.id ? 'text-blue-200' : 'text-slate-500'}`}>
                    {font.tag}
                  </span>
                </span>
                {active === font.id && (
                  <svg className="w-4 h-4 flex-shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        title="Cambiar tipografía"
        className={`flex items-center gap-2 px-3.5 py-2 rounded-xl shadow-lg transition-all text-sm font-semibold ${
          open
            ? 'bg-blue-600 text-white shadow-blue-500/30'
            : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white shadow-black/30'
        }`}
        style={{ fontFamily: `var(${activeFont.variable}), sans-serif` }}
      >
        <span className="font-bold text-base">Aa</span>
        <span className="hidden sm:block">{activeFont.label}</span>
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  )
}
