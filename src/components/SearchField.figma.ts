// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4164
// source=src/components/Fields.tsx
// component=SearchField
import figma from 'figma'
const i = figma.selectedInstance
const label = i.getString('Label'), value = i.getString('Value'), helper = i.getString('Helper text'), placeholder = i.getString('Placeholder')
const state = i.getEnum('State', { Default: 'default', Filled: 'filled' })
export default { example: figma.code`<SearchField label="${label}" value="${state === 'filled' ? value : ''}" placeholder="${placeholder}" helperText="${helper}" state="${state}" />`, imports: ['import { SearchField } from "@modal-gallery/react"'], id: 'modal-gallery-search-field', metadata: { nestable: true } }
