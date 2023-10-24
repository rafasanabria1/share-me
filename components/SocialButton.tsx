import { IconArrowRight } from '@tabler/icons-react'
import { buttonTypes } from '../const'
import { type SocialLinkType } from '@types'

export default function SocialButton ({ href, type, className }: { href: string, type: SocialLinkType, className?: string }) {
  const buttonType = buttonTypes[type]
  const { icon: Icon } = buttonType
  return (
    <a href={href} className={`w-full h-full flex justify-between items-center px-6 py-4 border rounded-xl ${buttonType.backgroundColorClass} ${buttonType.colorClass} ${className}`} target='_blank'>
      <div className='flex gap-2 items-center'>
        <Icon className="w-6 h-6" />
        {buttonType.text}
      </div>
      <div>
        <IconArrowRight />
      </div>
    </a>
  )
}
