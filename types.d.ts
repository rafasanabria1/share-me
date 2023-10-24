export interface ButtonType {
  icon: any
  text: string
  backgroundColorClass: string
  colorClass: string
}

enum SocialLinkType {
  gmail = 'GMAIL',
  github = 'GITHUB',
  facebook = 'FACEBOOK',
  x = 'X',
  instagram = 'INSTAGRAM',
  linkedin = 'LINKEDIN',
  twitch = 'TWITCH',
  kick = 'KICK',
  youtube = 'YOUTUBE',
  telegram = 'TELEGRAM',
}
export interface SocialLink {
  id: string
  type: SocialLinkType
  link: string
}
