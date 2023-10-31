'use client'
import { paths } from '@const'
import { IconLink, IconLogout } from '@tabler/icons-react'
import { type Tables } from '@types'
import Link from 'next/link'
import SignOutButton from '../../../components/signout-button'

export default function DashBoardProfile ({ user }: { user: Tables<'users'> | null }) {
  return (
        <div className="flex flex-col w-full gap-8">
          <header className="w-full flex justify-between">
              <Link href={paths.DASHBOARD_LINKS} className='btn btn-primary btn-circle btn-sm'>
                  <IconLink />
              </Link>
              <SignOutButton className='btn btn-outline btn-warning btn-sm'>
                  Logout <IconLogout size={16} />
              </SignOutButton>
          </header>
          <main className='flex-grow flex flex-col gap-4'>
            {
                JSON.stringify(user, null, 2)
            }
          </main>
          <footer>
              <button className="btn btn-success w-full ">Save</button>
          </footer>
      </div>
  )
}
