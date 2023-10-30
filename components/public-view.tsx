import SocialButton from '@components/SocialButton'
import { IconPhotoCancel } from '@tabler/icons-react'
import { type Tables } from '../lib/database'

export default async function PublicView ({ user }: { user?: Tables<'users'> }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <section className="flex flex-col items-center max-w-2xl px-2 mx-auto md:px-0">
        <picture className='w-32 h-32 mb-3 border rounded-full shadow-lg flex items-center justify-center'>
            {
                user?.avatar_url !== undefined
                  ? <img className="w-32 h-32 rounded-full shadow-lg" src={user.avatar_url} alt={user.user_name} />
                  : <IconPhotoCancel className='text-zinc-300' size={48} />
            }
        </picture>
        {
            user?.user_name !== undefined
              ? <h1 className="text-5xl font-bold font-mono leading-none tracking-tight text-center mb-4">{user.user_name}</h1>
              : <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
        }
        {
            user?.bio !== undefined
              ? <p className='text-lg font-normal text-center text-md'>{user.bio}</p>
              : <div className='w-full'>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
                </div>
        }

      </section>
      <section className='flex flex-col gap-4 w-full max-w-lg mt-20 px-2 mx-auto overflow-y-auto md:px-0'>
        {
            user?.links?.map((link) => (
                <SocialButton key={link.id} platform={link.platform} href={link.link} />
            ))
        }
      </section>
    </div>
  )
}
