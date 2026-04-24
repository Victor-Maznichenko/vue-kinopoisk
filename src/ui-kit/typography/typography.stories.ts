import type { Meta, StoryObj } from '@storybook/vue3-vite';
import Typography from './index.vue';

const meta = {
  title: 'UI-KIT/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'heading-1',
        'heading-2',
        'heading-3',
        'heading-4',
        'heading-5',
        'heading-6',
        'text-m',
        'text-s',
      ],
      description: 'Стиль типографики',
    },
    as: {
      control: 'text',
      description: 'HTML-тег для рендера (например, h1, p, span)',
    },
    accentColor: {
      control: 'boolean',
      description: 'Специальный цвет текста.',
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => ({
    components: { Typography },
    template: `
      <div style="display:flex; flex-direction:column; gap:16px; align-items:flex-start;">
        <Typography variant="heading-1">Heading 1 (72px)</Typography>
        <Typography variant="heading-2">Heading 2 (48px)</Typography>
        <Typography variant="heading-3">Heading 3 (32px)</Typography>
        <Typography variant="heading-4">Heading 4 (24px)</Typography>
        <Typography variant="heading-5">Heading 5 (20px)</Typography>
        <Typography variant="heading-6">Heading 6 (18px)</Typography>
        <Typography variant="text-m">Text medium (16px) — обычный текст</Typography>
        <Typography variant="text-s">Text small (14px) — маленький текст</Typography>
      </div>
    `,
  }),
};
