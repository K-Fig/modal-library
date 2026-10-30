import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, Section } from './Surfaces'

const meta = {
  component: Card,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4168',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCard: Story = { args: { title: 'Your next project' } }
export const HighlightedCard: Story = { args: { title: 'Featured resources', appearance: 'highlight' } }
export const ResourceSection: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4171',
    },
  },
  render: () => <Section appearance="with-action" />,
}
