// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4197
// source=src/components/DataDisplay.tsx
// component=Progress
import figma from 'figma'
const i = figma.selectedInstance
const state = i.getEnum('State', { Default: 'default', Complete: 'complete' }), label = i.getString('Label'), value = i.getString('Value'), completeLabel = i.getString('Complete label'), completeValue = i.getString('Complete value')
export default { example: figma.code`<Progress label="${state === 'complete' ? completeLabel : label}" value="${state === 'complete' ? completeValue : value}" ${state === 'complete' ? 'complete' : ''} />`, imports: ['import { Progress } from "@modal-gallery/react"'], id: 'modal-gallery-progress', metadata: { nestable: true } }
