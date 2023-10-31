import { platforms } from '@const'
import SignInButton from '@components/singin-button'

export default function Login () {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center p-10 gap-10 items-stretch">
            <section className="flex flex-col gap-6 w-full md:w-1/2 p-6 rounded-3xl border bg-base-100 shadow-xl">
                <h1 className='font-extrabold text-6xl text-center'>Share me!</h1>
                <p className='text-center font-bold'>Manage and share your social links in just seconds</p>
                <div className='grid grid-cols-2 sm:grid-cols-5 place-items-center'>
                    {
                        Object.entries(platforms).map(([key, value]) => {
                          const { icon: Icon, backgroundColorClass, colorClass } = value
                          return (
                                <div key={key} className='p-4 hover:rotate-12 hover:scale-110 transition duration-300'>
                                    <span className={`w-16 h-16 shadow-lg shadow-base-300 rounded-full flex justify-center items-center ${backgroundColorClass} ${colorClass}`} key={key}>
                                        <Icon className='w-10 h-10' />
                                    </span>
                                </div>
                          )
                        })
                    }
                </div>
            </section>
            <section className="flex flex-col gap-6 w-full md:w-1/2 p-6 rounded-3xl border bg-base-100 shadow-xl">
                <div className='flex flex-col gap-10 h-full justify-center'>
                    <p className='font-medium text-2xl text-center'>Sign in to share your links</p>
                    <div className='flex flex-col pb-4 gap-4'>
                        { /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */ }
                        <SignInButton id={platforms.github.loginProviderId!} name={platforms.github.name} />
                        <div className="divider">OR</div>
                        { /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */ }
                        <SignInButton id={platforms.google.loginProviderId!} name={platforms.github.name} />
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}
