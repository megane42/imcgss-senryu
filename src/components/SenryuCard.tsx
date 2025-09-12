import styles from './SenryuCard.module.css'
import type { Chunk, Senryu } from '@/lib/types/senryu'

interface SenryuCardProps {
  senryu: Senryu
}

export const SenryuCard: React.FC<SenryuCardProps> = ({ senryu }) => {
  const formatSenryuPart = (chunks: Chunk[]) => {
    return chunks.map((chunk: Chunk) => {
      if (chunk.mora === 0) {
        return (<span className={styles.delimiter}></span>)
      } else {
        return (<span className={styles.word}>{chunk.word}</span>)
      }
    })
  }

  return (
    <div className={styles.card}>
      <div className={styles.senryuText}>
        <p className={styles.line}>{formatSenryuPart(senryu.upperPart)}</p>
        <p className={styles.line}>{formatSenryuPart(senryu.middlePart)}</p>
        <p className={styles.line}>{formatSenryuPart(senryu.lowerPart)}</p>
      </div>
    </div>
  )
}
