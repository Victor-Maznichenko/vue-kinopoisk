import type { Meta, StoryObj } from "@storybook/vue3-vite";
import Avatar from "./index.vue";

const meta: Meta<typeof Avatar> = {
  title: "UI-KIT/Avatar",
  component: Avatar,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ['circle', 'square'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Example: Story = {
  args: {
    variant: 'square',
  },
};


// export const OutlineWhiteIcon: Story = {
//   args: {
//     variant: "outline-white-icon",
//     default: "Outline White",
//   },
// };

