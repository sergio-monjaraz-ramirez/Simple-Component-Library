import type { Meta, StoryObj } from "@storybook/vue3";
import { ReviewComponent } from "../components";

const meta: Meta<typeof ReviewComponent> = {
  title: "Components/Combined/Review",
  component: ReviewComponent,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    creationDate: { control: "text" },
    textQuestion: { control: "object" },
    patientName: { control: "text" },
    location: { control: "object" },
    speciality: { control: "object" },
    stars: { control: "object" },
    experienceValue: { control: "number" },
  },
  args: {
    creationDate: "20 of September 2024",
    textQuestion: [{ friendlyName: '1 Paragraph',  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolor '}],
    patientName: "John Doe",
    location: { friendlyName: "Hospital", value: "New York" },
    speciality: { friendlyName: "Dentist", value: "Endodontics" },
    experienceValue: 5,
    stars: [
      { friendlyName: "Recommend", value: 5 },
      { friendlyName: "Trust", value: 4 },
      { friendlyName: "Listening", value: 3 },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
