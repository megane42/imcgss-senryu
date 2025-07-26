import styles from './Logo.module.css'

export const Logo: React.FC = () => {
  return (
    <h1 className={styles.logo}>
      <span className={styles.logoFormar}>デレマス</span>
      <span className={styles.logoLatter}>川柳</span>
    </h1>
  )
}