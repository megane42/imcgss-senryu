import styles from './GenerateButton.module.css'

interface GenerateButtonProps {
    onClick: () => void
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      川柳を生成
    </button>
  )
}