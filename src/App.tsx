import { Logo } from '@/components/Logo'
import { SenryuCard } from '@/components/SenryuCard'
import { TweetButton } from '@/components/TweetButton'
import { useSenryu } from '@/hooks/useSenryu'
import styles from './App.module.css'
import { ErrorMessage } from './components/ErrorMessage'
import { GenerateButton } from './components/GenerateButton'

function App() {
  const { senryu, error, handleGenerateSenryu } = useSenryu()

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
          {!senryu && <GenerateButton onClick={handleGenerateSenryu} />}
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
