// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4171
// source=src/components/Surfaces.tsx
// component=Section
import figma from 'figma'
const i = figma.selectedInstance
const title = i.getString('Title'), description = i.getString('Description'), bodyTitle = i.getString('Body title'), bodyText = i.getString('Body text'), actionLabel = i.getString('Action label')
const appearance = i.getEnum('Appearance', { Default: 'default', 'With action': 'with-action' })
export default { example: figma.code`<Section title="${title}" description="${description}" bodyTitle="${bodyTitle}" bodyText="${bodyText}" actionLabel="${actionLabel}" appearance="${appearance}" />`, imports: ['import { Section } from "@modal-gallery/react"'], id: 'modal-gallery-section', metadata: { nestable: true } }
