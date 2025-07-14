'use client'

import React from 'react'
import {
  Button as FlowButton,
  ThemeProvider,
  createTheme,
  Spinner,
} from 'flowbite-react'
import clsx from 'clsx'

const buttonTheme = createTheme({
  button: {
    base: 'relative flex items-center justify-center rounded-lg cursor-pointer text-center',
    disabled: 'pointer-events-none opacity-50 ',
    color: {
      primary:
        'text-black bg-accent border-none hover:bg-amber-200 focus:outline-none focus:ring-0 focus:border-transparent',
    },
    size: {
      md: 'text-2xl p-2 h-12',
    },
  },
})

type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit'
  color?: 'primary' | 'danger' | 'success' | 'gray'
  size?: 'md' | 'lg' | 'xl'
  disabled?: boolean
  isLoading?: boolean
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  type = 'button',
  color = 'primary',
  size,
  disabled = false,
  isLoading = false,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <ThemeProvider theme={buttonTheme}>
      <FlowButton
        type={type}
        color={color}
        size={size}
        disabled={disabled || isLoading}
        className={clsx('inline-flex items-center gap-2', className)}
        {...rest}
      >
        {isLoading ? <Spinner size='md' /> : null}
        {children}
      </FlowButton>
    </ThemeProvider>
  )
}

export default Button
