import type { Meta } from "@storybook/vue3";
import { SingleBarComponent } from "../components";

const meta: Meta<typeof SingleBarComponent> = {
  title: "Components/Single Bar",
  component: SingleBarComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number" },
    color: { control: "color" },
    size: { control: "select", options: ["small", "medium", "large"] },
  },
  args: {
    value: 50,
    size: "medium",
  }
};

export default meta;

const Template = (args: any) => ({
  components: { SingleBarComponent },
  setup() {
    return { args };
  },
  template: '<div class="h-20"><SingleBarComponent v-bind="args" /></div>',
});

export const Default = Template.bind({});
