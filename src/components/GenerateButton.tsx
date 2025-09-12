import { generateSenryu } from '@/lib/core/generateSenryu'
import { useStore } from '@/store/senryuStore'
import styles from './GenerateButton.module.css'

export const GenerateButton: React.FC = () => {
  const { setSenryu, setError } = useStore()

  const handleClick = () => {
    try {
      const newSenryu = generateSenryu()
      setSenryu(newSenryu)
    } catch (err) {
      setError('川柳の生成に失敗しました')
    }
  }

  return (
    <button
      className={`${styles.button}`}
      onClick={handleClick}
    >
      詠む
    </button>
  )
}