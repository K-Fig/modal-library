// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2-127
// source=src/components/Typography.tsx
// component=ModalGalleryTitle
import figma from 'figma'
const text = figma.selectedInstance.getString('Text')
export default { example: figma.code`<ModalGalleryTitle>${text}</ModalGalleryTitle>`, imports: ['import { ModalGalleryTitle } from "@modal-gallery/react"'], id: 'modal-gallery-title', metadata: { nestable: true } }
