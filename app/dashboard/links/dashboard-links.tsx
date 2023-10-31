'use client'

// import { useState } from 'react'
import { type Tables } from '@types'
import { IconEqual, IconLogout, IconPlus, IconTrash, IconUser } from '@tabler/icons-react'
import SignOutButton from '../../../components/signout-button'
import { paths, platforms } from '@const'
import Link from 'next/link'

export default function DashBoardLinks ({ links }: { links: Array<Tables<'links'>> | null }) {
  // const [modifiedLinks, setModifiedLinks] = useState<Array<Tables<'links'>> | null>(links)
  // console.log({ modifiedLinks })
  return (
      <div className="flex flex-col w-full gap-8">
        <header className="w-full flex justify-between">
            <Link href={paths.DASHBOARD_PROFILE} className='btn btn-primary btn-circle btn-sm'>
                <IconUser />
            </Link>
            <SignOutButton className='btn btn-outline btn-warning btn-sm'>
                Logout <IconLogout size={16} />
            </SignOutButton>
        </header>
        <main className='flex-grow flex flex-col gap-4'>
            <div className=''>
                <h1 className='font-bold text-2xl'>Customize your links</h1>
                <p className='text-sm mt-2'>Add/edit/remove links below and then share all your profiles!</p>
            </div>
            <button className='btn btn-outline btn-sm w-full mt-4'>
                <span>Add new link</span>
                <IconPlus size={20} />
            </button>
            <section className='flex flex-col gap-4'>
                {
                    links?.map(link => {
                      return (
                    <div key={link.id} className='flex flex-col gap-1 rounded-lg p-4 border'>
                        <header className='flex justify-between w-full items-center'>
                            <div className='flex gap-2 items-center text-slate-100'>
                                <IconEqual size={18} />
                                <span>Link #{link.order}</span>
                            </div>
                            <IconTrash size={18} className='text-error'/>
                        </header>
                        <main className='flex flex-col gap-2'>
                            <div className='form-control w-full'>
                                <label htmlFor="" className='label p-1'>
                                    <span className='label-text'>Platform</span>
                                </label>
                                <select id="platform" className="select select-bordered select-sm w-full" value={link.platform}>
                                    <option value="">Select a platform</option>
                                    {
                                        Object.values(platforms).map(platform => {
                                          return (
                                                <option key={`${link.id}-${platform.id}`} value={platform.id}>{platform.name}</option>
                                          )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='form-control w-full'>
                                <label className="label p-1">
                                    <span className="label-text">Link</span>
                                </label>
                                <input type="text" className="input input-bordered input-sm " placeholder="https://www.github.com/johndoe" value={link.link} />
                            </div>
                        </main>
                    </div>
                      )
                    })
                    }
            </section>
        </main>
        <footer>
            <button className="btn btn-success w-full ">Save</button>
        </footer>
    </div>
  )
}
