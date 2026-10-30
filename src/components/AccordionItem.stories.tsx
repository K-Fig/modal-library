import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect } from 'storybook/test'
import { AccordionItem } from './AccordionItem'

const meta = {
  component: AccordionItem,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=16-2',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof AccordionItem>

export default meta
type Story = StoryObj<typeof meta>

export const Collapsed: Story = {
  args: { question: 'What are the shipping options?' },
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole('button', { name: 'What are the shipping options?' })
    await userEvent.click(trigger)
    await expect(trigger).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByText(/standard, express/i)).toBeVisible()
  },
}

export const Expanded: Story = { args: { defaultExpanded: true, question: 'How do returns work?' } }
