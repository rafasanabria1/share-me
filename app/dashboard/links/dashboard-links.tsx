'use client'

import { useEffect, useState } from 'react'
import { type Tables, type TablesUpdate } from '@types'
import { IconCircleX, IconLogout, IconPlus, IconUser } from '@tabler/icons-react'
import SignOutButton from '@components/signout-button'
import { paths, platforms } from '@const'
import Link from 'next/link'
import DashboardLinkDetail from './dashboard-link-detail'
import { validateLinks } from '@utils'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '@database'
import { useRouter } from 'next/navigation'

export default function DashBoardLinks (
  {
    links,
    user
  }: {
    links: Array<Tables<'links'>> | null
    user: Tables<'users'> | null
  }) {
  if (user === null) throw new Error('User not found')

  const supabase = createClientComponentClient<Database>()
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [modifiedLinks, setModifiedLinks] = useState<Array<TablesUpdate<'links'>> | null>([])

  useEffect(() => {
    setModifiedLinks(links)
  }, [links])

  const addLink = () => {
    const firstUnusedPlatform = Object.values(platforms).find(platform => {
      if (modifiedLinks === null) return true
      return !modifiedLinks.map(link => link.platform).includes(platform.id)
    })

    const previousLinks = modifiedLinks ?? []
    setModifiedLinks([...previousLinks, {
      id: crypto.randomUUID(),
      platform: firstUnusedPlatform?.id ?? 'github',
      link: '',
      order: previousLinks.length + 1,
      user_id: user.id
    }])
  }

  const removeLink = (id: Tables<'links'>['id']) => {
    const previousLinks = modifiedLinks ?? []
    const newLinks = previousLinks.filter(link => link.id !== id)
    setModifiedLinks(newLinks)
  }

  const updateLink = (link: TablesUpdate<'links'>) => {
    setModifiedLinks((previousLinks) => {
      if (previousLinks === null) {
        return null
      }
      return previousLinks.map(previousLink => {
        if (previousLink.id === link.id) {
          return link
        }
        return previousLink
      })
    })
  }

  const saveLinks = async () => {
    if (modifiedLinks === null) return

    if (!validateLinks(modifiedLinks)) {
      setError('Invalid links')
      return
    }
    setError(null)

    try {
      setSaving(true)
      if (modifiedLinks.length === 0) {
        await supabase.from('links').delete().eq('user_id', user.id)
      } else {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        await supabase.from('links').delete().eq('user_id', user.id).not('id', 'in', `(${modifiedLinks.map(link => link.id)})`)
        await supabase.from('links').upsert(modifiedLinks.map(link => {
          return {
            id: link.id,
            platform: link.platform,
            link: link.link,
            order: link.order,
            user_id: link.user_id,
            updated_at: new Date().toISOString()
          }
        }), { onConflict: 'id' })
        router.refresh()
      }
    } catch (e: any) {
      console.log(e)
      setError(e.message)
    } finally {
      setSaving(false)
    }
  }

  return (
      <div className="flex flex-col w-full gap-8">
            {
                error !== null && (
                    <div className='alert alert-error relative'>
                        <button className='' type='button' onClick={() => { setError(null) }}>
                            <IconCircleX size={20}/>
                        </button>
                        <span>{error}</span>
                    </div>
                )
            }
            <header className="w-full flex justify-between">
                <Link href={paths.DASHBOARD_PROFILE} className='btn btn-primary btn-circle btn-sm'>
                    <IconUser />
                </Link>
                <SignOutButton className='btn btn-outline btn-warning btn-sm'>
                    Logout <IconLogout size={16} />
                </SignOutButton>
            </header>
            <main className='flex-grow flex flex-col gap-4'>
                <div className=''>
                    <h1 className='font-bold text-2xl'>Customize your links</h1>
                    <p className='text-sm mt-2'>Add/edit/remove links below and then share all your profiles!</p>
                </div>
                <button className='btn btn-outline btn-sm w-full mt-4' onClick={addLink} type='button'>
                    <span>Add new link</span>
                    <IconPlus size={20} />
                </button>
                <section className='flex flex-col gap-4'>
                    {
                        modifiedLinks?.map((link, index) => {
                          return <DashboardLinkDetail key={link.id} link={link} index={index} removeLink={removeLink} updateLink={updateLink} />
                        })
                    }
                </section>
            </main>
            <footer className='mt-4'>
                <button className="btn btn-success w-full" onClick={async () => { await saveLinks() }} disabled={saving}>{
                saving
                  ? <>
                        <span>Saving</span>
                        <span className='animate-spin'>
                            <IconPlus size={20} />
                        </span>
                    </>
                  : 'Save'}</button>
            </footer>

    </div>
  )
}
