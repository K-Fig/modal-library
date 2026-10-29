import type { HTMLAttributes, ReactNode } from 'react'
import productCardImage from '../assets/product-card.jpg'
import { ButtonDramatic } from './ButtonDramatic'
import { Price, ProductTitle } from './Typography'

export interface ProductCardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  action?: ReactNode
  featured?: ReactNode
  imageAlt?: string
  imageSrc?: string
  price?: ReactNode
  title?: ReactNode
}

export function ProductCard({
  action = <ButtonDramatic>Add to Cart</ButtonDramatic>,
  className = '',
  featured = 'Featured',
  imageAlt = '',
  imageSrc = productCardImage,
  price = <Price>$129</Price>,
  title = <ProductTitle>Neon Dreams</ProductTitle>,
  ...props
}: ProductCardProps) {
  return (
    <article className={`modal-gallery-product-card ${className}`} {...props}>
      <div className="modal-gallery-product-card__image">
        <img alt={imageAlt} src={imageSrc} />
        <span>{featured}</span>
      </div>
      <div className="modal-gallery-product-card__content">
        {title}
        <div className="modal-gallery-product-card__actions">
          {price}
          {action}
        </div>
      </div>
    </article>
  )
}
