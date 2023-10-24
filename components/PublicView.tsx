import { type SocialLink } from '../types'
import SocialButton from './SocialButton'

export default function PublicView ({
  username,
  bio,
  avatarUrl,
  socialLinks
}: {
  username: string
  bio: string
  avatarUrl: string
  socialLinks: SocialLink[]
}) {
  return (
    <div className="flex flex-col min-h-screen items-center w-full py-10">
      <section className="flex flex-col items-center max-w-2xl px-2 mx-auto">
        <img className="w-32 h-32 mb-3 border rounded-full shadow-lg" src={avatarUrl} alt={username} />
        <h1 className="text-5xl font-bold font-mono leading-none tracking-tight text-center">{username}</h1>
        <p className='text-lg font-normal text-center mt-6 text-md'>{bio}</p>
      </section>
      <section className='flex flex-col gap-4 w-full max-w-lg mt-20 px-2 mx-auto'>
        {
            socialLinks.map((socialLink) => (
                <SocialButton key={socialLink.id} type={socialLink.type} href={socialLink.link} />
            ))
        }
      </section>
    </div>
  )
}
