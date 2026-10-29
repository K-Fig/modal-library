// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4139
// source=src/components/Controls.tsx
// component=Checkbox
import figma from 'figma'
const i = figma.selectedInstance
const label = i.getString('Label')
const helper = i.getString('Helper text')
const disabledMessage = i.getString('Disabled message')
const state = i.getEnum('State', { Unchecked: 'unchecked', Checked: 'checked', Indeterminate: 'indeterminate', Disabled: 'disabled' })
export default { example: figma.code`<Checkbox label="${label}" helperText="${state === 'disabled' ? disabledMessage : helper}" state="${state}" />`, imports: ['import { Checkbox } from "@modal-gallery/react"'], id: 'modal-gallery-checkbox', metadata: { nestable: true } }
