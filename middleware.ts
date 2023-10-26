import { type NextRequest, NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { paths } from '@const'

export async function middleware (req: NextRequest) {
  const res = NextResponse.next()

  if (req.nextUrl.pathname === paths.LOGIN_CALLBACK) return res
  if (req.nextUrl.pathname === paths.PUBLIC_VIEW) return res

  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  if (session === null && req.nextUrl.pathname !== paths.LOGIN) {
    return NextResponse.redirect(new URL(paths.LOGIN, req.url))
  }

  if (session !== null && req.nextUrl.pathname !== paths.DASHBOARD) {
    return NextResponse.redirect(new URL(paths.DASHBOARD, req.url))
  }

  return res
}

export const config = {
  // Este objeto omite las carpetas 'api', '_next' y todos los archivos con una extensión (por ejemplo, favicon.ico).
  matcher: ['/((?!api|_next|.*\\..*).*)']
}
