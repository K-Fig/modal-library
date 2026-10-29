// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4179
// source=src/components/Feedback.tsx
// component=Toast
import figma from 'figma'
const i = figma.selectedInstance
const tone = i.getEnum('Tone', { Success: 'success', Error: 'error' }) ?? 'success'
const title = tone === 'error' ? i.getString('Error title') : i.getString('Success title'), description = tone === 'error' ? i.getString('Error description') : i.getString('Success description'), action = tone === 'error' ? i.getString('Error action') : i.getString('Success action')
export default { example: figma.code`<Toast tone="${tone}" title="${title}" description="${description}" actionLabel="${action}" />`, imports: ['import { Toast } from "@modal-gallery/react"'], id: 'modal-gallery-toast', metadata: { nestable: true } }
