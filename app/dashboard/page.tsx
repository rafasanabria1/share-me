'use client'

import { useState } from 'react'
import PublicView from '@components/PublicView'
import FormDashboard from '@components/FormDashboard'
import { type User } from '@types'
import { exampleUser } from '@const'

export default function Dashboard () {
  const [user, setUser] = useState<User>(exampleUser)
  return (
    <main className="h-screen bg-zinc-400 grid grid-cols1 md:grid-cols-2 items-stretch gap-8 p-8">
        <section className="hidden md:flex p-2 rounded-3xl border-zinc-500 shadow-lg bg-zinc-100">
            <PublicView user={user} />
        </section>
        <section className="flex p-2 rounded-3xl border-zinc-500 shadow-lg bg-zinc-100">
            <FormDashboard />
        </section>
    </main>
  )
}
