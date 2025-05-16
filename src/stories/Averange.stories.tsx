import type { Meta, StoryObj } from '@storybook/vue3';
import { AverangeComponent } from '../components';

const meta: Meta<typeof AverangeComponent> = {
  title: 'Components/Combined/Averange',
  component: AverangeComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    value: { control:  'number'},
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    showNumbers: { control: 'boolean' },
    color: { control: 'color' }
},
}

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {}

