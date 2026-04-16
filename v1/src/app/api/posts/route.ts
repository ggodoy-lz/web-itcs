import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getAllPosts, getPublishedPosts, createPost } from '@/lib/blog-db'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const all = searchParams.get('all') === '1'

  if (all) {
    const auth = await isAuthenticated()
    if (!auth) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })
    return NextResponse.json(getAllPosts())
  }

  return NextResponse.json(getPublishedPosts())
}

export async function POST(req: NextRequest) {
  const auth = await isAuthenticated()
  if (!auth) return NextResponse.json({ error: 'No autorizado' }, { status: 401 })

  const body = await req.json()
  const post = createPost(body)
  return NextResponse.json(post, { status: 201 })
}
