import { Button } from './Button'
import styles from './GenerateButton.module.css'

interface GenerateButtonProps {
    onGenerate: () => void
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onGenerate }) => {
  return (
    <div className={styles.container}>
      <Button onClick={onGenerate} variant="primary">
        川柳を生成
      </Button>
    </div>
  )
}