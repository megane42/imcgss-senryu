import { create } from 'zustand'
import type { Senryu } from '@/lib/types/senryu'

interface State {
  senryus: Senryu[] | null
  error: string | null
  generateButtonFadingOut: boolean
  generateButtonFadingIn: boolean
  senryuCardFadingIn: boolean
  tweetButtonFadingIn: boolean
  selectedSenryuIndex: number
}

interface Action {
  setSenryus: (senryus: Senryu[]) => void
  setError: (error: string) => void
  startGenerateButtonFadeOut: () => void
  startGenerateButtonFadeIn: () => void
  startSenryuCardFadeIn: () => void
  startTweetButtonFadeIn: () => void
  setSelectedSenryuIndex: (index: number) => void
}

type Store = State & Action

export const useStore = create<Store>((set) => ({
  // State
  senryus: null,
  error: null,
  generateButtonFadingOut: false,
  generateButtonFadingIn: false,
  senryuCardFadingIn: false,
  tweetButtonFadingIn: false,
  selectedSenryuIndex: 0,

  // Actions
  setSenryus: (senryus: Senryu[]) => {
    set({ senryus, error: null })
  },
  setError: (error: string) => {
    set({ error })
  },
  startGenerateButtonFadeOut: () => {
    set({ generateButtonFadingOut: true })
  },
  startGenerateButtonFadeIn: () => {
    set({ generateButtonFadingIn: true })
  },
  startSenryuCardFadeIn: () => {
    set({ senryuCardFadingIn: true })
  },
  startTweetButtonFadeIn: () => {
    set({ tweetButtonFadingIn: true })
  },
  setSelectedSenryuIndex: (index: number) => {
    set({ selectedSenryuIndex: index })
  },
}))
