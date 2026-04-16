import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getPostById, updatePost, deletePost } from '@/lib/blog-db'

export const dynamic = 'force-dynamic'

type Ctx = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, ctx: Ctx) {
  const { id } = await ctx.params
  const post = getPostById(id)
  if (!post) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json(post)
}

export async function PUT(req: NextRequest, ctx: Ctx) {
  const auth = await isAuthenticated()
  if (!auth) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { id } = await ctx.params
  const body = await req.json()
  const post = updatePost(id, body)
  if (!post) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json(post)
}

export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const auth = await isAuthenticated()
  if (!auth) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const { id } = await ctx.params
  const ok = deletePost(id)
  if (!ok) return NextResponse.json({ error: 'No encontrado' }, { status: 404 })
  return NextResponse.json({ ok: true })
}
