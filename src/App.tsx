import { useEffect } from 'react'
import { Logo } from '@/components/Logo'
import { SenryuCard } from '@/components/SenryuCard'
import { TweetButton } from '@/components/TweetButton'
import { useStore } from '@/store/senryuStore'
import styles from './App.module.css'
import { ErrorMessage } from './components/ErrorMessage'
import { GenerateButton } from './components/GenerateButton'
import { loadSenryu } from './lib/core/loadSenryu'
import { decodeIds } from './lib/utils/decodeIds'

function App() {
  const { senryu, error, setSenryu, setError } = useStore()

  const loadSenryuFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const encodedIds = urlParams.get('q')

    if (encodedIds) {
      try {
        const idArray = decodeIds(encodedIds)
        const loadedSenryu = loadSenryu(idArray)
        setSenryu(loadedSenryu)
      } catch (err) {
        setError('川柳の読み込みに失敗しました')
      }
    }
  }

  useEffect(loadSenryuFromUrl, [])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.main}>
        <div className={styles.senryuCardContainer}>
          {senryu && <SenryuCard senryu={senryu} />}
        </div>
        <div className={styles.generateButtonContainer}>
          {!senryu && <GenerateButton />}
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
