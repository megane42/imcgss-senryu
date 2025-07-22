import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
    error: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className={styles.container}>
      <p className={styles.errorText}>エラー: {error}</p>
    </div>
  )
}