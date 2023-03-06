import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',
    padding: '0 $4',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: "$2",

    cursor: 'pointer',

    svg: {
        width: '$4',
        height: '$4',
    }, 

    '&:disabled': {
        cursor: 'not-allowed'
    },

    '&:focus': {
        boxShadow: '0 0 0 2px $colors$gray100',
    },

    variants: {
        variant :{
            primary: {
                color: '$black',
                backgroundColor: '$iToddy500',

                '&:not(:disabled):hover': {
                    backgroundColor: '$iToddy300'
                },

                '&:disabled': {
                    backgroundColor: '$gray200',
                }
            },
            secondary: {
                color: '$iToddy300',
                border: '2px solid $iToddy500',

                
                '&:not(:disabled):hover': {
                    backgroundColor: '$iToddy500',
                    color: '$black'
                },

                '&:disabled': {
                    backgroundColor: '$gray200',
                    borderColor: '$gray200',
                }
            },
            tertiary: {
                color: "$white",

                '&:not(:disabled):hover': {
                    color: '$white'
                },
                
                '&:disabled': {
                    color: '$gray100',
                }
            },
        },

        size: {
            sm: {
                height: 32
            },
            md: {
                height: 46
            }
        },
    },

    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
})

export interface ButtonProps extends ComponentProps<typeof Button>{
    as?: ElementType
}

Button.displayName = 'Button'