// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4153
// source=src/components/Fields.tsx
// component=InputField
import figma from 'figma'
const i = figma.selectedInstance
const label = i.getString('Label'), value = i.getString('Value'), helper = i.getString('Helper text'), placeholder = i.getString('Placeholder'), error = i.getString('Error message'), disabled = i.getString('Disabled message')
const state = i.getEnum('State', { Default: 'default', Focus: 'focus', Filled: 'filled', Error: 'error', Disabled: 'disabled' })
const message = state === 'error' ? error : state === 'disabled' ? disabled : helper
export default { example: figma.code`<InputField label="${label}" value="${state === 'filled' ? value : ''}" placeholder="${placeholder}" helperText="${message}" state="${state}" />`, imports: ['import { InputField } from "@modal-gallery/react"'], id: 'modal-gallery-input-field', metadata: { nestable: true } }
