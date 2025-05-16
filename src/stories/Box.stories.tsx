import type { Meta } from '@storybook/vue3';
import { BoxComponent } from '../components';

const meta: Meta<typeof BoxComponent> = {
  title: 'Components/Box',
  component: BoxComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    textColor: { control: 'color' },
    titleColor: { control: 'color' },
    titleSize: { control: 'select', options: ['x-small', 'small', 'medium', 'large'] },
    textSize: { control: 'select', options: ['x-small', 'small', 'medium', 'large'] }

  },
  args: {
    title: 'reviews this period',
    value: '28',
    textColor: '#4784C4',
    titleColor: '#000',
  },
}

export default meta;

const Template = (args: any) => ({
  components: { BoxComponent },
  setup() {
    return { args };
  },
  template: '<BoxComponent v-bind="args" class="h-52 w-60" />',
});
export const Default = Template.bind({});

