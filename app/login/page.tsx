import LoginButtons from '@components/LoginButtons'
import { buttonTypes } from '../../const'

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
                          console.log({ key, value })
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
                <LoginButtons />
            </section>
        </div>
    </main>
  )
}
