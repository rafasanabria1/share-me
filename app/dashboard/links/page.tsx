'use server'
import { cookies } from 'next/headers'
import DashboardLinks from '@/dashboard/links/dashboard-links'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '@database'
import { type TablesUpdate } from '@types'

export default async function Dashboard () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  if (user?.id === undefined) throw new Error('User not found')

  const { data: userInfo } = await supabase.from('users').select().eq('id', user.id).single()
  const { data: links } = await supabase.from('links').select().eq('user_id', user.id).order('order', { ascending: true })

  async function saveLinks (links: Array<TablesUpdate<'links'>> | null) {
    'use server'

    if (user === null) throw new Error('User not found')

    try {
      if (links === null) {
        await supabase.from('links').delete().eq('user_id', user.id)
      } else {
        await supabase.from('links').delete().eq('user_id', user.id).not('id', 'in', links.map(link => link.id))
        await supabase.from('links').upsert(links, { onConflict: 'id' })
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <DashboardLinks user={userInfo} links={links} />
  )
}
