'use client'
import { useState } from 'react'
import { IconLink } from '@tabler/icons-react'
import { type Tables } from '@types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '@database'
import { paths } from '@const'

export default function ShareMeButton ({ userId, children }: { userId: Tables<'users'>['id'], children?: React.ReactNode }) {
  if (userId === null || userId === '') throw new Error('User not found')

  const [generatingHash, setGeneratingHash] = useState(false)
  const [copied, setCopied] = useState(false)
  const handleClick = async () => {
    setGeneratingHash(true)
    try {
      const supabase = createClientComponentClient<Database>()
      const { data: user } = await supabase.from('users').select('share_hash').eq('id', userId).single()
      if (user === null) throw new Error('User not found')

      const shareHash = user.share_hash ?? Math.random().toString(36).substring(2, 6)
      if (user?.share_hash === null) {
        await supabase.from('users').update({ share_hash: shareHash }).eq('id', userId)
      }

      const shareUrl = new URL(`${paths.PUBLIC_VIEW}/${shareHash}`, process.env.NEXT_PUBLIC_BASE_URL)
      await navigator.clipboard.writeText(shareUrl.toString())
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 3000)
    } catch (e) {
      console.error(e)
    } finally {
      setGeneratingHash(false)
    }
  }

  let render = null
  if (generatingHash) render = <span className='opacity-70 cursor-wait'>Generating hash...</span>
  else if (copied) render = <span className='text-secondary font-bold text-lg'>Sharing link copied to your clipboard!</span>
  else render = <div className='link link-secondary flex items-center link-hover'><IconLink size={18}/> Share your links!</div>

  return (
    <button id='share-me-button' disabled={generatingHash || copied} aria-disabled={generatingHash || copied} onClick={handleClick}>
        {render}
    </button>
  )
}
