import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

import type { Database } from '@database'
import { type Enums } from '@types'
import { paths } from '@const'

export const dynamic = 'force-dynamic'

export async function POST (request: NextRequest, { params }: { params: { provider: Enums<'platform'> } }) {
  const { provider } = params
  if (provider !== 'github' && provider !== 'google') {
    return NextResponse.json({ error: 'Invalid provider' }, { status: 401 })
  }

  const cookieStore = cookies()
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookieStore })

  const redirectURL = new URL(paths.LOGIN_CALLBACK, process.env.NEXT_PUBLIC_BASE_URL)
  const { data } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectURL.toString()
    }
  })

  return NextResponse.json({ data }, { status: 200 })
}
