import type { Meta, StoryObj } from "@storybook/vue3";
import { PieComponent } from "../components";

const meta: Meta<typeof PieComponent> = {
  title: "Components/Charts/Pie",
  component: PieComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    data: { control: "object" },
  },
  args: {
    title: "Title Pie Chart",
    data: [
      { title: "Sector 1", value: 1, color: "gray" },
      { title: "Sector 2", value: 2, color: "#4784C4" },
      { title: "Sector 3", value: 3, color: "#48A634" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
