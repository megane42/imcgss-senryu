import { create } from 'zustand'
import type { Senryu } from '@/lib/types/senryu'

interface State {
  senryu: Senryu | null
  error: string | null
  generateButtonFadingOut: boolean
  senryuCardFadingIn: boolean
  tweetButtonFadingIn: boolean
}

interface Action {
  setSenryu: (senryu: Senryu) => void
  setError: (error: string) => void
  startGenerateButtonFadeOut: () => void
  startSenryuCardFadeIn: () => void
  startTweetButtonFadeIn: () => void
}

type Store = State & Action

export const useStore = create<Store>((set) => ({
  // State
  senryu: null,
  error: null,
  generateButtonFadingOut: false,
  senryuCardFadingIn: false,
  tweetButtonFadingIn: false,

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
  startTweetButtonFadeIn: () => {
    set({ tweetButtonFadingIn: true })
  },
}))
