import Form from './form';

import { userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/Form',
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Add any props you want to pass to the Form component here
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const nameInput = canvas.getByTestId('name-input');
    await userEvent.type(nameInput, 'Randal Wang', {
      delay: 100,
    });
  },
};
