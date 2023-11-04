'use client'

import { useEffect, useState } from 'react'
import { type Tables, type TablesUpdate } from '@types'
import { IconLogout, IconPlus, IconUser } from '@tabler/icons-react'
import SignOutButton from '@components/signout-button'
import { paths } from '@const'
import Link from 'next/link'
import DashboardLinkDetail from './dashboard-link-detail'

export default function DashBoardLinks (
  {
    links,
    user
  }: {
    links: Array<Tables<'links'>> | null
    user: Tables<'users'> | null
  }) {
  const [saving, setSaving] = useState(false)
  const [modifiedLinks, setModifiedLinks] = useState<Array<TablesUpdate<'links'>> | null>([])

  useEffect(() => {
    setModifiedLinks(links)
  }, [links])

  const addLink = () => {
    if (user === null) throw new Error('User not found')

    const previousLinks = modifiedLinks ?? []
    setModifiedLinks([...previousLinks, {
      id: crypto.randomUUID(),
      platform: 'github',
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

  const handleSaveLinks = () => {
    setSaving(true)
    console.log({ modifiedLinks })
    setSaving(false)
  }

  return (
      <div className="flex flex-col w-full gap-8">
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
            <button className='btn btn-outline btn-sm w-full mt-4' onClick={addLink}>
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
        <footer>
            <button className="btn btn-success w-full" onClick={handleSaveLinks} disabled={saving}>{
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
