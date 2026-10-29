// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4157
// source=src/components/Fields.tsx
// component=Textarea
import figma from 'figma'
const i = figma.selectedInstance
const label = i.getString('Label'), value = i.getString('Value'), helper = i.getString('Helper text'), placeholder = i.getString('Placeholder'), error = i.getString('Error message')
const state = i.getEnum('State', { Default: 'default', Filled: 'filled', Error: 'error' })
export default { example: figma.code`<Textarea label="${label}" value="${state === 'filled' ? value : ''}" placeholder="${placeholder}" helperText="${state === 'error' ? error : helper}" state="${state}" />`, imports: ['import { Textarea } from "@modal-gallery/react"'], id: 'modal-gallery-textarea', metadata: { nestable: true } }
