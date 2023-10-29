import { type User } from '@types'
import { create } from 'zustand'

interface UserStore {
  user: User | null
  setUser: (user: User | null) => void
  addLink: () => void
  removeLink: (id: string) => void
}

export const useCartStore = create<UserStore>((set, get) => ({
  user: null,
  setUser: (user) => { set({ user }) },
  addLink: () => {
    const totalLinks = get()?.user?.links.length ?? 0
    const newLink = {
      id: crypto.randomUUID(),
      type: 'github',
      link: '',
      order: totalLinks + 1
    }

    set((state) => ({ user: { ...state.user, links: state.user.links.push(newLink) } }))
  },
  removeLink: (id) => { set((state) => ({ links: state.links.filter((link) => link.id !== id) })) }
}))
