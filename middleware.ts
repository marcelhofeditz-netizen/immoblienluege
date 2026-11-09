import { NextRequest, NextResponse } from 'next/server'

// thepropertylie.com / propertylie.com zeigen die englische Seite unter „/“.
export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  if (host.includes('propertylie') && req.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/en', req.url))
  }
  if (host.includes('propertylie') && req.nextUrl.pathname === '/en') {
    return NextResponse.redirect(new URL('/', req.url), 308)
  }
  return NextResponse.next()
}

export const config = { matcher: ['/', '/en', '/robots.txt', '/sitemap.xml'] }
