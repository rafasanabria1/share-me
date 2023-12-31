import { type Database } from './database'
import { type TablerIconsProps } from '@tabler/icons-react'

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]

export interface PlatformInfo {
  id: Enums<'platform'>
  icon: (props: TablerIconsProps) => JSX.Element
  name: string
  backgroundColorClass: string
  colorClass: string
  loginProviderId?: string
}
