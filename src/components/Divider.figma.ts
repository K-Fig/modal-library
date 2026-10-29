// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4200
// source=src/components/DataDisplay.tsx
// component=Divider
import figma from 'figma'
const i = figma.selectedInstance
const label = i.getString('Label'), appearance = i.getEnum('Appearance', { Plain: 'plain', Labelled: 'labelled' })
export default { example: figma.code`<Divider ${appearance === 'labelled' ? figma.code`label="${label}"` : ''} />`, imports: ['import { Divider } from "@modal-gallery/react"'], id: 'modal-gallery-divider', metadata: { nestable: true } }
