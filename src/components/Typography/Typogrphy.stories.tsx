import type { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';

const meta = {
  title: 'Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
  },
};

export const H1: Story = {
  args: {
    children: 'Text',
    variant: 'h1',
  },
};

export const H2: Story = {
  args: {
    children: 'Text',
    variant: 'h2',
  },
};

export const H3: Story = {
  args: {
    children: 'Text',
    variant: 'h3',
  },
};

export const Body1: Story = {
  args: {
    children: 'Text',
    variant: 'body1',
  },
};
