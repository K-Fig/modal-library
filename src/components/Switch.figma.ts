// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4147
// source=src/components/Controls.tsx
// component=Switch
import figma from 'figma'
const i = figma.selectedInstance
const label = i.getString('Label')
const helper = i.getString('Helper text')
const disabledMessage = i.getString('Disabled message')
const state = i.getEnum('State', { Off: 'off', On: 'on', Disabled: 'disabled' })
export default { example: figma.code`<Switch label="${label}" helperText="${state === 'disabled' ? disabledMessage : helper}" state="${state}" />`, imports: ['import { Switch } from "@modal-gallery/react"'], id: 'modal-gallery-switch', metadata: { nestable: true } }
