import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
    backgroundColor: '$gray800',
    borderRadius: '$md',
    boxShadow: '0px 0px 0px 2px $colors$redMain',
    color: '$white',
    padding: '$2 0',
})

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}