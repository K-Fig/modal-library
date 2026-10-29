// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2-132
// source=src/components/Typography.tsx
// component=Metadata
import figma from 'figma'
const text = figma.selectedInstance.getString('Text')
export default { example: figma.code`<Metadata>${text}</Metadata>`, imports: ['import { Metadata } from "@modal-gallery/react"'], id: 'modal-gallery-metadata', metadata: { nestable: true } }
