import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert, Dialog, Toast } from './Feedback'

const meta = {
  component: Alert,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4176',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = { args: { title: 'A quick heads-up', tone: 'info' } }
export const SuccessToast: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4179',
    },
  },
  render: () => <Toast title="Saved" description="Your changes are live." tone="success" />,
}
export const DestructiveDialog: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4182',
    },
  },
  render: () => <Dialog purpose="destructive" title="Delete project?" />,
}
