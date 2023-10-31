import SocialButton from '@components/social-button'
import { type Tables } from '@types'

export default async function PublicView ({ user, links, view = 'screen' }: { user?: Tables<'users'> | null, links?: Array<Tables<'links'>> | null, view?: 'mobile' | 'screen' }) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <section className="flex flex-col items-center max-w-2xl px-2 mx-auto md:px-0">
        {
            user?.avatar_url !== null
              ? <picture className='avatar ring ring-primary rounded-full'>
                    <div className="w-64 rounded-full">
                        <img src={user?.avatar_url} alt={user?.user_name} />
                    </div>
              </picture>
              : <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                    <span className="text-3xl">{user?.user_name.toUpperCase().substring(0, 1)}</span>
                    </div>
                </div>
        }
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
            links?.map((link) => (
                <SocialButton key={link.id} platform={link.platform} href={link.link} />
            ))
        }
      </section>
    </div>
  )
}
