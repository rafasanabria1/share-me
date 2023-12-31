import { cookies } from 'next/headers'
import PublicView from '@/public-view/[code]/public-view'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { type Database } from '@database'
import ShareMeButton from '@components/shareme-button'

export default async function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore })
  const { data: { user } } = await supabase.auth.getUser()
  if (user?.id === undefined) throw new Error('User not found')

  const { data: userInfo } = await supabase.from('users').select().eq('id', user.id).single()
  const { data: links } = await supabase.from('links').select().eq('user_id', user.id).order('order', { ascending: true })

  return (
    <main className="min-h-screen grid grid-cols1 lg:grid-cols-2 gap-1 p-1 md:gap-8 md:p-8 w-full max-w-screen-xl mx-auto">
        <section className="flex p-4 rounded-2xl shadow-lg border-4 border-[#444] shadow-slate-600">
            {children}
        </section>
        <section className="hidden lg:flex lg:flex-col justify-center my-auto">
            <h1 className='w-full text-center text-3xl font-bold mb-3'>Save & preview your links!</h1>
            <div className="mockup-phone shadow-lg shadow-slate-600">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-4 flex flex-col">
                        <PublicView user={userInfo} links={links} view={'mobile'} className="flex-grow" />
                        <section className='py-4 text-2xl'>
                            <ShareMeButton userId={user.id} />
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
