import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonColor = 'blue' | 'pink' | 'orange' | 'green'
export type ButtonVariant = 'default' | 'icon'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  color?: ButtonColor
  icon?: ReactNode
  showIcon?: boolean
  variant?: ButtonVariant
}

function PlusIcon() {
  return (
    <svg
      aria-hidden="true"
      className="modal-gallery-button__icon"
      viewBox="0 0 20 20"
    >
      <path d="M4 10h12M10 4v12" />
    </svg>
  )
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
      {showIcon && (icon ?? <PlusIcon />)}
      {variant === 'default' && (
        <span className="modal-gallery-button__label">{children}</span>
      )}
    </button>
  )
}
