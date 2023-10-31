import { cookies } from 'next/headers'
import PublicView from '@components/public-view'
import DashboardLinks from '@components/dashboard-links'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '../../lib/database'

export default async function Dashboard () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  if (user?.id === undefined) throw new Error('User not found')

  const { data: userInfo } = await supabase.from('users').select().eq('id', user.id).single()
  const { data: links } = await supabase.from('links').select().eq('user_id', user.id).order('order', { ascending: true })

  console.log(links)
  return (
    <main className="h-screen grid grid-cols1 md:grid-cols-2 gap-8 p-8">
        <section className="hidden md:flex my-auto">
            <div className="mockup-phone shadow-lg shadow-slate-600">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-4 ">
                        <PublicView user={userInfo} links={links} view={'mobile'} />
                    </div>
                </div>
            </div>
        </section>
        <section className="flex p-4 rounded-3xl shadow-lg border border-slate-300 shadow-slate-600">
            <DashboardLinks links={links} />
        </section>
    </main>
  )
}
