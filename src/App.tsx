import { useEffect, useCallback } from 'react'
import { Footer } from '@/components/Footer'
import { Logo } from '@/components/Logo'
import { OtherSenryuButton } from '@/components/OtherSenryuButton'
import { SenryuCardCarousel } from '@/components/SenryuCardCarousel'
import { TweetButton } from '@/components/TweetButton'
import { useStore } from '@/store/senryuStore'
import styles from './App.module.css'
import { ErrorMessage } from './components/ErrorMessage'
import { GenerateButton } from './components/GenerateButton'
import { SenryuCard } from './components/SenryuCard'
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
    isLoadedFromUrl,
    setSenryus,
    setError,
    startGenerateButtonFadeOut,
    startGenerateButtonFadeIn,
    startSenryuCardFadeIn,
    startTweetButtonFadeIn,
    setSelectedSenryuIndex,
    setIsLoadedFromUrl,
  } = useStore()

  const loadSenryuFromUrl = useCallback(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const encodedIds = urlParams.get('q')

    if (encodedIds) {
      try {
        const idArray = decodeIds(encodedIds)
        const loadedSenryu = loadSenryu(idArray)
        return loadedSenryu
      } catch (err) {
        if (err instanceof LoadSenryuError) {
          console.error(err.message)
          setError('川柳の読み込みに失敗しました')
        } else {
          throw err
        }
      }
    }
  }, [setError])

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
    (async () => {
      const loadedSenryu = loadSenryuFromUrl()
      if (loadedSenryu) {
        setSenryus([loadedSenryu])
        setIsLoadedFromUrl(true)

        // Start senryu card fade in, and wait for the animation
        startSenryuCardFadeIn()
        await new Promise(resolve => setTimeout(resolve, 250))

        // Start tweet button fade in, and wait for the animation
        startTweetButtonFadeIn()
        await new Promise(resolve => setTimeout(resolve, 500))

      } else {
        setIsLoadedFromUrl(false)
        startGenerateButtonFadeIn()
      }
    })()
  }, [loadSenryuFromUrl, setSenryus, startSenryuCardFadeIn, startTweetButtonFadeIn, startGenerateButtonFadeIn, setIsLoadedFromUrl])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.main}>
        {isLoadedFromUrl ? (
          <>
            <div className={`${styles.senryuCardContainer} ${senryuCardFadingIn ? styles.senryuCardFadeIn : ''}`}>
              {senryus && <SenryuCard senryu={senryus[0]} />}
            </div>
            <div className={`${styles.tweetButtonContainer} ${tweetButtonFadingIn ? styles.tweetButtonFadeIn : ''}`}>
              {senryus && <TweetButton senryu={senryus[selectedSenryuIndex]} />}
            </div>
            {/* Using "tweetButtonFadingIn" to show this button at the same time as tweet button */}
            <div className={`${styles.otherSenryuButtonContainer} ${tweetButtonFadingIn ? styles.tweetButtonFadeIn : ''}`}>
              <OtherSenryuButton />
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
