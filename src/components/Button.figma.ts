// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=12-18
// source=src/components/Button.tsx
// component=Button
import figma from 'figma'

const instance = figma.selectedInstance
const label = instance.getString('label')
const showIcon = instance.getBoolean('showIcon')
const variant = instance.getEnum('Style', {
  Default: 'default',
  Icon: 'icon',
})
const color = instance.getEnum('Color', {
  Blue: 'blue',
  Pink: 'pink',
  Orange: 'orange',
  Green: 'green',
})

export default {
  example: figma.code`
    <Button
      color="${color}"
      variant="${variant}"
      ${showIcon ? 'showIcon' : ''}
    >
      ${label}
    </Button>
  `,
  imports: ['import { Button } from "@modal-gallery/react"'],
  id: 'modal-gallery-button',
  metadata: { nestable: true },
}
