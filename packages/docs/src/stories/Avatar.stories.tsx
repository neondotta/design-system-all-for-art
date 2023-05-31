import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from "@all-for-art/react"

export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/neondotta.png',
        alt: 'Neon Dotta',
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            }
        },
    },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
}

