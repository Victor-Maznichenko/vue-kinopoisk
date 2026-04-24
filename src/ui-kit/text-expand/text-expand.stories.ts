import type { Meta, StoryObj } from "@storybook/vue3-vite";
import TextExpand from "./index.vue";

const meta: Meta<typeof TextExpand> = {
  title: "UI-KIT/TextExpand",
  component: TextExpand,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof TextExpand>;

export const ExampleDefault: Story = {
  args: {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere neque obcaecati itaque tempore veritatis voluptatum, fugit minus dignissimos consectetur iusto quaerat unde dolorem repellendus quidem dolorum odit, placeat iure deserunt. Libero distinctio accusantium quas! Vero ratione cupiditate repudiandae impedit tenetur? Sapiente maiores deleniti, illum eaque omnis iste laborum praesentium ducimus, consequuntur, laudantium tenetur minima doloremque provident fuga nam architecto temporibus. Error, non ducimus ut neque earum sit facilis ratione molestias et, corrupti mollitia blanditiis, tempora explicabo obcaecati ex. Iste magnam cum quas sequi. Maiores obcaecati rem tempora perspiciatis praesentium aliquid! Debitis consequuntur in, corporis quo sint incidunt maxime hic dolore repudiandae tempora recusandae nobis dolorum odit? Consectetur temporibus, ullam exercitationem ipsum sed voluptatum cum ex suscipit eligendi, deserunt quo eos.",
    maxLength: 50
  },
};


// export const OutlineWhiteIcon: Story = {
//   args: {
//     variant: "outline-white-icon",
//     default: "Outline White",
//   },
// };

