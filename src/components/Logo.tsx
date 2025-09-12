import styles from './Logo.module.css'

export const Logo: React.FC = () => {
  return (
    <h1 className={styles.logo}>
      <a href="/imcgss-senryu/" className={styles.logoLink}>
        <span className={styles.logoFormar}>デレマス</span>
        <span className={styles.logoLatter}>川柳</span>
      </a>
    </h1>
  )
}