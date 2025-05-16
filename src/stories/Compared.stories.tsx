import type { Meta, StoryObj } from "@storybook/vue3";
import { ComparedComponent } from "../components";

const meta: Meta<typeof ComparedComponent> = {
  title: "Components/Compared",
  component: ComparedComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    value: { control: "select", options: ["higher", "lower", "equal"] },
    size: { control: "select", options: ["small", "medium", "large"] },
  },
  args: {
    color: '',
    value: "higher",
    size: 'medium',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
