import { platforms } from '@const'
import { IconEqual, IconTrash } from '@tabler/icons-react'
import { type Enums, type Tables, type TablesUpdate } from '@types'
import { type ChangeEvent } from 'react'

export default function DashboardLinkDetail (
  {
    link,
    index,
    removeLink,
    updateLink
  }: {
    link: TablesUpdate<'links'>
    index: number
    removeLink: (id: Tables<'links'>['id']) => void
    updateLink: (link: TablesUpdate<'links'>) => void
  }) {
  const handleChangePlatform = (e: ChangeEvent<HTMLSelectElement>) => {
    const platform = e.target.value as Enums<'platform'>
    updateLink({
      ...link,
      platform
    })
  }

  const handleChangeLink = (e: ChangeEvent<HTMLInputElement>) => {
    const linkValue = e.target.value
    updateLink({
      ...link,
      link: linkValue
    })
  }

  return (
    <div className='flex flex-col gap-1 rounded-lg p-4 border'>
        <header className='flex justify-between w-full items-center'>
            <div className='flex gap-2 items-center text-slate-100'>
                <IconEqual size={18} />
                <span>Link #{index + 1}</span>
            </div>
            { /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */ }
            <button onClick={() => { removeLink(link.id!) }}>
                <IconTrash size={18} className='text-error'/>
            </button>
        </header>
        <main className='flex flex-col gap-2'>
            <div className='form-control w-full'>
                <label htmlFor="" className='label p-1'>
                    <span className='label-text'>Platform</span>
                </label>
                <select id="platform" className="select select-bordered select-sm w-full" value={link.platform} onChange={handleChangePlatform}>
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
                <input type="text" className="input input-bordered input-sm " placeholder="https://www.github.com/johndoe" value={link.link} onChange={handleChangeLink} />
            </div>
        </main>
    </div>
  )
}
