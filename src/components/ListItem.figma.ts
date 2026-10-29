// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4204
// source=src/components/DataDisplay.tsx
// component=ListItem
import figma from 'figma'
const i = figma.selectedInstance
const label = i.getString('Label'), description = i.getString('Description'), state = i.getEnum('State', { Default: 'default', Selected: 'selected', Disabled: 'disabled' })
export default { example: figma.code`<ListItem label="${label}" description="${description}" state="${state}" />`, imports: ['import { ListItem } from "@modal-gallery/react"'], id: 'modal-gallery-list-item', metadata: { nestable: true } }
