import type { Meta, StoryObj } from '@storybook/react-vite'
import { InputField, SearchField, Select, Textarea } from './Fields'

const meta = {
  component: InputField,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4153',
    },
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = { args: { label: 'Workspace name', placeholder: 'Modal Gallery' } }
export const Error: Story = { args: { label: 'Workspace name', state: 'error', helperText: 'A workspace name is required.' } }
export const Search: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4164',
    },
  },
  render: () => <SearchField />,
}
export const Description: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4157',
    },
  },
  render: () => <Textarea label="Description" rows={4} />,
}
export const Role: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tSLhEB5Z1646aS59UpaQ0r/DS-Modal-Gallery?node-id=2004-4161',
    },
  },
  render: () => (
    <Select label="Workspace role">
      <option>Editor</option>
      <option>Viewer</option>
    </Select>
  ),
}
