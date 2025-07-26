import { ErrorMessage } from '@/components/ErrorMessage'
import { GenerateButton } from '@/components/GenerateButton'
import { Logo } from '@/components/Logo'
import { SenryuDisplay } from '@/components/SenryuDisplay'
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
        {!senryu && 
          <GenerateButton onGenerate={handleGenerateSenryu} />
        }
        {error && <ErrorMessage error={error} />}
        {senryu && (
          <>
            <SenryuDisplay senryu={senryu} />
            <TweetButton senryu={senryu} />
          </>
        )}
      </main>
    </div>
  )
}

export default App
