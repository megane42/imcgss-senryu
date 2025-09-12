import { create } from 'zustand'
import type { Senryu } from '@/lib/types/senryu'

interface State {
  senryu: Senryu | null
  error: string | null
}

interface Action {
  setSenryu: (senryu: Senryu) => void
  setError: (error: string) => void
}

type Store = State & Action

export const useStore = create<Store>((set) => ({
  // State
  senryu: null,
  error: null,

  // Actions
  setSenryu: (senryu: Senryu) => {
    set({ senryu, error: null })
  },
  setError: (error: string) => {
    set({ error })
  },
}))
