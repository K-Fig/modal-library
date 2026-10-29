// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4212
// source=src/components/DataDisplay.tsx
// component=TableRow
import figma from 'figma'
const i = figma.selectedInstance
const state = i.getEnum('State', { Header: 'header', Default: 'default', Selected: 'selected' }), name = i.getString('Name'), type = i.getString('Type'), status = i.getString('Status'), updated = i.getString('Updated'), action = i.getString('Action label'), nameHeading = i.getString('Name heading'), typeHeading = i.getString('Type heading'), statusHeading = i.getString('Status heading'), updatedHeading = i.getString('Updated heading')
export default { example: figma.code`<TableRow state="${state}" name="${state === 'header' ? nameHeading : name}" type="${state === 'header' ? typeHeading : type}" status="${state === 'header' ? statusHeading : status}" updated="${state === 'header' ? updatedHeading : updated}" actionLabel="${action}" />`, imports: ['import { TableRow } from "@modal-gallery/react"'], id: 'modal-gallery-table-row', metadata: { nestable: true } }
