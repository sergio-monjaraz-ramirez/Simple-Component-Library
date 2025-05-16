import { Meta } from '@storybook/vue3';
import { NameComponent } from '../components';


const meta: Meta<typeof NameComponent> = {
    title: 'Components/Name Component',
    component: NameComponent,
    tags: ['autodocs'],
    argTypes: {
        name: { control: 'text' },
        secondaryText: { control: 'text' },
        color: { control: 'color' },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
    },
    args: {
        name: 'John Doe',
        secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipis',
    },
};

export default meta;

const Template = (args: any) => ({
    components: { NameComponent },
    setup() {
      return { args };
    },
    template: '<NameComponent v-bind="args" class="h-52" />',
  });

export const Default = Template.bind({});
