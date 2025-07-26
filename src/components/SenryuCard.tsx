import { ErrorMessage } from '@/components/ErrorMessage'
import { GenerateButton } from '@/components/GenerateButton'
import type { Senryu } from '@/lib/types/senryu'
import styles from './SenryuCard.module.css'

interface SenryuCardProps {
  senryu: Senryu | null
  error: string | null
  onPush: () => void
}

export const SenryuCard: React.FC<SenryuCardProps> = ({ senryu, error, onPush }) => {
  const formatSenryuPart = (chunks: any) => {
    return chunks.map((chunk: any) => chunk.word).join('')
  }

  return (
    <>
        <div className={styles.card}>
            {!senryu && 
            <GenerateButton onGenerate={onPush} />
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
