import { validateLinkMatcher } from '@const'
import { type TablesUpdate } from '@types'

export function validateLinks (links: Array<TablesUpdate<'links'>>): boolean {
  return links.every(link => {
    if (link.link === undefined || link.link === '') return false
    if (link.platform === undefined) return false
    if (link.order === undefined || link.order <= 0) return false

    return link.link.match(validateLinkMatcher[link.platform]) !== null
  })
}
