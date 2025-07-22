import React from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    children: React.ReactNode
    onClick: () => void
    variant?: 'primary' | 'secondary'
    className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = ''
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`.trim()

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  )
}