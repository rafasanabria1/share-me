import { IconArrowRight } from '@tabler/icons-react'
import { platforms } from '@const'
import { type Enums } from '@types'

export default function SocialButton ({ href, platform, className }: { href: string, platform: Enums<'platform'>, className?: string }) {
  const buttonType = platforms[platform]
  const { icon: Icon } = buttonType

  return (
    <a href={href} className={`w-full h-full flex justify-between items-center px-6 py-4 rounded-xl ${buttonType.backgroundColorClass} ${buttonType.colorClass} ${className}`} target='_blank'>
      <div className='flex gap-2 items-center'>
        <Icon className="w-6 h-6" />
        <span className='font-bold'>{buttonType.name}</span>
      </div>
      <div>
        <IconArrowRight />
      </div>
    </a>
  )
}
