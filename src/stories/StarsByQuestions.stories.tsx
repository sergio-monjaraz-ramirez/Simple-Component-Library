import type { Meta } from '@storybook/vue3';
import { StarsByQuestions } from '../components';


const meta: Meta<typeof StarsByQuestions> = {
    title: 'Components/Charts/Stars By Questions',
    component: StarsByQuestions,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        questionLabel: { control: 'text' },
        stars: { control: 'object' },
    },
    args: {
        questionLabel: 'Would my patients recommend me?',
        stars: [0,0,10,5,0]  
    }

}

export default meta;


const Template = (args: any) => ({
    components: { StarsByQuestions },
    setup() {
      return { args };
    },
    template: '<StarsByQuestions v-bind="args" class="w-4/5" />',
  });

export const Default = Template.bind({});