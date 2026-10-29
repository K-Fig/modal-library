import type { ButtonHTMLAttributes } from 'react'

export type ButtonDramaticVariant = 'purple' | 'pink' | 'orange' | 'green'

export interface ButtonDramaticProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonDramaticVariant
}

export function ButtonDramatic({
  children = 'Add to Cart',
  className = '',
  type = 'button',
  variant = 'purple',
  ...props
}: ButtonDramaticProps) {
  return (
    <button
      className={`modal-gallery-button-dramatic modal-gallery-button-dramatic--${variant} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
