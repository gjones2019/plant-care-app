import type { Meta, StoryObj } from '@storybook/react';
import Home from '../pages/index'

const meta: Meta<typeof Home> = {
  component: Home,
};

export default meta;

type Story = StoryObj<typeof Home>;

export const HomePage: Story = {
  parameters: {
    docs: {
      page: Home
    }
  },
};