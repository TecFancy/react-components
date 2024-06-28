import { initialize, mswLoader } from 'msw-storybook-addon';

import handlers from '../mocks';

import type { Preview } from '@storybook/react';

import '../src/styles/index.scss';

initialize();

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: { handlers },
  },
  tags: ['autodocs'],
  loaders: [mswLoader],
};

export default preview;
