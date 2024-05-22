import type { Preview } from "@storybook/react";

import '../src/styles/index.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewMode: 'docs',
    options: {
      storySort: {
        order: [],
      },
    },
  },
};

export default preview;
