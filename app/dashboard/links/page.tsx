import { cookies } from 'next/headers'
import DashboardLinks from '@/dashboard/links/dashboard-links'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '../../../lib/database'

export default async function Dashboard () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  if (user?.id === undefined) throw new Error('User not found')

  const { data: links } = await supabase.from('links').select().eq('user_id', user.id).order('order', { ascending: true })

  console.log(links)
  return (
    <DashboardLinks links={links} />
  )
}
