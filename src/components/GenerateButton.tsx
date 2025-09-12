import { useState } from 'react'
import styles from './GenerateButton.module.css'

interface GenerateButtonProps {
    onClick: () => void
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => {
  const [isFading, setIsFading] = useState(false)

  const handleClick = () => {
    setIsFading(true)
    setTimeout(() => {
      onClick()
      setIsFading(false)
    }, 500)
  }

  return (
    <button 
      className={`${styles.button} ${isFading && styles.fadeOut}`} 
      onClick={handleClick}
    >
      詠む
    </button>
  )
}