import { fn } from '@storybook/test';

import { Button } from '../../';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Custom/Button',
    component: Button,
    parameters: {
        layout: 'center',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: 'Button',
        children: 'Button',
    },
};
