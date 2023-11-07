import { IconBrandFacebook, IconBrandGithub, IconBrandGoogle, IconBrandInstagram, IconBrandKick, IconBrandLinkedin, IconBrandTelegram, IconBrandTwitch, IconBrandX, IconBrandYoutube } from '@tabler/icons-react'
import { type PlatformInfo, type Enums } from '@types'

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

export const validateLinkMatcher: Record<Enums<'platform'>, RegExp> = {
  google: /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/i,
  github: /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]{1,25}$/igm,
  facebook: /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w-]*)?/,
  x: /(https:\/\/((www|\w\w)\.)?twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/,
  instagram: /(https:\/\/((www|\w\w)\.)?instagram.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/,
  linkedin: /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^/]+\/(([\w|\d-&#?=])+\/?){1,}))$/,
  twitch: /(https:\/\/((www|\w\w)\.)?twitch.tv\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/,
  kick: /(https:\/\/((www|\w\w)\.)?kick.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/,
  youtube: /(https?:\/\/)?(www\.)?youtube\.com\/(channel|user)\/[\w-]+/,
  telegram: /(https?:\/\/)?(www[.])?(telegram|t)\.me\/([a-zA-Z0-9_-]*)\/?$/
}
