// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4194
// source=src/components/DataDisplay.tsx
// component=Avatar
import figma from 'figma'
const i = figma.selectedInstance
const initials = i.getString('Initials'), appearance = i.getEnum('Appearance', { Initials: 'initials', Neutral: 'neutral' })
export default { example: figma.code`<Avatar initials="${initials}" appearance="${appearance}" />`, imports: ['import { Avatar } from "@modal-gallery/react"'], id: 'modal-gallery-avatar', metadata: { nestable: true } }
