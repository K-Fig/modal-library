// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2-130
// source=src/components/Typography.tsx
// component=AccordionQuestion
import figma from 'figma'
const text = figma.selectedInstance.getString('Text')
export default { example: figma.code`<AccordionQuestion>${text}</AccordionQuestion>`, imports: ['import { AccordionQuestion } from "@modal-gallery/react"'], id: 'modal-gallery-accordion-question', metadata: { nestable: true } }
