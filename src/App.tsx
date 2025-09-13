import { useEffect, useCallback } from 'react'
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import { SenryuCardCarousel } from '@/components/SenryuCardCarousel'
import { TweetButton } from '@/components/TweetButton'
import { useStore } from '@/store/senryuStore'
import styles from './App.module.css'
import { ErrorMessage } from './components/ErrorMessage'
import { GenerateButton } from './components/GenerateButton'
import { loadSenryu, LoadSenryuError } from './lib/core/loadSenryu'
import { decodeIds } from './lib/utils/decodeIds'
import type { Senryu } from '@/lib/types/senryu'

function App() {
  const {
    senryus,
    error,
    generateButtonFadingOut,
    generateButtonFadingIn,
    senryuCardFadingIn,
    tweetButtonFadingIn,
    selectedSenryuIndex,
    setSenryus,
    setError,
    startGenerateButtonFadeOut,
    startGenerateButtonFadeIn,
    startSenryuCardFadeIn,
    startTweetButtonFadeIn,
    setSelectedSenryuIndex,
  } = useStore()

  const loadSenryuFromUrl = useCallback(async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const encodedIds = urlParams.get('q')

    if (encodedIds) {
      try {
        const idArray = decodeIds(encodedIds)
        const loadedSenryu = loadSenryu(idArray)
        setSenryus([loadedSenryu])

        // Start senryu card fade in, and wait for the animation
        startSenryuCardFadeIn()
        await new Promise(resolve => setTimeout(resolve, 250))

        // Start tweet button fade in, and wait for the animation
        startTweetButtonFadeIn()
        await new Promise(resolve => setTimeout(resolve, 500))

      } catch (err) {
        if (err instanceof LoadSenryuError) {
          console.error(err.message)
          setError('川柳の読み込みに失敗しました')
        } else {
          throw err
        }
      }
    }
  }, [setSenryus, setError, startSenryuCardFadeIn, startTweetButtonFadeIn])

  const onGenerate = async (senryus: Senryu[]) => {
    // Start generate button fade out, and wait for the animation
    startGenerateButtonFadeOut()
    await new Promise(resolve => setTimeout(resolve, 500))

    setSenryus(senryus)

    // Start senryu card fade in, and wait for the animation
    startSenryuCardFadeIn()
    await new Promise(resolve => setTimeout(resolve, 250))

    // Start tweet button fade in, and wait for the animation
    startTweetButtonFadeIn()
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  useEffect(() => {
    loadSenryuFromUrl()
    // Start generate button fade in on initial load if no senryu is loaded
    if (!senryus) {
      startGenerateButtonFadeIn()
    }
  }, [loadSenryuFromUrl, senryus, startGenerateButtonFadeIn])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.main}>
        <div className={`${styles.senryuCardContainer} ${senryuCardFadingIn ? styles.senryuCardFadeIn : ''}`}>
          {senryus && <SenryuCardCarousel senryus={senryus} onSelect={setSelectedSenryuIndex} />}
        </div>
        <div className={`${styles.generateButtonContainer} ${generateButtonFadingIn ? styles.generateButtonFadeIn : ''} ${generateButtonFadingOut ? styles.generateButtonFadeOut : ''}`}>
          {!senryus && <GenerateButton onGenerate={onGenerate} />}
        </div>
        <div className={styles.errorMessageContainer}>
          {error && <ErrorMessage error={error} />}
        </div>
        <div className={`${styles.tweetButtonContainer} ${tweetButtonFadingIn ? styles.tweetButtonFadeIn : ''}`}>
          {senryus && <TweetButton senryu={senryus[selectedSenryuIndex]} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
