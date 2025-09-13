import githubIcon from '@/assets/github-mark.svg'
import xIcon from '@/assets/x-mark.svg'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/megane42/imcgss-senryu"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <img
          src={githubIcon}
          alt="GitHub"
          className={styles.icon}
        />
      </a>
      <a
        href="https://x.com/megane42"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <img
          src={xIcon}
          alt="X (Twitter)"
          className={`${styles.icon} ${styles.xIcon}`}
        />
      </a>
    </footer>
  )
}
