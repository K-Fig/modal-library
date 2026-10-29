import type { SVGAttributes } from 'react'

export type IconPlaceholderProps = SVGAttributes<SVGSVGElement>

export function IconPlaceholder({
  className = '',
  ...props
}: IconPlaceholderProps) {
  return (
    <svg
      aria-hidden="true"
      className={`modal-gallery-icon-placeholder ${className}`}
      viewBox="0 0 20 20"
      {...props}
    >
      <path d="M4 10h12M10 4v12" />
    </svg>
  )
}
