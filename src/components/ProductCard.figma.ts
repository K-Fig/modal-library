// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=21-152
// source=src/components/ProductCard.tsx
// component=ProductCard
import figma from 'figma'

const instance = figma.selectedInstance
const featured = instance.getString('Featured')
const title = instance.findInstance('Neon Dreams')
const price = instance.findInstance('$129')
const action = instance.findInstance('Button Dramatic')
const titleCode = title?.executeTemplate().example
const priceCode = price?.executeTemplate().example
const actionCode = action?.executeTemplate().example

export default {
  example: figma.code`
    <ProductCard
      featured="${featured}"
      ${titleCode ? figma.code`title={${titleCode}}` : ''}
      ${priceCode ? figma.code`price={${priceCode}}` : ''}
      ${actionCode ? figma.code`action={${actionCode}}` : ''}
    />
  `,
  imports: ['import { ProductCard } from "@modal-gallery/react"'],
  id: 'modal-gallery-product-card',
  metadata: { nestable: true },
}
