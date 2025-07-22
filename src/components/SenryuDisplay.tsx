import styles from './SenryuDisplay.module.css'
import type { Senryu } from '@/lib/types/senryu'

interface SenryuDisplayProps {
    senryu: Senryu
}

export const SenryuDisplay: React.FC<SenryuDisplayProps> = ({ senryu }) => {
  const formatSenryuPart = (chunks: Senryu['upperPart'] | Senryu['middlePart'] | Senryu['lowerPart']) => {
    return chunks.map(chunk => chunk.word).join('')
  }

  return (
    <div className={styles.container}>
      <p className={styles.line}>{formatSenryuPart(senryu.upperPart)}</p>
      <p className={styles.line}>{formatSenryuPart(senryu.middlePart)}</p>
      <p className={styles.line}>{formatSenryuPart(senryu.lowerPart)}</p>
    </div>
  )
}