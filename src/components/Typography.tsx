import type { HTMLAttributes, ReactNode } from 'react'

export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  children?: ReactNode
}

function Typography({
  children,
  className = '',
  variant,
  ...props
}: TypographyProps & { variant: string }) {
  return (
    <span className={`modal-gallery-type modal-gallery-type--${variant} ${className}`} {...props}>
      {children}
    </span>
  )
}

export const ModalGalleryTitle = (props: TypographyProps) => (
  <Typography variant="display" {...props}>
    {props.children ?? 'Modal Gallery'}
  </Typography>
)

export const FeaturedProductsTitle = (props: TypographyProps) => (
  <Typography variant="section-title" {...props}>
    {props.children ?? 'Featured Products'}
  </Typography>
)

export const ProductTitle = (props: TypographyProps) => (
  <Typography variant="product-title" {...props}>
    {props.children ?? 'Neon Dreams'}
  </Typography>
)

export const AccordionQuestion = (props: TypographyProps) => (
  <Typography variant="question" {...props}>
    {props.children ?? 'What are the shipping options?'}
  </Typography>
)

export const BodyLead = (props: TypographyProps) => (
  <Typography variant="body-lead" {...props}>
    {props.children ?? 'Experience the future of interface design.'}
  </Typography>
)

export const Metadata = (props: TypographyProps) => (
  <Typography variant="metadata" {...props}>
    {props.children ?? 'Compact & Simple  ·  With Buttons'}
  </Typography>
)

export const Price = (props: TypographyProps) => (
  <Typography variant="price" {...props}>
    {props.children ?? '$129'}
  </Typography>
)

export const ActionLabel = (props: TypographyProps) => (
  <Typography variant="action-label" {...props}>
    {props.children ?? 'Add to Cart'}
  </Typography>
)

export const BadgeLabel = (props: TypographyProps) => (
  <Typography variant="badge-label" {...props}>
    {props.children ?? 'Featured  ·  New  ·  Limited'}
  </Typography>
)
