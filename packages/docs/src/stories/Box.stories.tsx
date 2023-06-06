import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@all-for-art/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <p>Testando o elemento Box</p>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
