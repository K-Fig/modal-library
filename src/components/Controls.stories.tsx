import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox, RadioButton, Switch } from './Controls'

const meta = {
  component: Checkbox,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4139',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = { args: { label: 'Email updates', state: 'unchecked' } }
export const Checked: Story = { args: { label: 'Email updates', state: 'checked' } }
export const Radio: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4143',
    },
  },
  render: () => <RadioButton label="Weekly digest" state="checked" />,
}
export const On: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4147',
    },
  },
  render: () => <Switch label="Activity notifications" state="on" />,
}
