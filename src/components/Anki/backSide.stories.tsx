import { Anki } from '../../';
import { waitFor } from '@storybook/testing-library';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Anki/BackSide',
  component: Anki.BackSide,
  parameters: {
    // 可以设置默认参数
    postMessageData: {
      wordInfo: {
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
      },
    },
  },
  argTypes: {
    night_mode: { control: 'boolean' },
  },
} satisfies Meta<typeof Anki.BackSide>;

export default meta;

type Story = StoryObj<typeof meta>;

const play = async ({ parameters }) => {
  // 在这里发送 postMessage
  const messageData = parameters.postMessageData;

  // 等待组件渲染完成
  await waitFor(() => {
    // 发送消息
    window.postMessage(messageData, '*');
  });

  // 可以添加断言来验证消息处理
  // const canvas = within(canvasElement);
  // await waitFor(() => {
  //   expect(canvas.getByText(messageData.wordInfo.word)).toBeInTheDocument();
  // });
};

export const LightMode: Story = {
  play,
};
export const NightMode: Story = {
  args: {
    night_mode: true,
  },
  play,
};
