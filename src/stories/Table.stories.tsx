import type { Meta } from "@storybook/vue3";
import { TableComponent } from "../components";

const meta: Meta<typeof TableComponent> = {
  title: "Components/Table",
  component: TableComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
  },
  args: {
    data: [
      {
        questionName: "Age",
        blanksValue: "5",
        progressBarValue: { value: 81.48 },
      },
      {
        questionName: "Gender",
        blanksValue: "0",
        progressBarValue: { value: 100 },
      },
      {
        questionName: "Ethnicity",
        blanksValue: "1",
        progressBarValue: { value: 96.3 },
      },
      {
        questionName: "Reviewer type",
        blanksValue: "13",
        progressBarValue: { value: 51.85 },
      },
    ],
  },
};

export default meta;;
const Template = (args: any) => ({
  components: { TableComponent },
  setup() {
    return { args };
  },
  template: '<TableComponent v-bind="args" class="w-1/2" />',
});


export const Default = Template.bind({});
