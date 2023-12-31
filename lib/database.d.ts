export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      links: {
        Row: {
          created_at: string
          id: string
          link: string
          order: number
          platform: Database['public']['Enums']['platform']
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          link: string
          order: number
          platform: Database['public']['Enums']['platform']
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          link?: string
          order?: number
          platform?: Database['public']['Enums']['platform']
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'links_user_id_fkey'
            columns: ['user_id']
            isOneToOne: false
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string
          full_name: string | null
          id: string
          share_hash: string | null
          updated_at: string
          user_name: string
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          share_hash?: string | null
          updated_at?: string
          user_name: string
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          share_hash?: string | null
          updated_at?: string
          user_name?: string
        }
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      platform:
      | 'google'
      | 'github'
      | 'facebook'
      | 'x'
      | 'instagram'
      | 'linkedin'
      | 'twitch'
      | 'kick'
      | 'youtube'
      | 'telegram'
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
