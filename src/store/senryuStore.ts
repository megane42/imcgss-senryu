import { create } from 'zustand'
import type { Senryu } from '@/lib/types/senryu'

interface State {
  senryu: Senryu | null
  error: string | null
  generateButtonFadingOut: boolean
  senryuCardFadingIn: boolean
}

interface Action {
  setSenryu: (senryu: Senryu) => void
  setError: (error: string) => void
  setGenerateButtonFadingOut: (isFadingOut: boolean) => void
  setSenryuCardFadingIn: (isFadingIn: boolean) => void
}

type Store = State & Action

export const useStore = create<Store>((set) => ({
  // State
  senryu: null,
  error: null,
  generateButtonFadingOut: false,
  senryuCardFadingIn: false,

  // Actions
  setSenryu: (senryu: Senryu) => {
    set({ senryu, error: null })
  },
  setError: (error: string) => {
    set({ error })
  },
  setGenerateButtonFadingOut: (isFadingOut: boolean) => {
    set({ generateButtonFadingOut: isFadingOut })
  },
  setSenryuCardFadingIn: (isFadingIn: boolean) => {
    set({ senryuCardFadingIn: isFadingIn })
  },
}))
