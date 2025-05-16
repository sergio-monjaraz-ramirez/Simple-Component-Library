import type { Meta } from "@storybook/vue3";
import { QuestionScoreComponent } from "../components";

const meta: Meta<typeof QuestionScoreComponent> = {
  title: "Components/Question Score",
  component: QuestionScoreComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    items: { control: "object" },
  },
  args: {
    items: [
        {
          questionName: "Experiencie",
          averageScore: 4.5,
          comparisonOrg: { value: -12 },
          comparedLastPeriod: "higher",
          stars: [
            { value: 1, maxValue: 10 },
            { value: 2, maxValue: 10 },
            { value: 3, maxValue: 10 },
            { value: 4, maxValue: 10 },
            { value: 5, maxValue: 10 },
          ],
        },
        {
          questionName: "Information",
          averageScore: 4.72,
          comparisonOrg: { value: 10 },
          comparedLastPeriod: "lower",
          stars: [
            { value: 0, maxValue: 10 },
            { value: 0, maxValue: 10 },
            { value: 3, maxValue: 10 },
            { value: 8, maxValue: 10 },
            { value: 6, maxValue: 10 },
          ],
        },
      ],

}

};

export default meta;

const Template = (args: any) => ({
    components: { QuestionScoreComponent },
    setup() {
      return { args };
    },
    template: '<div class="w-2/3"><QuestionScoreComponent v-bind="args" /></div>',
  });

export const Default = Template.bind({});
