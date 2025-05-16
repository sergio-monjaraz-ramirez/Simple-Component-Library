import type { Meta, StoryObj } from '@storybook/vue3';
import { DateComponent } from '../components';


const meta: Meta<typeof DateComponent> = {
    title: 'Components/Date',
    component: DateComponent,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        startDate: { control:  'date'},
        endDate: { control: 'date'},
        compareStartDate: { control: 'date' },
        compareEndDate: { control: 'date' }
    },
    args: {
        startDate: new Date(),
        endDate: new Date(),
        compareStartDate: new Date(),
        compareEndDate: new Date(),
    }
    
}

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {};