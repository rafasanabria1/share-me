import SocialButton from './SocialButton'

export default function PublicView () {
  return (
    <div className="flex flex-col min-h-screen items-center w-full py-10">
      <section className="flex flex-col items-center max-w-2xl mx-auto px-2">
        <img className="w-32 h-32 mb-3 border rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/12518528?v=4" alt="Bonnie image" />
        <h1 className="text-5xl font-bold font-mono leading-none tracking-tight text-center">@rafasanabria1</h1>
        <p className='text-lg font-normal text-center mt-6 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eum rem enim exercitationem expedita mollitia aliquid omnis saepe recusandae autem necessitatibus ut, obcaecati ab provident, quis itaque. Repudiandae, dolore qui!</p>
      </section>
      <section className='flex flex-col gap-4 w-full mx-auto max-w-lg mt-20 px-2 mx-auto'>
        <SocialButton type='GMAIL' href='https://www.github.com/rafasanabria1' />
        <SocialButton type='GITHUB' href='https://www.github.com/rafasanabria1' />
        <SocialButton type='FACEBOOK' href='https://www.github.com/rafasanabria1' />
        <SocialButton type='X' href='https://www.github.com/rafasanabria1' />
        <SocialButton type='INSTAGRAM' href='https://www.github.com/rafasanabria1' />
        <SocialButton type='LINKEDIN' href='https://www.github.com/rafasanabria1' />
        <SocialButton type='TWITCH' href='https://www.github.com/rafasanabria1' />
        <SocialButton type='KICK' href='https://www.github.com/rafasanabria1' />
        <SocialButton type='YOUTUBE' href='https://www.github.com/rafasanabria1' />
        <SocialButton type='TELEGRAM' href='https://www.github.com/rafasanabria1' />
      </section>
    </div>
  )
}
