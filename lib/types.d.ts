import { type Database } from './database'
import { type TablerIconsProps } from '@tabler/icons-react'

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]

export interface PlatformInfo {
  icon: (props: TablerIconsProps) => JSX.Element
  name: string
  backgroundColorClass: string
  colorClass: string
  loginProviderId?: string
}
