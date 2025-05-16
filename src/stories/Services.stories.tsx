import type { Meta, StoryObj } from "@storybook/vue3";
import { ServicesComponent } from "../components";

const meta: Meta<typeof ServicesComponent> = {
  title: "Components/Services Table",
  component: ServicesComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    questions: { control: "object"},
    data: { control: "object" },
  },
  args: {
    questions: ["Question 1", "Question 2", "Question 3"],
    data: [
      {
        serviceName: "Service A",
        parentName: "Parent 1",
        thisPeriod: {
          responses: { numReview: 10, responseRate: "---" },
          averageScore: "4.5",
        },
        last6Months: {
          averageScore: "4.5",
        },
        questions: [
          {
            direction: "higher",
            color: "green",
          },
          {
            direction: "lower",
            color: "red",
          },
          {
            direction: "equal",
            color: "green",
          },
        ],
       
      },
      {
        serviceName: "Service B",
        parentName: "Parent 2",
        thisPeriod: {
          responses: { numReview: 10, responseRate: "---" },
          averageScore: "4.5",
        },
        last6Months: {
          averageScore: "4.5",
        },
        questions: [
          {
            direction: "higher",
            color: "green",
          },
          {
            direction: "lower",
            color: "red",
          },
          {
            direction: "equal",
            color: "green",
          },
        ],
      
      },
      {
        serviceName: "Service C",
        parentName: "Parent 1",
        thisPeriod: {
          responses: { numReview: 10, responseRate: "---" },
          averageScore: "4.5",
        },
        last6Months: {
          averageScore: "4.5",
        },
        questions: [
          {
            direction: "higher",
            color: "green",
          },
          {
            direction: "lower",
            color: "red",
          },
          {
            direction: "equal",
            color: "green",
          },
        ],
      
      },
      {
        serviceName: "Service D",
        parentName: "Parent 3",
        thisPeriod: {
          responses: { numReview: 10, responseRate: "---" },
          averageScore: "4.5",
        },
        last6Months: {
          averageScore: "4.5",
        },
        questions: [
          {
            direction: "higher",
            color: "green",
          },
          {
            direction: "lower",
            color: "red",
          },
          {
            direction: "equal",
            color: "green",
          },
        ],
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
