import { ErrorMessage } from '@/components/ErrorMessage'
import { GenerateButton } from '@/components/GenerateButton'
import styles from './SenryuCard.module.css'
import type { Chunk, Senryu } from '@/lib/types/senryu'

interface SenryuCardProps {
  senryu: Senryu | null
  error: string | null
  onPush: () => void
}

export const SenryuCard: React.FC<SenryuCardProps> = ({ senryu, error, onPush }) => {
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
    <>
      <div className={styles.card}>
        {!senryu &&
        <GenerateButton onClick={onPush} />
        }
        {error && <ErrorMessage error={error} />}
        {senryu && (
          <>
            <div className={styles.senryuText}>
              <p className={styles.line}>{formatSenryuPart(senryu.upperPart)}</p>
              <p className={styles.line}>{formatSenryuPart(senryu.middlePart)}</p>
              <p className={styles.line}>{formatSenryuPart(senryu.lowerPart)}</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}
