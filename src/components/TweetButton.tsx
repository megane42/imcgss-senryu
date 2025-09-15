import { encodeIds } from '@/lib/utils/encodeIds'
import { shuffle } from '@/lib/utils/shuffle'
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
    const boundary = shuffle([
      '.˚⊹⁺✮••━━━━━••✮⁺⊹˚.',
    ])[0]
    const url = `${window.location.origin}${import.meta.env.BASE_URL}?q=${encoded}`
    const text = `　${formatSenryuPart(senryu.upperPart)}\n　　　${formatSenryuPart(senryu.middlePart)}\n　　　　　${formatSenryuPart(senryu.lowerPart)}`
    const hashtags = '#デレマス川柳'
    const allText = boundary + "\n" + text + "\n" + boundary + "\n\n" + hashtags + "\n" + url
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(allText)}`
    window.open(tweetUrl, '_blank')
  }

  return (
    <button className={styles.button} onClick={handleTweet}>
      ツイート
    </button>
  )
}