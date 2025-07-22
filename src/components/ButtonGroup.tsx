import React from 'react'
import styles from './ButtonGroup.module.css'

interface ButtonGroupProps {
    children: React.ReactNode
    className?: string
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className = '' }) => {
  const groupClass = `${styles.buttonGroup} ${className}`.trim()

  return (
    <div className={groupClass}>
      {children}
    </div>
  )
}