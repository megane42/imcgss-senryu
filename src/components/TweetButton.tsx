import { encodeIds } from '@/lib/utils/encodeIds'
import { Button } from './Button'
import styles from './TweetButton.module.css'
import type { Senryu } from '@/lib/types/senryu'

interface TweetButtonProps {
    senryu: Senryu
}

export const TweetButton: React.FC<TweetButtonProps> = ({ senryu }) => {
  const formatSenryuPart = (chunks: Senryu['upperPart'] | Senryu['middlePart'] | Senryu['lowerPart']) => {
    return chunks.map(chunk => chunk.word).join('')
  }

  const handleTweet = () => {
    const encoded = encodeIds(senryu.ids)
    const url = `${window.location.origin}?q=${encoded}`
    const text = `${formatSenryuPart(senryu.upperPart)}\n${formatSenryuPart(senryu.middlePart)}\n${formatSenryuPart(senryu.lowerPart)}`
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    window.open(tweetUrl, '_blank')
  }

  return (
    <div className={styles.container}>
      <Button onClick={handleTweet} variant="secondary">
        ツイート
      </Button>
    </div>
  )
}