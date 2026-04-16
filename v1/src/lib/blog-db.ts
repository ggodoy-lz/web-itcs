import fs from 'fs'
import path from 'path'

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  image: string
  date: string
  readTime: string
  status: 'published' | 'draft'
  createdAt: string
  updatedAt: string
}

const DB_PATH = path.join(process.cwd(), 'data', 'blogs.json')

function ensureDir() {
  const dir = path.dirname(DB_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(DB_PATH)) {
    const seed = loadSeed()
    fs.writeFileSync(DB_PATH, JSON.stringify(seed, null, 2))
  }
}

function loadSeed(): BlogPost[] {
  try {
    const seedPath = path.join(process.cwd(), 'src', 'data', 'blog-posts.json')
    const raw = JSON.parse(fs.readFileSync(seedPath, 'utf-8'))
    return raw.map((p: Record<string, string>) => ({
      ...p,
      content: `<p>${p.excerpt}</p><p>En iTCS S.A. llevamos más de 20 años acompañando a empresas paraguayas en su transformación digital. Contactanos para más información.</p>`,
      status: 'published' as const,
      createdAt: p.date,
      updatedAt: p.date,
    }))
  } catch {
    return []
  }
}

export function getAllPosts(): BlogPost[] {
  ensureDir()
  const raw = fs.readFileSync(DB_PATH, 'utf-8')
  return JSON.parse(raw)
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.status === 'published')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug)
}

export function getPostById(id: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.id === id)
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function createPost(data: Partial<BlogPost>): BlogPost {
  const posts = getAllPosts()
  const now = new Date().toISOString().slice(0, 10)
  const slug = data.slug || slugify(data.title || 'sin-titulo')
  const id = slug + '-' + Date.now().toString(36)

  const post: BlogPost = {
    id,
    title: data.title || '',
    slug,
    excerpt: data.excerpt || '',
    content: data.content || '',
    category: data.category || 'General',
    author: data.author || 'Equipo iTCS',
    image: data.image || '',
    date: data.date || now,
    readTime: data.readTime || '3 min',
    status: data.status || 'draft',
    createdAt: now,
    updatedAt: now,
  }

  posts.unshift(post)
  fs.writeFileSync(DB_PATH, JSON.stringify(posts, null, 2))
  return post
}

export function updatePost(id: string, data: Partial<BlogPost>): BlogPost | null {
  const posts = getAllPosts()
  const idx = posts.findIndex((p) => p.id === id)
  if (idx === -1) return null

  const now = new Date().toISOString().slice(0, 10)
  posts[idx] = { ...posts[idx], ...data, updatedAt: now }
  if (data.title && !data.slug) {
    posts[idx].slug = slugify(data.title)
  }
  fs.writeFileSync(DB_PATH, JSON.stringify(posts, null, 2))
  return posts[idx]
}

export function deletePost(id: string): boolean {
  const posts = getAllPosts()
  const filtered = posts.filter((p) => p.id !== id)
  if (filtered.length === posts.length) return false
  fs.writeFileSync(DB_PATH, JSON.stringify(filtered, null, 2))
  return true
}
