// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2-131
// source=src/components/Typography.tsx
// component=BodyLead
import figma from 'figma'
const text = figma.selectedInstance.getString('Text')
export default { example: figma.code`<BodyLead>${text}</BodyLead>`, imports: ['import { BodyLead } from "@modal-gallery/react"'], id: 'modal-gallery-body-lead', metadata: { nestable: true } }
