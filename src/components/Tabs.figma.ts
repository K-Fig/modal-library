// url=https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4185
// source=src/components/Navigation.tsx
// component=Tabs
import figma from 'figma'
const i = figma.selectedInstance
const first = i.getString('First tab'), second = i.getString('Second tab'), selected = i.getEnum('Selected', { First: 'first', Second: 'second' })
export default { example: figma.code`<Tabs firstTab="${first}" secondTab="${second}" selected="${selected}" />`, imports: ['import { Tabs } from "@modal-gallery/react"'], id: 'modal-gallery-tabs', metadata: { nestable: true } }
