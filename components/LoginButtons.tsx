'use client'

import { IconBrandGithub, IconBrandGmail } from '@tabler/icons-react'
export default function LoginButtons () {
  return (
    <div className='flex flex-col gap-10 h-full justify-between'>
        <p className='font-medium text-2xl text-center'>Para poder compartir tus redes sociales, inicia sesión con tu cuenta de GitHub o Google.</p>
        <div className='flex flex-col pb-4 gap-4'>
            <button onClick={() => {}} className='flex items-center gap-2 px-8 py-4 border rounded-lg justify-center text-white bg-github'>
                <IconBrandGithub size={24} />
                <span>Sign in with GitHub</span>
            </button>
            <div className='relative'>
                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-1/3 h-px my-4 border-0 bg-gray-700" />
                    <span className="absolute px-3 font-medium  -translate-x-1/2 bg-white left-1/2">or</span>

                </div>
            </div>
            <button onClick={() => {}} className='flex items-center gap-2 px-8 py-4 border rounded-lg justify-center bg-email text-white'>
                <IconBrandGmail size={24} />
                <span>Sign in with Google</span>
            </button>
        </div>
    </div>
  )
}
