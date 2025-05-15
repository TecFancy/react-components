import { Anki } from '../../';
import type { Meta, StoryObj } from '@storybook/react';

const data = {
  word: 'good turn deserves another',
  phonetic: '/ɪɡˈzɑːmpl/',
  meaning: '例子，实例',
  example: 'This is an <b>example</b> sentence. This is an example sentence.',
  exampleZh: '这是一个例句。这是一个例句。这是一个例句。这是一个例句。',
  phraseCollocation:
    '<b>feel upset</b>：感到心烦意乱、不安，文中 “I felt very upset” 就是这种用法，表示 “我感到非常不安”。<br><strong>example</strong>: example example',
  specialTransformation:
    '<ol><li><b>example</b>: example example</li><li><strong>example</strong>: example example</li></ol>',
  derive:
    '派生内容<br>example sentence  例句xx<br>example text  示例文本，示例文本，示例文本，示例文本<br>example sentence  例句',
  synonym: '近义词内容',
  antonym: '反义词内容',
  originalText:
    'Aeroplanes are slowly driving me mad. I live near an airport and passing planes can be heard night and day. The airport was built years ago, but for some reason it could not be used then. Last year, however, it came into use. Over a hundred people must have been driven away from their homes by the noise. I am one of the few people left. Sometimes I think this house will be knocked down by a passing plane. I have been offered a large sum of money to go away, but I am determined to stay here. Everybody says I must be mad and they are probably right.',
  tags: 'NCE::Lesson19',
  side: 'back',
  nightMode: 'false',
};

const meta = {
  title: 'Anki/BackSide',
  component: Anki.BackSide,
  args: { data },
} satisfies Meta<typeof Anki.BackSide>;

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
