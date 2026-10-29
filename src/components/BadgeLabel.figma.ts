// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2-135
// source=src/components/Typography.tsx
// component=BadgeLabel
import figma from 'figma'
const text = figma.selectedInstance.getString('Text')
export default { example: figma.code`<BadgeLabel>${text}</BadgeLabel>`, imports: ['import { BadgeLabel } from "@modal-gallery/react"'], id: 'modal-gallery-badge-label', metadata: { nestable: true } }
