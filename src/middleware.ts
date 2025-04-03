import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Return early if it's a static file or API route
  if (
    pathname.startsWith('/_next') || // Static files
    pathname.startsWith('/api') || // API routes
    pathname.startsWith('/static') || // Static assets
    pathname.match(/^\/[^/]+\.[^/]+$/) // Root files like favicon.ico
  ) {
    return NextResponse.next()
  }

  // Handle all other routes normally
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|static|[\\w-]+\\.\\w+).*)',
  ],
} 