import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonDramatic } from './ButtonDramatic'

const meta = {
  component: ButtonDramatic,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=21-186',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof ButtonDramatic>

export default meta
type Story = StoryObj<typeof meta>

export const Purple: Story = { args: { children: 'Add to Cart', variant: 'purple' } }
export const Pink: Story = { args: { children: 'Save for later', variant: 'pink' } }
export const Green: Story = { args: { children: 'Confirm', variant: 'green' } }
