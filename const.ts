import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandInstagram, IconBrandKick, IconBrandLinkedin, IconBrandTelegram, IconBrandTwitch, IconBrandX, IconBrandYoutube } from '@tabler/icons-react'

export const buttonTypes = {
  GOOGLE: {
    icon: IconBrandGoogle,
    text: 'Google',
    backgroundColorClass: 'bg-google',
    colorClass: 'text-white'
  },
  GITHUB: {
    icon: IconBrandGithub,
    text: 'Github',
    backgroundColorClass: 'bg-github',
    colorClass: 'text-white'
  },
  FACEBOOK: {
    icon: IconBrandFacebook,
    text: 'Facebook',
    backgroundColorClass: 'bg-facebook',
    colorClass: 'text-white'
  },
  X: {
    icon: IconBrandX,
    text: 'X',
    backgroundColorClass: 'bg-x',
    colorClass: 'text-white'
  },
  INSTAGRAM: {
    icon: IconBrandInstagram,
    text: 'Instagram',
    backgroundColorClass: 'bg-gradient-to-tr to-instagramPink from-instagramYellow',
    colorClass: 'text-white'
  },
  LINKEDIN: {
    icon: IconBrandLinkedin,
    text: 'LinkedIn',
    backgroundColorClass: 'bg-linkedin',
    colorClass: 'text-white'
  },
  TWITCH: {
    icon: IconBrandTwitch,
    text: 'Twitch',
    backgroundColorClass: 'bg-twitch',
    colorClass: 'text-white'
  },
  KICK: {
    icon: IconBrandKick,
    text: 'Kick',
    backgroundColorClass: 'bg-kick',
    colorClass: 'text-black'
  },
  YOUTUBE: {
    icon: IconBrandYoutube,
    text: 'Youtube',
    backgroundColorClass: 'bg-youtube',
    colorClass: 'text-white'
  },
  TELEGRAM: {
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
