import { cookies } from 'next/headers'
import DashboardLinks from '@/dashboard/links/dashboard-links'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '@database'

export default async function Dashboard () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  if (user?.id === undefined) throw new Error('User not found')

  const { data: userInfo } = await supabase.from('users').select().eq('id', user.id).single()
  const { data: links } = await supabase.from('links').select().eq('user_id', user.id).order('order', { ascending: true })

  return (
    <DashboardLinks user={userInfo} links={links} />
  )
}
