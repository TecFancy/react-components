import { Anki } from '../../';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Anki/FrontSide',
  component: Anki.FrontSide,
  argTypes: {},
} satisfies Meta<typeof Anki.FrontSide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightMode: Story = {};
export const NightMode: Story = {
  args: {
    night_mode: true,
  },
};
