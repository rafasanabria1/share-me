import { cookies } from 'next/headers'
import PublicView from '@components/public-view'
import DashboardLinks from '@components/dashboard-links'
import { exampleUser } from '@const'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '../../lib/database'

export default async function Dashboard () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  if (user?.id === undefined) throw new Error('User not found')
  console.log(user)

  const { data: userInfo } = await supabase.from('users').select('id, user_name, avatar_url, bio').eq('id', user.id).single()
  const { data: links } = await supabase.from('links').select('id, platform, link, order').eq('user_id', user.id).order('order', { ascending: true })

  return (
    <main className="h-screen bg-zinc-400 grid grid-cols1 md:grid-cols-2 items-stretch gap-8 p-8">
        <section className="hidden md:flex p-2 rounded-3xl border-zinc-500 shadow-lg bg-zinc-100">
            <PublicView user={userInfo} links={links} />
        </section>
        <section className="flex p-2 rounded-3xl border-zinc-500 shadow-lg bg-zinc-100">
            <DashboardLinks />
        </section>
    </main>
  )
}
