// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=16-2
// source=src/components/AccordionItem.tsx
// component=AccordionItem
import figma from 'figma'

const instance = figma.selectedInstance
const question = instance.getString('question')
const answer = instance.getString('answer')
const state = instance.getEnum('State', {
  Collapsed: 'collapsed',
  Expanded: 'expanded',
})

export default {
  example: figma.code`
    <AccordionItem
      answer="${answer}"
      question="${question}"
      ${state === 'expanded' ? 'defaultExpanded' : ''}
    />
  `,
  imports: ['import { AccordionItem } from "@modal-gallery/react"'],
  id: 'modal-gallery-accordion-item',
  metadata: { nestable: true },
}
