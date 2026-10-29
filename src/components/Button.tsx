import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { IconPlaceholder } from './IconPlaceholder'

export type ButtonColor = 'blue' | 'pink' | 'orange' | 'green'
export type ButtonVariant = 'default' | 'icon'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  color?: ButtonColor
  icon?: ReactNode
  showIcon?: boolean
  variant?: ButtonVariant
}

export function Button({
  children = 'Button',
  className = '',
  color = 'blue',
  icon,
  showIcon = false,
  type = 'button',
  variant = 'default',
  ...props
}: ButtonProps) {
  const classes = [
    'modal-gallery-button',
    `modal-gallery-button--${variant}`,
    `modal-gallery-button--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} type={type} {...props}>
      {showIcon && (icon ?? <IconPlaceholder className="modal-gallery-button__icon" />)}
      {variant === 'default' && (
        <span className="modal-gallery-button__label">{children}</span>
      )}
    </button>
  )
}
