import { useEffect, useCallback } from 'react'
import { Logo } from '@/components/Logo'
import { SenryuCard } from '@/components/SenryuCard'
import { TweetButton } from '@/components/TweetButton'
import { useStore } from '@/store/senryuStore'
import styles from './App.module.css'
import { ErrorMessage } from './components/ErrorMessage'
import { GenerateButton } from './components/GenerateButton'
import { loadSenryu, LoadSenryuError } from './lib/core/loadSenryu'
import { decodeIds } from './lib/utils/decodeIds'
import type { Senryu } from '@/lib/types/senryu'

function App() {
  const { senryu, error, generateButtonFadingOut, senryuCardFadingIn, setSenryu, setError, startGenerateButtonFadeOut, startSenryuCardFadeIn } = useStore()

  const loadSenryuFromUrl = useCallback(async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const encodedIds = urlParams.get('q')

    if (encodedIds) {
      try {
        const idArray = decodeIds(encodedIds)
        const loadedSenryu = loadSenryu(idArray)
        setSenryu(loadedSenryu)

        // Start senryu card fade in, then wait for the animation to complete
        startSenryuCardFadeIn()
        await new Promise(resolve => setTimeout(resolve, 250))

      } catch (err) {
        if (err instanceof LoadSenryuError) {
          console.error(err.message)
          setError('川柳の読み込みに失敗しました')
        } else {
          throw err
        }
      }
    }
  }, [setSenryu, setError, startSenryuCardFadeIn])

  const onGenerate = async (senryu: Senryu) => {
    // Start generate button fade out, then wait for the animation to complete
    startGenerateButtonFadeOut()
    await new Promise(resolve => setTimeout(resolve, 250))

    setSenryu(senryu)

    // Start senryu card fade in, then wait for the animation to complete
    startSenryuCardFadeIn()
    await new Promise(resolve => setTimeout(resolve, 250))
  }

  useEffect(() => {
    loadSenryuFromUrl()
  }, [loadSenryuFromUrl])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.main}>
        <div className={`${styles.senryuCardContainer} ${senryuCardFadingIn ? styles.senryuCardFadeIn : ''}`}>
          {senryu && <SenryuCard senryu={senryu} />}
        </div>
        <div className={`${styles.generateButtonContainer} ${generateButtonFadingOut ? styles.generateButtonFadeOut : ''}`}>
          {!senryu && <GenerateButton onGenerate={onGenerate} />}
        </div>
        <div className={styles.errorMessageContainer}>
          {error && <ErrorMessage error={error} />}
        </div>
        <div className={styles.tweetButtonContainer}>
          {senryu && <TweetButton senryu={senryu} />}
        </div>
      </main>
    </div>
  )
}

export default App
