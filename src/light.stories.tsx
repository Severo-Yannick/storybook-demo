import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Light',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' }
    }
  }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {}

export const Yellow: Story = {
  args: {
    variant: 'yellow'
  }
}


export const Red: Story = {
  args: {
    variant: 'red'
  }
}

export const Grouped: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, borderRadius: 3, width: 'max-content', padding: 10, backgroundColor: 'lightgray' }}>
      <Light variant="green" />
      <Light variant="yellow" />
      <Light variant="red" />
    </div>
  )
}
