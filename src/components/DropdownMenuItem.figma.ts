// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4208
// source=src/components/DataDisplay.tsx
// component=DropdownMenuItem
import figma from 'figma'
const i = figma.selectedInstance
const label = i.getString('Label'), shortcut = i.getString('Shortcut'), state = i.getEnum('State', { Default: 'default', Selected: 'selected', Disabled: 'disabled' })
export default { example: figma.code`<DropdownMenuItem label="${label}" shortcut="${shortcut}" state="${state}" />`, imports: ['import { DropdownMenuItem } from "@modal-gallery/react"'], id: 'modal-gallery-dropdown-menu-item', metadata: { nestable: true } }
