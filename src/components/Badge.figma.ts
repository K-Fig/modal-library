// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=13-13
// source=src/components/Badge.tsx
// component=Badge
import figma from 'figma'

const instance = figma.selectedInstance
const label = instance.getString('label')
const color = instance.getEnum('Color', {
  Blue: 'blue',
  Pink: 'pink',
  Orange: 'orange',
  Green: 'green',
})

export default {
  example: figma.code`<Badge color="${color}">${label}</Badge>`,
  imports: ['import { Badge } from "@modal-gallery/react"'],
  id: 'modal-gallery-badge',
  metadata: { nestable: true },
}
