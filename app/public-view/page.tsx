import PublicView from '@components/PublicView'
import { exampleUser } from '@const'
export default function Home () {
  return (
    <main className='h-screen flex justify-center items-center'>
        <PublicView user={exampleUser} />
    </main>
  )
}
