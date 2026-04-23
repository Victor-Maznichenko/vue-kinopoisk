import type { Preview } from '@storybook/vue3-vite';
import darkTheme from './dark-theme';
import '../src/common/styles/index.scss';

const preview: Preview = {
  parameters: {
    docs: {
      theme: darkTheme
    }
  }
};

export default preview;