import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./button";

const meta = {
    title: "Custom/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "button",
        children: "Button",
        onClick: fn(),
    },
};
