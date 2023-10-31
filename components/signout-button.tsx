'use client'

import { paths } from '@const'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
export default function SignOutButton ({ children, className }: { children?: React.ReactNode, className?: string }) {
  const router = useRouter()

  const handleSignOut = () => {
    const supabase = createClientComponentClient()
    supabase.auth.signOut().then(() => { router.push(paths.HOME) }).catch(e => {
      console.log('Error en el logout')
      console.error(e)
    })
  }

  return (
    <button onClick={handleSignOut} className={`flex items-center gap-2 justify-center ${className}`}>
        {
            children ?? 'Sign Out'
        }
    </button>
  )
}
