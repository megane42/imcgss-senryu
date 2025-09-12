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
  startGenerateButtonFadeOut: () => void
  startSenryuCardFadeIn: () => void
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
  startGenerateButtonFadeOut: () => {
    set({ generateButtonFadingOut: true })
  },
  startSenryuCardFadeIn: () => {
    set({ senryuCardFadingIn: true })
  },
}))
