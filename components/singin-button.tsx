'use client'

import { useRouter } from 'next/navigation'
import { platforms } from '@const'
import { IconBrandGithub, IconBrandGoogle } from '@tabler/icons-react'

export default function SignInButton ({ id, name }: { id?: string, name: string }) {
  const router = useRouter()

  const handleSignIn = () => {
    fetch(`/auth/login/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then(async response => {
      const { data } = await response.json()
      return data
    }).then(data => {
      router.push(data.url)
    }).catch(e => {
      console.log('Error during loging')
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
