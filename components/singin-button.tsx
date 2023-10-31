'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { paths, platforms } from '@const'
import { type Provider } from '@supabase/supabase-js'
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'

export default function SignInButton ({ id, name }: { id: string, name: string }) {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const redirectURL = new URL(paths.LOGIN_CALLBACK, process.env.NEXT_PUBLIC_BASE_URL)

  const handleSignIn = () => {
    supabase.auth.signInWithOAuth({
      provider: id as Provider,
      options: {
        redirectTo: redirectURL.toString()
      }
    }).then(() => { router.refresh() })
      .catch(e => {
        console.log('Error en el login')
        console.error(e)
      })
  }

  return (
    <button onClick={handleSignIn} className={`flex items-center gap-2 px-8 py-4 rounded-lg justify-center text-slate-300 bg-${id} border border-slate-300 hover:bg-opacity-80 hover:text-white`}>
        {
            id === platforms.github.loginProviderId && (<IconBrandGithub size={24} />)
        }
        {
            id === platforms.google.loginProviderId && (<IconBrandGoogle size={24} />)
        }
        <span>Sign in with {name}</span>
    </button>
  )
}
