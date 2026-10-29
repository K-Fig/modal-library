// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4143
// source=src/components/Controls.tsx
// component=RadioButton
import figma from 'figma'
const i = figma.selectedInstance
const label = i.getString('Label')
const helper = i.getString('Helper text')
const disabledMessage = i.getString('Disabled message')
const state = i.getEnum('State', { Unchecked: 'unchecked', Checked: 'checked', Disabled: 'disabled' })
export default { example: figma.code`<RadioButton label="${label}" helperText="${state === 'disabled' ? disabledMessage : helper}" state="${state}" />`, imports: ['import { RadioButton } from "@modal-gallery/react"'], id: 'modal-gallery-radio-button', metadata: { nestable: true } }
