// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4168
// source=src/components/Surfaces.tsx
// component=Card
import figma from 'figma'
const i = figma.selectedInstance
const title = i.getString('Title'), description = i.getString('Description')
const appearance = i.getEnum('Appearance', { Default: 'default', Bordered: 'bordered', Highlight: 'highlight' })
export default { example: figma.code`<Card title="${title}" description="${description}" appearance="${appearance}" />`, imports: ['import { Card } from "@modal-gallery/react"'], id: 'modal-gallery-card', metadata: { nestable: true } }
