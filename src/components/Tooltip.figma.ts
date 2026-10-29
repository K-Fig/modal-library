// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4191
// source=src/components/Navigation.tsx
// component=Tooltip
import figma from 'figma'
const i = figma.selectedInstance
const description = i.getString('Description')
i.getEnum('State', { Default: 'default' })
export default { example: figma.code`<Tooltip description="${description}" />`, imports: ['import { Tooltip } from "@modal-gallery/react"'], id: 'modal-gallery-tooltip', metadata: { nestable: true } }
