'use client'

import { paths } from '@const'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
export default function SignOutButton () {
  const router = useRouter()

  const handleSignOut = () => {
    const supabase = createClientComponentClient()
    supabase.auth.signOut().then(() => { router.push(paths.HOME) }).catch(e => {
      console.log('Error en el logout')
      console.error(e)
    })
  }

  return (
        <button onClick={handleSignOut} className='flex items-center gap-2 px-8 py-2 border rounded-lg justify-center bg-zinc-600 text-white'>
            Cerrar sesión
        </button>
  )
}
