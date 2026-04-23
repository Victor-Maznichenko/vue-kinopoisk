import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Button from "./index.vue";

const meta: Meta<typeof Button> = {
  title: "UI-KIT/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ['filled-red', 'outline-white-icon', 'outline-white', 'text', 'unstyled'],
    },
    default: {
      control: "text",
      description: "Текст кнопки (slot)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ExampleDefault: Story = {
  args: {
    variant: "filled-red",
    default: "Кнопка",
  },
};

export const ExampleIcon: Story = {
  args: {
    variant: "filled-red",
    default: "Кнопка",
  },
};

// export const OutlineWhiteIcon: Story = {
//   args: {
//     variant: "outline-white-icon",
//     default: "Outline White",
//   },
// };

