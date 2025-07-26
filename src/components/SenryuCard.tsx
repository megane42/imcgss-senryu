import { ErrorMessage } from '@/components/ErrorMessage'
import { GenerateButton } from '@/components/GenerateButton'
import { TweetButton } from '@/components/TweetButton'
import { useSenryu } from '@/hooks/useSenryu'
import styles from './SenryuCard.module.css'

export const SenryuCard = () => {
  const { senryu, error, handleGenerateSenryu } = useSenryu()

  const formatSenryuPart = (chunks: any) => {
    return chunks.map((chunk: any) => chunk.word).join('')
  }

  return (
    <>
      <div className={styles.card}>
        {!senryu && 
          <GenerateButton onGenerate={handleGenerateSenryu} />
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
      {senryu &&
        <TweetButton senryu={senryu} />
      }
    </>
  )
}
