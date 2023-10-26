import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandInstagram, IconBrandKick, IconBrandLinkedin, IconBrandTelegram, IconBrandTwitch, IconBrandX, IconBrandYoutube } from '@tabler/icons-react'
import { type User } from '@types'

export const buttonTypes = {
  google: {
    icon: IconBrandGoogle,
    text: 'Google',
    backgroundColorClass: 'bg-google',
    colorClass: 'text-white'
  },
  github: {
    icon: IconBrandGithub,
    text: 'Github',
    backgroundColorClass: 'bg-github',
    colorClass: 'text-white'
  },
  facebook: {
    icon: IconBrandFacebook,
    text: 'Facebook',
    backgroundColorClass: 'bg-facebook',
    colorClass: 'text-white'
  },
  x: {
    icon: IconBrandX,
    text: 'X',
    backgroundColorClass: 'bg-x',
    colorClass: 'text-white'
  },
  instagram: {
    icon: IconBrandInstagram,
    text: 'Instagram',
    backgroundColorClass: 'bg-gradient-to-tr to-instagramPink from-instagramYellow',
    colorClass: 'text-white'
  },
  linkedin: {
    icon: IconBrandLinkedin,
    text: 'LinkedIn',
    backgroundColorClass: 'bg-linkedin',
    colorClass: 'text-white'
  },
  twitch: {
    icon: IconBrandTwitch,
    text: 'Twitch',
    backgroundColorClass: 'bg-twitch',
    colorClass: 'text-white'
  },
  kick: {
    icon: IconBrandKick,
    text: 'Kick',
    backgroundColorClass: 'bg-kick',
    colorClass: 'text-black'
  },
  youtube: {
    icon: IconBrandYoutube,
    text: 'Youtube',
    backgroundColorClass: 'bg-youtube',
    colorClass: 'text-white'
  },
  telegram: {
    icon: IconBrandTelegram,
    text: 'Telegram',
    backgroundColorClass: 'bg-telegram',
    colorClass: 'text-white'
  }
}

export const paths = {
  DASHBOARD: '/dashboard',
  HOME: '/',
  LOGIN: '/login',
  LOGIN_CALLBACK: '/auth/callback',
  PUBLIC_VIEW: '/public-view'
}

export const loginProviders = {
  GITHUB: {
    id: 'github',
    name: 'GitHub'
  },
  GOOGLE: {
    id: 'google',
    name: 'Google'
  }
}

export const exampleUser: User = {
  id: 'sasdfasdf',
  user_name: 'johndoe',
  full_name: 'John Doe',
  avatar_url: 'https://avatars.githubusercontent.com/u/68209766?v=4',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.',
  links: [
    {
      id: 'asdfasdfasdf',
      platform: 'github',
      link: 'https://www.github.com/rafasanabria1',
      order: 1
    },
    {
      id: 'asdfasdfasdf2',
      platform: 'x',
      link: 'https://twitter.com/rafasanabria1',
      order: 2
    },
    {
      id: 'asdfasdfasdf3',
      platform: 'linkedin',
      link: 'https://www.linkedin.com/in/rafasanabria1/',
      order: 3
    }
  ]
}
