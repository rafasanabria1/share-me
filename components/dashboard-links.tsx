'use client'

import { useState } from 'react'
import { type Tables } from '@types'
import { IconEqual, IconLogout, IconPlus, IconTrash, IconUser } from '@tabler/icons-react'
import SignOutButton from './signout-button'

export default function DashBoardLinks ({ links }: { links: Array<Tables<'links'>> | null }) {
  const [modifiedLinks, setModifiedLinks] = useState<Array<Tables<'links'>> | null>(links)
  console.log({ modifiedLinks })
  return (
      <div className="flex flex-col w-full">
        <header className="w-full flex justify-between">
            <button className='btn btn-primary btn-circle btn-sm'>
                <IconUser />
            </button>
            <SignOutButton className='btn btn-outline btn-warning btn-sm'>
                Logout <IconLogout size={16} />
            </SignOutButton>
        </header>
        <main className='flex-grow flex flex-col gap-5'>
            <div className='my-8'>
                <h1 className='font-bold text-2xl'>Customize your links</h1>
                <p className='text-sm mt-2'>Add/edit/remove links below and then share all your profiles!</p>
            </div>
            <button className='btn btn-primary btn-outline bg-white w-full'>
                <span>Add new link</span>
                <IconPlus size={20} />
            </button>
            <div className=''>
                <div className='flex flex-col gap-2 rounded-lg p-5 border'>
                    <header className='flex justify-between w-full items-center'>
                        <div className='flex gap-2 items-center text-slate-100'>
                            <IconEqual size={18} />
                            <span>Link #1</span>
                        </div>
                        <IconTrash size={18} className='text-error'/>
                    </header>
                    <main className='flex flex-col gap-2'>
                        <div>
                            <label htmlFor="platform" className="block text-sm font-normal text-slate-300 ">Platform</label>
                            <select id="platform" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 !pr-4 focus:ring-blue-500 focus:border-blue-500 block">
                                <option value=""></option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="link" className="block text-sm font-normal text-slate-300 ">Link</label>
                            <input type="text" id="link" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 block" placeholder="https://www.github.com/johndoe" />
                        </div>
                    </main>
                </div>
            </div>
        </main>
        <footer>
            <button className="btn btn-success w-full ">Save</button>
        </footer>
    </div>
  )
}
