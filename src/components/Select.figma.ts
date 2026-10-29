// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4161
// source=src/components/Fields.tsx
// component=Select
import figma from 'figma'
const i = figma.selectedInstance
const label = i.getString('Label'), value = i.getString('Value'), helper = i.getString('Helper text'), placeholder = i.getString('Placeholder'), disabled = i.getString('Disabled message')
const state = i.getEnum('State', { Default: 'default', Filled: 'filled', Disabled: 'disabled' })
export default { example: figma.code`<Select label="${label}" value="${state === 'filled' ? value : ''}" helperText="${state === 'disabled' ? disabled : helper}" state="${state}"><option>${state === 'filled' ? value : placeholder}</option></Select>`, imports: ['import { Select } from "@modal-gallery/react"'], id: 'modal-gallery-select', metadata: { nestable: true } }
