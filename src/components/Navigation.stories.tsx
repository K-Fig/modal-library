import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumb, Pagination, Tabs, Tooltip } from './Navigation'

const meta = {
  component: Tabs,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4185',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const TabsOverview: Story = { args: { firstTab: 'Overview', secondTab: 'Activity', selected: 'first' } }
export const Breadcrumbs: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4187',
    },
  },
  render: () => <Breadcrumb />,
}
export const Pages: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4189',
    },
  },
  render: () => <Pagination />,
}
export const Help: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4191',
    },
  },
  render: () => <Tooltip />,
}
