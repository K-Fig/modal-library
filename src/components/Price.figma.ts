// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2-133
// source=src/components/Typography.tsx
// component=Price
import figma from 'figma'
const text = figma.selectedInstance.getString('Text')
export default { example: figma.code`<Price>${text}</Price>`, imports: ['import { Price } from "@modal-gallery/react"'], id: 'modal-gallery-price', metadata: { nestable: true } }
