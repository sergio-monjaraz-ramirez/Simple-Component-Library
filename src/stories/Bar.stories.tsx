import type { Meta, StoryObj } from '@storybook/vue3';
import { BarComponent } from '../components';


const meta: Meta<typeof BarComponent> = {
    title: 'Components/Charts/Bar',
    component: BarComponent,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        display: { control: 'select', options: ['horizontal', 'vertical'] },
        items: { control: 'object' },
    },
    args: {
        title: 'Bar component',
        display: 'vertical',
        items:  [
            {title: 'Value 1', value: 10, color: '' },
            {title: 'Value 2', value: 15 , color: '' },
            {title: 'Value 3', value: 5, color: ''  },
            {title: 'Value 4', value: 20, color: ''  },
            {title: 'Value 5', value: 25, color: ''  },
            {title: 'Value 6', value: 30, color: ''  },
          ]
    }
    
}

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {};