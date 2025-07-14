'use client'

import React, { forwardRef } from 'react'
import { createTheme, TextInput, ThemeProvider } from 'flowbite-react'
import type { FieldError } from 'react-hook-form'

const inputTheme = createTheme({
  textInput: {
    base: 'flex',
    field: {
      base: 'relative w-full',
      icon: {
        base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center p-2',
      },
      input: {
        base: 'block w-full rounded-lg border',
        sizes: {
          md: 'p-2 !text-base leading-none',
        },
        colors: {
          gray: '!bg-black/10 !text-black !border-black/10 focus:outline-none focus:ring-0 focus:border-transparent',
          failure:
            'bg-red-50 !text-red-600 border border-red-500 placeholder-red-700 focus:border-red-500 focus:ring-red-500 focus:outline-none focus:ring-0',
          success:
            'bg-green-50 text-green-900 border border-green-500 placeholder-green-700 focus:border-green-500 focus:ring-green-500 focus:outline-none focus:ring-0',
        },
      },
    },
  },
})

type InputProps = {
  name: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  error?: FieldError
  errorMessage?: string
  valueState?: string
  disabled?: boolean
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      type,
      icon,
      placeholder,
      error,
      errorMessage,
      valueState,
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    const hasError = !!(error || errorMessage)
    const hasValue = !!valueState?.trim()

    const color = hasError ? 'failure' : hasValue ? 'success' : 'gray'

    return (
      <div className='relative'>
        <ThemeProvider theme={inputTheme}>
          <TextInput
            name={name}
            type={type}
            icon={icon}
            placeholder={placeholder}
            disabled={disabled}
            color={color}
            sizing='md'
            ref={ref}
            className={className}
            {...rest}
          />
          {errorMessage && (
            <p className='absolute text-xs leading-normal font-extralight text-red-600'>
              {errorMessage}
            </p>
          )}
        </ThemeProvider>
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
