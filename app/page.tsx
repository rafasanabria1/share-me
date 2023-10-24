import type { SocialLink } from '@types'
import PublicView from '@components/PublicView'
export default function Home () {
  const viewInfo = {
    username: '@rafasanabria1',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eum rem enim exercitationem expedita mollitia aliquid omnis saepe recusandae autem necessitatibus ut, obcaecati ab provident, quis itaque. Repudiandae, dolore qui!',
    avatarUrl: 'https://avatars.githubusercontent.com/u/12518528?v=4',
    socialLinks: [
      {
        id: '1',
        type: 'GMAIL',
        link: 'https://www.github.com/rafasanabria1'
      },
      {
        id: '2',
        type: 'GITHUB',
        link: 'https://www.github.com/rafasanabria1'
      },
      {
        id: '3',
        type: 'FACEBOOK',
        link: 'https://www.github.com/rafasanabria1'
      },
      {
        id: '4',
        type: 'X',
        link: 'https://www.github.com/rafasanabria1'
      },
      {
        id: '5',
        type: 'INSTAGRAM',
        link: 'https://www.github.com/rafasanabria1'
      },
      {
        id: '6',
        type: 'LINKEDIN',
        link: 'https://www.github.com/rafasanabria1'
      },
      {
        id: '7',
        type: 'TWITCH',
        link: 'https://www.github.com/rafasanabria1'
      },
      {
        id: '8',
        type: 'KICK',
        link: 'https://www.github.com/rafasanabria1'
      },
      {
        id: '9',
        type: 'YOUTUBE',
        link: 'https://www.github.com/rafasanabria1'
      },
      {
        id: '10',
        type: 'TELEGRAM',
        link: 'https://www.github.com/rafasanabria1'
      }

    ] as SocialLink[]
  }
  return (
    <PublicView {...viewInfo} />
  )
}
