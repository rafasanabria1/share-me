import { cookies } from 'next/headers'
import PublicView from '@/public-view/public-view'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '@database'

export default async function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  if (user?.id === undefined) throw new Error('User not found')

  const { data: userInfo } = await supabase.from('users').select().eq('id', user.id).single()
  const { data: links } = await supabase.from('links').select().eq('user_id', user.id).order('order', { ascending: true })

  return (
    <main className="min-h-screen grid grid-cols1 md:grid-cols-2 gap-8 p-8 w-full max-w-screen-xl mx-auto">
        <section className="hidden md:flex md:flex-col justify-center my-auto">
            <h1 className='w-full text-center text-3xl font-bold mb-3'>Preview your links!</h1>
            <div className="mockup-phone shadow-lg shadow-slate-600">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-4 ">
                        <PublicView user={userInfo} links={links} view={'mobile'} />
                    </div>
                </div>
            </div>
        </section>
        <section className="flex p-4 rounded-2xl shadow-lg border-4 border-[#444] shadow-slate-600">
            {children}
        </section>
    </main>
  )
}
