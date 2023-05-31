import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@all-for-art/react'
import { ArrowRight } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children: 'Send',
        variant: 'primary',
        size: 'md',
        disabled: false
    },
    argType: {
        variant: {
            options: ['primary', 'primaryBorder', 'secondary', 'secondaryBorder'],
            controls: {
                type: 'inline-radio',
            },
        },
        size: {
            options: ['sm', 'md'],
            controls: {
                type: 'inline-radio',
            },
        },
        disabled: {
            control: {
                type: 'boolean'
            },
        },
        onClick: { action: 'click' },
    },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const PrimaryBorder: StoryObj<ButtonProps> = {
  args: {
    variant: 'primaryBorder',
    children: 'Create new',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Cancel',
  },
}

export const SecondaryBorder: StoryObj<ButtonProps> = {
    args: {
      variant: 'secondaryBorder',
      children: 'Cancel',
    },
  }

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}