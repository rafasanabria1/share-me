import { buttonTypes, loginProviders } from '@const'
import SignInButton from '@components/singin-button'

export default function Login () {
  return (
    <main className="min-h-screen w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center p-10 gap-10 items-stretch">
            <section className="flex flex-col gap-6 w-full md:w-1/2 p-6 border border-zinc-400 rounded-3xl shadow-lg">
                <h1 className='font-extrabold text-6xl text-center'>Share me!</h1>
                <p className='text-center'>Manage and share your social links in just seconds!</p>
                <div className='grid grid-cols-2 md:grid-cols-5 place-items-center'>
                    {
                        Object.entries(buttonTypes).map(([key, value]) => {
                          const { icon: Icon, backgroundColorClass, colorClass } = value
                          return (
                                <div key={key} className='p-4 hover:rotate-45 hover:scale-125 transition duration-300'>
                                    <span className={`w-16 h-16 shadow-lg shadow-slate-300 rounded-full flex justify-center items-center ${backgroundColorClass} ${colorClass}`} key={key}>
                                        <Icon />
                                    </span>
                                </div>
                          )
                        })
                    }
                </div>
            </section>
            <section className="w-full md:w-1/2 p-6 border border-zinc-400 rounded-3xl shadow-lg">
                <div className='flex flex-col gap-10 h-full justify-between'>
                    <p className='font-medium text-2xl text-center'>Para poder compartir tus redes sociales, inicia sesión con tu cuenta de GitHub o Google.</p>
                    <div className='flex flex-col pb-4 gap-4'>
                        <SignInButton {... loginProviders.GITHUB} />
                        <div className='relative'>
                            <div className="inline-flex items-center justify-center w-full">
                                <hr className="w-1/3 h-px my-4 border-0 bg-gray-700" />
                                <span className="absolute px-3 font-medium  -translate-x-1/2 bg-white left-1/2">or</span>
                            </div>
                        </div>
                        <SignInButton {... loginProviders.GOOGLE} />
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}
