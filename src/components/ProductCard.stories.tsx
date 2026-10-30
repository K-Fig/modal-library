import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProductCard } from './ProductCard'

const meta = {
  component: ProductCard,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=21-152',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Featured: Story = { args: { title: 'Neon Dreams', price: '$129', featured: 'Featured' } }
export const CustomProduct: Story = {
  args: {
    title: 'Sunset Drive',
    price: '$89',
    featured: 'Limited',
    imageAlt: 'Colorful product artwork',
  },
}
