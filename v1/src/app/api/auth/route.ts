import { NextRequest, NextResponse } from 'next/server'
import { login, logout, isAuthenticated } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { action, user, pass } = body

  if (action === 'login') {
    const ok = await login(user, pass)
    if (!ok) return NextResponse.json({ error: 'Credenciales inválidas' }, { status: 401 })
    return NextResponse.json({ ok: true })
  }

  if (action === 'logout') {
    await logout()
    return NextResponse.json({ ok: true })
  }

  return NextResponse.json({ error: 'Acción no válida' }, { status: 400 })
}

export async function GET() {
  const auth = await isAuthenticated()
  return NextResponse.json({ authenticated: auth })
}
