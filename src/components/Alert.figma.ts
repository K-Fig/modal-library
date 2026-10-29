// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4176
// source=src/components/Feedback.tsx
// component=Alert
import figma from 'figma'
const i = figma.selectedInstance
const tone = i.getEnum('Tone', { Info: 'info', Success: 'success', Warning: 'warning', Error: 'error' }) ?? 'info'
const action = i.getString('Action label'), errorAction = i.getString('Error action')
const title = tone === 'error' ? i.getString('Error title') : tone === 'warning' ? i.getString('Warning title') : tone === 'success' ? i.getString('Success title') : i.getString('Info title')
const description = tone === 'error' ? i.getString('Error description') : tone === 'warning' ? i.getString('Warning description') : tone === 'success' ? i.getString('Success description') : i.getString('Info description')
export default { example: figma.code`<Alert tone="${tone}" title="${title}" description="${description}" actionLabel="${tone === 'error' ? errorAction : action}" />`, imports: ['import { Alert } from "@modal-gallery/react"'], id: 'modal-gallery-alert', metadata: { nestable: true } }
