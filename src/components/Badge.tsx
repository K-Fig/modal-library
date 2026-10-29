import type { HTMLAttributes, ReactNode } from 'react'
import type { ButtonColor } from './Button'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: ButtonColor
  children?: ReactNode
}

export function Badge({
  children = 'Badge',
  className = '',
  color = 'blue',
  ...props
}: BadgeProps) {
  const classes = [
    'modal-gallery-badge',
    `modal-gallery-badge--${color}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}
