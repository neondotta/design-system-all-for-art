import { styled } from "../styles"
import { ComponentProps, ElementType } from "react"

export const Button = styled('button', {
    all: 'unset',
    bortderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizinh: 'border-box',
    padding: '0 $4',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',

    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4',
    },

    '&:disabled': {
        cursor: 'not-allowed',
    },

    variants: {
        variant: {
            primary: {
                color: '$white',
                backgroundColor: '$redMain',
                border: '2px solid $colors$redMain',

                '&:not(:disabled):hover': {
                    backgroundColor: '$red200',
                    border: '2px solid $colors$red200',
                },
        
                '&:disabled': {
                    backgroundColor: '$gray200',
                    border: '2px solid $colors$gray200',
                },
            },

            primaryBorder: {
                color: '$redMain',
                backgroundColor: 'transparent',
                border: '2px solid $colors$redMain',

                '&:not(:disabled):hover': {
                    backgroundColor: '$red200',
                    border: '2px solid $colors$red200',
                },
        
                '&:disabled': {
                    backgroundColor: '$gray200',
                    border: '2px solid $colors$gray200',
                },
            },

            secondary: {
                color: '$white',
                backgroundColor: '$greenMain',
                border: '2px solid $colors$greenMain',

                '&:not(:disabled):hover': {
                    color: '$green300',
                    border: '2px solid $colors$green300',
                },
        
                '&:disabled': {
                    color: '$gray200',
                    border: '2px solid $colors$gray200',
                },
            },

            secondaryBorder: {
                color: '$greenMain',
                backgroundColor: 'transparent',
                border: '2px solid $colors$greenMain',

                '&:not(:disabled):hover': {
                    color: '$green300',
                    border: '2px solid $colors$green300',
                },
        
                '&:disabled': {
                    color: '$gray200',
                    border: '2px solid $colors$gray200',
                },
            },
        },

        size: {
            sm: {
                height: 38,
            },
        
            md: {
                height: 46,
            },
        },
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md',
    },
}) 

export interface ButtonProps extends ComponentProps<typeof Button> {
    as?: ElementType
}