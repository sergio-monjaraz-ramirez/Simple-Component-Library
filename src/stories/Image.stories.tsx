import type { Meta, StoryObj } from '@storybook/vue3';
import { ImageComponent } from '../components';


const meta: Meta<typeof ImageComponent> = {
  title: 'Components/Image',
  component: ImageComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    image: { control: 'text' },
  },
  args: {
    image: 'https://help.wnpower.com/hc/article_attachments/24443330766477'
  }

}

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaut: Story ={}

