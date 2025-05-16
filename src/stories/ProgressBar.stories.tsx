import type { Meta, StoryObj } from '@storybook/vue3';
import { ProgressBarComponent } from '../components';


const meta: Meta<typeof ProgressBarComponent> = {
    title: 'Components/Progress  Bar',
    component: ProgressBarComponent,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        value: { control:  'number'},
        size: { control: 'select', options: ['small', 'medium', 'large'] },
    },
    args: {
        value: 90,
        size: 'medium',
    }
    
}

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {};