import { Anki } from '../../';
import type { Meta, StoryObj } from '@storybook/react';

const data = {
  word: 'example',
  phonetic: '/ɪɡˈzɑːmpl/',
  meaning: '例子，实例',
  example: 'This is an example sentence.',
  exampleZh: '这是一个例句。',
  phraseCollocation: '词组搭配内容',
  specialTransformation: '特殊变形内容',
  derive: '派生内容',
  synonym: '近义词内容',
  antonym: '反义词内容',
  originalText: '原文内容',
  tags: 'NCE::Lesson19',
  side: 'back',
  nightMode: 'false',
};

const meta = {
  title: 'Anki/FrontSide',
  component: Anki.FrontSide,
  args: { data },
} satisfies Meta<typeof Anki.FrontSide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightMode: Story = {};
export const NightMode: Story = {
  args: {
    data: {
      ...data,
      nightMode: 'true',
    },
  },
};
