import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  component: Badge,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=13-13',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Featured: Story = { args: { children: 'Featured', color: 'blue' } }
export const New: Story = { args: { children: 'New', color: 'pink' } }
export const Limited: Story = { args: { children: 'Limited', color: 'orange' } }
