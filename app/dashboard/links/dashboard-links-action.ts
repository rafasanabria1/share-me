'use server'

import { cookies } from 'next/headers'
import { type Database } from '@database'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { type TablesUpdate } from '@types'
import { revalidatePath } from 'next/cache'
import { paths } from '@const'

export async function updateLinks (links: Array<TablesUpdate<'links'>> | null, formData: FormData) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  if (user?.id === undefined) throw new Error('User not found')

  if (links === null) throw new Error('Bad request')

  if (!validateLinks(links)) throw new Error('Invalid links')

  try {
    let a, b, c
    if (links.length === 0) {
      a = await supabase.from('links').delete().eq('user_id', user.id)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/restrict-template-expressions
      b = await supabase.from('links').delete().eq('user_id', user.id).not('id', 'in', `(${links.map(link => link.id!)})`)
      c = await supabase.from('links').upsert(links, { onConflict: 'id' })
    }
    revalidatePath(paths.DASHBOARD_LINKS)
    console.log({ links, a, b, c })
  } catch (e) {
    console.log(e)
  }
}

function validateLinks (links: Array<TablesUpdate<'links'>> | null) {
  return false
}
