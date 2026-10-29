// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=21-186
// source=src/components/ButtonDramatic.tsx
// component=ButtonDramatic
import figma from 'figma'

const instance = figma.selectedInstance
const label = instance.getString('Label')
const variant = instance.getEnum('Variant', {
  purple: 'purple',
  green: 'green',
  pink: 'pink',
  orange: 'orange',
})

export default {
  example: figma.code`
    <ButtonDramatic variant="${variant}">
      ${label}
    </ButtonDramatic>
  `,
  imports: ['import { ButtonDramatic } from "@modal-gallery/react"'],
  id: 'modal-gallery-button-dramatic',
  metadata: { nestable: true },
}
