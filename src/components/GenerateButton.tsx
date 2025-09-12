import { generateSenryu } from '@/lib/core/generateSenryu'
import styles from './GenerateButton.module.css'
import type { Senryu } from '@/lib/types/senryu'

interface GenerateButtonProps {
  onGenerate: (senryu: Senryu) => void
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onGenerate }) => {
  const handleClick = () => {
    const newSenryu = generateSenryu()
    onGenerate(newSenryu)
  }

  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      詠む
    </button>
  )
}