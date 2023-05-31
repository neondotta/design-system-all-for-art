import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
    padding: '$6',
    borderRadius: '$md',
    backgroundColor: '$white',
    border: '1px solid $redMain',
})

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType
}