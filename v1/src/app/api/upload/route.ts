import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const auth = await isAuthenticated()
  if (!auth) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const formData = await req.formData()
  const file = formData.get('file') as File | null
  if (!file) return NextResponse.json({ error: 'No se envió archivo' }, { status: 400 })

  const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  if (!allowed.includes(file.type)) {
    return NextResponse.json({ error: 'Formato no permitido. Usá JPG, PNG, WebP o GIF.' }, { status: 400 })
  }

  const maxSize = 5 * 1024 * 1024
  if (file.size > maxSize) {
    return NextResponse.json({ error: 'La imagen supera los 5 MB' }, { status: 400 })
  }

  const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
  const safeName = `blog-${Date.now()}.${ext}`
  const uploadDir = path.join(process.cwd(), 'public', 'blog')

  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true })

  const buffer = Buffer.from(await file.arrayBuffer())
  fs.writeFileSync(path.join(uploadDir, safeName), buffer)

  return NextResponse.json({ url: `/blog/${safeName}` })
}
