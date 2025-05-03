import { Anki } from '../../';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Anki/BackSide',
  component: Anki.BackSide,
  argTypes: {},
} satisfies Meta<typeof Anki.BackSide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightMode: Story = {};
export const NightMode: Story = {
  args: {
    night_mode: true,
  },
};
