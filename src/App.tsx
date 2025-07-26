import { ButtonGroup } from '@/components/ButtonGroup'
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
        <ButtonGroup>
          <GenerateButton onGenerate={handleGenerateSenryu} />
          {senryu && <TweetButton senryu={senryu} />}
        </ButtonGroup>

        {error && <ErrorMessage error={error} />}

        {senryu && <SenryuDisplay senryu={senryu} />}
      </main>
    </div>
  )
}

export default App
