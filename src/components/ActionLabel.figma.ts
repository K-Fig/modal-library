// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2-134
// source=src/components/Typography.tsx
// component=ActionLabel
import figma from 'figma'
const text = figma.selectedInstance.getString('Text')
export default { example: figma.code`<ActionLabel>${text}</ActionLabel>`, imports: ['import { ActionLabel } from "@modal-gallery/react"'], id: 'modal-gallery-action-label', metadata: { nestable: true } }
