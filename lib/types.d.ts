import { type TablerIconsProps } from '@tabler/icons-react'

export const Platform = {
  google = 'GOOGLE',
  github = 'GITHUB',
  facebook = 'FACEBOOK',
  x = 'X',
  instagram = 'INSTAGRAM',
  linkedin = 'LINKEDIN',
  twitch = 'TWITCH',
  kick = 'KICK',
  youtube = 'YOUTUBE',
  telegram = 'TELEGRAM'
}

export interface Link {
  id: string
  platform: keyof typeof Platform
  link: string
  order: number
}

export interface User {
  id: string
  user_name: string
  full_name?: string
  avatar_url?: string
  bio?: string
  links: Link[]
  created_at?: string
  updated_at?: string
}

export interface PlatformInfo {
  icon: (props: TablerIconsProps) => JSX.Element
  text: string
  backgroundColorClass: string
  colorClass: string
}
