import { cookies } from 'next/headers'
import crypto from 'crypto'

const ADMIN_USER = 'admin'
const ADMIN_PASS_HASH = crypto.createHash('sha256').update('itcs2026!').digest('hex')
const SESSION_NAME = 'itcs_admin_session'
const SESSION_SECRET = 'itcs-blog-secret-key-2026'

function hashPassword(pass: string): string {
  return crypto.createHash('sha256').update(pass).digest('hex')
}

function createToken(user: string): string {
  const payload = `${user}:${Date.now()}`
  const hmac = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('hex')
  return Buffer.from(`${payload}:${hmac}`).toString('base64')
}

function verifyToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString()
    const parts = decoded.split(':')
    if (parts.length < 3) return false
    const user = parts[0]
    const ts = parts[1]
    const hmac = parts.slice(2).join(':')
    const expected = crypto.createHmac('sha256', SESSION_SECRET).update(`${user}:${ts}`).digest('hex')
    if (hmac !== expected) return false
    const age = Date.now() - parseInt(ts)
    return age < 24 * 60 * 60 * 1000
  } catch {
    return false
  }
}

export async function login(user: string, pass: string): Promise<boolean> {
  if (user !== ADMIN_USER || hashPassword(pass) !== ADMIN_PASS_HASH) return false
  const token = createToken(user)
  const cookieStore = await cookies()
  cookieStore.set(SESSION_NAME, token, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 86400,
    path: '/',
  })
  return true
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_NAME)
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_NAME)?.value
  if (!token) return false
  return verifyToken(token)
}
