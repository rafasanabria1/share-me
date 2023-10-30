'use client'

import { IconEqual, IconLogout, IconPlus, IconTrash } from '@tabler/icons-react'
import SignOutButton from './signout-button'

export default function DashBoardLinks () {
  return (
      <div className="flex flex-col w-full">
        <header className="w-full flex justify-end">
            <SignOutButton className='!p-2 bg-blue-300'>
                Logout <IconLogout size={24} />
            </SignOutButton>
        </header>
        <main className='flex-grow flex flex-col gap-5'>
            <div>
                <h1 className='font-bold text-2xl text-zinc-600'>Customize your links</h1>
                <p className='text-sm mt-2'>Add/edit/remove links below and then share all your profiles!</p>
            </div>
            <button className='text-purple-800 border border-purple-800 rounded-lg w-full flex items-center justify-center py-3'>
                <span>Add new link</span>
                <IconPlus size={20} />
            </button>
            <div className=''>
                <div className='flex flex-col gap-2 rounded-lg p-5 bg-zinc-200  text-zinc-500'>
                    <header className='flex justify-between w-full items-center'>
                        <div className='flex gap-2 items-center'>
                            <IconEqual size={18} />
                            <span>Link #1</span>
                        </div>
                        <IconTrash size={18} className='text-red-400'/>
                    </header>
                    <main className='flex flex-col gap-2'>
                        <div>
                            <label htmlFor="platform" className="block text-sm font-normal text-gray-700 ">Platform</label>
                            <select id="platform" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 !pr-4 focus:ring-blue-500 focus:border-blue-500 block">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="link" className="block text-sm font-normal text-gray-700 ">Link</label>
                            <input type="text" id="link" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 block" placeholder="https://www.github.com/johndoe" />
                        </div>
                    </main>
                </div>
            </div>
        </main>
        <footer className='flex justify-end'>
            <button className="bg-purple-500 text-white px-8 py-2 rounded-lg text-lg ">Save</button>
        </footer>
    </div>
  )
}
