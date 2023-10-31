import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandInstagram, IconBrandKick, IconBrandLinkedin, IconBrandTelegram, IconBrandTwitch, IconBrandX, IconBrandYoutube } from '@tabler/icons-react'
import { type PlatformInfo, type Enums, type Tables } from '@types'

export const paths = {
  HOME: '/',
  LOGIN: '/login',
  LOGIN_CALLBACK: '/auth/callback',
  PUBLIC_VIEW: '/public-view',
  DASHBOARD: '/dashboard',
  DASHBOARD_LINKS: '/dashboard/links',
  DASHBOARD_PROFILE: '/dashboard/profile'
}

export const platforms: Record<Enums<'platform'>, PlatformInfo> = {
  google: {
    id: 'google',
    icon: IconBrandGoogle,
    name: 'Google',
    backgroundColorClass: 'bg-google',
    colorClass: 'text-slate-300',
    loginProviderId: 'google'
  },
  github: {
    id: 'github',
    icon: IconBrandGithub,
    name: 'Github',
    backgroundColorClass: 'bg-github',
    colorClass: 'text-slate-300',
    loginProviderId: 'github'
  },
  facebook: {
    id: 'facebook',
    icon: IconBrandFacebook,
    name: 'Facebook',
    backgroundColorClass: 'bg-facebook',
    colorClass: 'text-slate-300'
  },
  x: {
    id: 'x',
    icon: IconBrandX,
    name: 'X',
    backgroundColorClass: 'bg-x',
    colorClass: 'text-slate-300'
  },
  instagram: {
    id: 'instagram',
    icon: IconBrandInstagram,
    name: 'Instagram',
    backgroundColorClass: 'bg-gradient-to-tr to-instagramPink from-instagramYellow',
    colorClass: 'text-slate-300'
  },
  linkedin: {
    id: 'linkedin',
    icon: IconBrandLinkedin,
    name: 'LinkedIn',
    backgroundColorClass: 'bg-linkedin',
    colorClass: 'text-slate-300'
  },
  twitch: {
    id: 'twitch',
    icon: IconBrandTwitch,
    name: 'Twitch',
    backgroundColorClass: 'bg-twitch',
    colorClass: 'text-slate-300'
  },
  kick: {
    id: 'kick',
    icon: IconBrandKick,
    name: 'Kick',
    backgroundColorClass: 'bg-kick',
    colorClass: 'text-black'
  },
  youtube: {
    id: 'youtube',
    icon: IconBrandYoutube,
    name: 'Youtube',
    backgroundColorClass: 'bg-youtube',
    colorClass: 'text-slate-300'
  },
  telegram: {
    id: 'telegram',
    icon: IconBrandTelegram,
    name: 'Telegram',
    backgroundColorClass: 'bg-telegram',
    colorClass: 'text-slate-300'
  }
}

export const exampleUser: Tables<'users'> = {
  id: 'sasdfasdf',
  user_name: 'johndoe',
  full_name: 'John Doe',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros quis nisl aliquam aliquet.',
  avatar_url: 'https://avatars.githubusercontent.com/u/263385',
  created_at: new Date().toString(),
  updated_at: new Date().toString()
}
