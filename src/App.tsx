import { Logo } from '@/components/Logo'
import { SenryuCard } from '@/components/SenryuCard'
import { TweetButton } from '@/components/TweetButton'
import { useSenryu } from '@/hooks/useSenryu'
import styles from './App.module.css'

function App() {
  const { senryu, error, handleGenerateSenryu } = useSenryu()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.main}>
        <div className={styles.senryuCardContainer}>
          <SenryuCard
            senryu={senryu}
            error={error}
            onPush={handleGenerateSenryu}
          />
        </div>
        <div className={styles.tweetButtonContainer}>
          {senryu && <TweetButton senryu={senryu} />}
        </div>
      </main>
    </div>
  )
}

export default App
