import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { Button } from './Button'

const meta = {
  component: Button,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=12-18',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { children: 'Continue', color: 'blue' },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole('button', { name: 'Continue' })).toHaveAttribute('type', 'button')
  },
}

export const Pink: Story = { args: { children: 'Delete', color: 'pink' } }
export const Icon: Story = { args: { variant: 'icon', showIcon: true, 'aria-label': 'Open menu' } }
export const CssCheck: Story = {
  args: { children: 'Styled button', color: 'blue' },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Styled button' })
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(0, 102, 255)')
  },
}
