// component imports
import { Button } from '../../';

// functions import
import request from '../../../mocks/request';

// type imports
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'General/Button',
  component: Button,
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    type: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    type: 'secondary',
  },
};

export const Warning: Story = {
  args: {
    label: 'Delete',
    type: 'warning',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'large',
  },
};

export const Medium: Story = {
  args: {
    label: 'Button',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};

/**
 * This story demonstrates how to use the `onClick` function to make a request to the server.
 */
export const LoginButton: Story = {
  args: {
    label: 'Login',
    type: 'primary',
    onClick: async () => {
      try {
        const response = await request.get('/example/login');
        console.log('Login successful:', response.data);
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
  },
};
