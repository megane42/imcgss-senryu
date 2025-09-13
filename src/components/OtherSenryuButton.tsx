import styles from './OtherSenryuButton.module.css'

export const OtherSenryuButton: React.FC = () => {
  const handleClick = () => {
    window.location.href = import.meta.env.BASE_URL
  }

  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      他の句を詠む
    </button>
  )
}
