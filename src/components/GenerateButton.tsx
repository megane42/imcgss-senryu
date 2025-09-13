import { generateSenryu } from '@/lib/core/generateSenryu'
import styles from './GenerateButton.module.css'
import type { Senryu } from '@/lib/types/senryu'

interface GenerateButtonProps {
  onGenerate: (senryus: Senryu[]) => void
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onGenerate }) => {
  const handleClick = () => {
    const senryus = Array.from({ length: 10 }, () => generateSenryu())
    onGenerate(senryus)
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