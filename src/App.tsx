import { Logo } from '@/components/Logo'
import { SenryuCard } from '@/components/SenryuCard'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Logo />
      </header>
      <main className={styles.main}>
        <SenryuCard />
      </main>
    </div>
  )
}

export default App
