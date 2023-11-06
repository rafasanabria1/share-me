import { type TablesUpdate } from '@types'

export function validateLinks (links: Array<TablesUpdate<'links'>>): boolean {
  return links.every(link => {
    if (link.link === undefined || link.link === '') return false
    if (link.platform === undefined) return false
    if (link.order === undefined || link.order <= 0) return false
    switch (link.platform) {
      case 'google':
        return link.link.match(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/i)
      case 'github':
        return link.link.match(/^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]{1,25}$/igm)
      case 'facebook':
        return link.link.match(/(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w-]*)?/)
      case 'x':
        return link.link.match(/(https:\/\/((www|\w\w)\.)?twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/)
      case 'instagram':
        return link.link.match(/(https:\/\/((www|\w\w)\.)?instagram.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/)
      case 'linkedin':
        return link.link.match(/((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^/]+\/(([\w|\d-&#?=])+\/?){1,}))$/)
      case 'twitch':
        return link.link.match(/(https:\/\/((www|\w\w)\.)?twitch.tv\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/)
      case 'kick':
        return link.link.match(/(https:\/\/((www|\w\w)\.)?kick.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/)
      case 'youtube':
        return link.link.match(/(https?:\/\/)?(www\.)?youtube\.com\/(channel|user)\/[\w-]+/)
      case 'telegram':
        return link.link.match(/(https?:\/\/)?(www[.])?(telegram|t)\.me\/([a-zA-Z0-9_-]*)\/?$/)
      default:
        return false
    }
  })
}
