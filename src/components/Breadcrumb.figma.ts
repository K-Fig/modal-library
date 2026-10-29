// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4187
// source=src/components/Navigation.tsx
// component=Breadcrumb
import figma from 'figma'
const i = figma.selectedInstance
const first = i.getString('First level'), second = i.getString('Second level'), current = i.getString('Current level')
i.getEnum('State', { Default: 'default' })
export default { example: figma.code`<Breadcrumb firstLevel="${first}" secondLevel="${second}" currentLevel="${current}" />`, imports: ['import { Breadcrumb } from "@modal-gallery/react"'], id: 'modal-gallery-breadcrumb', metadata: { nestable: true } }
