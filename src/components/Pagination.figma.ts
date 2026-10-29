// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4189
// source=src/components/Navigation.tsx
// component=Pagination
import figma from 'figma'
const i = figma.selectedInstance
const p1 = i.getString('Page label'), p2 = i.getString('Page label 2'), p3 = i.getString('Page label 3'), ellipsis = i.getString('Ellipsis'), p4 = i.getString('Page label 4')
i.getEnum('State', { Default: 'default' })
export default { example: figma.code`<Pagination pages={["${p1}", "${p2}", "${p3}", "${ellipsis}", "${p4}"]} />`, imports: ['import { Pagination } from "@modal-gallery/react"'], id: 'modal-gallery-pagination', metadata: { nestable: true } }
