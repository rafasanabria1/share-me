import PublicView from '@/public-view/[code]/public-view'
import { paths } from '@const'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from 'next/link'

export default async function PublicViewServer ({ params }: { params: { code: string } }) {
  const supabase = createClientComponentClient()
  const { data: user } = await supabase.from('users').select().eq('share_hash', params.code).single()
  const { data: links } = await supabase.from('links').select().eq('user_id', user.id).order('order', { ascending: true })

  return (
    <main className='h-screen flex flex-col justify-center items-center max-w-7xl mx-auto w-full relative'>
        <div className='py-4 lg:self-end lg:mr-4'>
            <Link href={paths.LOGIN} className='btn btn-link lg:btn-primary btn-xs lg:btn-lg'>
                Log in to share your own links!
            </Link>
        </div>
        <PublicView user={user} links={links} className='flex-grow' />
    </main>
  )
}
