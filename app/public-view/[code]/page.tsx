import PublicView from '@/public-view/[code]/public-view'
import { paths } from '@const'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

export default async function PublicViewServer ({ params }: { params: { code: string } }) {
  const supabase = createClientComponentClient()
  const { data: user } = await supabase.from('users').select().eq('id', params.code).single()
  const { data: links } = await supabase.from('links').select().eq('user_id', params.code).order('order', { ascending: true })

  return (
    <main className='h-screen flex justify-center items-center max-w-7xl mx-auto w-full relative'>
        <div className='absolute right-5 top-5'>
            <Link href={paths.LOGIN} className='btn btn-primary btn-sm'>
                Log in to share your own links!
            </Link>
        </div>
        <PublicView user={user} links={links} />
    </main>
  )
}
