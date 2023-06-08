import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, fireEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Form } from "./Form";

const meta = {
  title: "Example/Form",
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button", {
      name: /submit/i,
    });
    await userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("cursor: not-allowed");
    expect(button).toHaveStyle("background-color: rgb(105, 105, 105)");
  },
};

export const ValidInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Retrieving the inputUsername element by its aria-label attribute
    const inputUsername = canvas.getByLabelText('Username') as HTMLInputElement;
    fireEvent.change(inputUsername, { target: { value: 'john_doe' } });
    expect(inputUsername.value).toBe('john_doe');
    const inputPassword = canvas.getByLabelText('Password') as HTMLInputElement;
    fireEvent.change(inputPassword, { target: { value: '$johnPassWORD' } })
  },
};
