import { platforms } from '@const'
import SignInButton from '@components/singin-button'

export default function Login () {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center p-5 gap-5 md:p-10 md:gap-10 items-stretch">
            <section className="flex flex-col gap-6 w-full md:w-1/2 p-6 rounded-3xl border bg-base-100 shadow-xl">
                <h1 className='font-extrabold text-4xl md:text-6xl text-center'>Share me!</h1>
                <p className='text-center font-bold text-sm md:font-md'>Manage and share your social links in just seconds</p>
                <div className='grid grid-cols-5 place-items-center'>
                    {
                        Object.entries(platforms).map(([key, value]) => {
                          const { icon: Icon, backgroundColorClass, colorClass } = value
                          return (
                                <div key={key} className='p-2 md:p-4 hover:rotate-12 hover:scale-110 transition duration-300'>
                                    <span className={`w-8 h-8 md:w-16 md:h-16 shadow-lg shadow-base-300 rounded-full flex justify-center items-center ${backgroundColorClass} ${colorClass}`} key={key}>
                                        <Icon className='w-5 h-5 md:w-10 md:h-10' />
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
                    <div className='flex flex-col gap-1 md:gap-4'>
                        <SignInButton id={platforms.github.loginProviderId} name={platforms.github.name} />
                        <div className="divider">OR</div>
                        <SignInButton id={platforms.google.loginProviderId} name={platforms.github.name} />
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}
