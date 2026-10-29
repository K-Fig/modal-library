// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4182
// source=src/components/Feedback.tsx
// component=Dialog
import figma from 'figma'
const i = figma.selectedInstance
const purpose = i.getEnum('Purpose', { Confirmation: 'confirmation', Destructive: 'destructive' }) ?? 'confirmation', secondary = i.getString('Secondary action label')
const title = purpose === 'destructive' ? i.getString('Destructive title') : i.getString('Confirmation title'), description = purpose === 'destructive' ? i.getString('Destructive description') : i.getString('Confirmation description')
export default { example: figma.code`<Dialog purpose="${purpose}" title="${title}" description="${description}" secondaryActionLabel="${secondary}" />`, imports: ['import { Dialog } from "@modal-gallery/react"'], id: 'modal-gallery-dialog', metadata: { nestable: true } }
