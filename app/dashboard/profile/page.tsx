import { cookies } from 'next/headers'
import { type Database } from '@database'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import DashBoardProfile from '@/dashboard/profile/dashboard-profile'

export default async function Profile () {
  const cookieStore = cookies()
  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })
  const { data: { user } } = await supabase.auth.getUser()
  if (user?.id === undefined) throw new Error('User not found')

  const { data: userInfo } = await supabase.from('users').select().eq('id', user.id).single()
  return (
    <DashBoardProfile user={userInfo} />
  )
}
