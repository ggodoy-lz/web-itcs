'use client'

import { useState, useRef } from 'react'

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
}

export default function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  async function uploadFile(file: File) {
    setError('')
    setUploading(true)
    const form = new FormData()
    form.append('file', file)

    try {
      const res = await fetch('/api/upload', { method: 'POST', body: form })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Error al subir')
      } else {
        onChange(data.url)
      }
    } catch {
      setError('Error de conexión')
    }
    setUploading(false)
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) uploadFile(file)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files?.[0]
    if (file) uploadFile(file)
  }

  return (
    <div className="space-y-2">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
          dragOver
            ? 'border-blue-500 bg-blue-500/10'
            : 'border-slate-700 hover:border-slate-600 bg-slate-900/50'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={handleFileChange}
          className="hidden"
        />

        {uploading ? (
          <div className="flex items-center justify-center gap-2 py-2">
            <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm text-slate-400">Subiendo imagen...</span>
          </div>
        ) : value ? (
          <div className="space-y-3">
            <img
              src={value}
              alt="Preview"
              className="max-h-40 mx-auto rounded-lg object-cover"
            />
            <p className="text-xs text-slate-500">Clic o arrastrá otra imagen para reemplazar</p>
          </div>
        ) : (
          <div className="py-3 space-y-1.5">
            <div className="text-slate-500 text-3xl">📷</div>
            <p className="text-sm text-slate-400">Clic o arrastrá una imagen aquí</p>
            <p className="text-xs text-slate-600">JPG, PNG, WebP o GIF · Máx. 5 MB</p>
          </div>
        )}
      </div>

      <div className="bg-slate-800/50 rounded-lg px-3 py-2">
        <p className="text-xs text-slate-500">
          <strong className="text-slate-400">Dimensiones recomendadas:</strong> 1200 × 675 px (proporción 16:9).
          Mínimo 800 × 450 px para buena calidad en la web.
        </p>
      </div>

      {error && (
        <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">{error}</p>
      )}

      <div className="flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs font-mono"
          placeholder="O pegá una URL manualmente: /blog/mi-imagen.jpg"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            className="text-xs text-slate-500 hover:text-red-400 transition-colors px-2 py-2"
          >
            Quitar
          </button>
        )}
      </div>
    </div>
  )
}
