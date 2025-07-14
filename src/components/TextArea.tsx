'use client'

import React, { forwardRef } from 'react'
import {
  createTheme,
  Textarea as FlowTextarea,
  ThemeProvider,
} from 'flowbite-react'
import type { FieldError } from 'react-hook-form'

const textareaTheme = createTheme({
  textarea: {
    base: 'block w-full rounded-lg border p-2 !text-base leading-normal ',
    colors: {
      gray: '!bg-black/10 !text-black !border-black/10 focus:outline-none focus:ring-0 focus:border-transparent',
      failure:
        'bg-red-50 !text-red-600 border border-red-500 placeholder-red-700 focus:border-red-500 focus:ring-red-500 focus:outline-none focus:ring-0',
      success:
        'bg-green-50 text-green-900 border border-green-500 placeholder-green-700 focus:border-green-500 focus:ring-green-500 focus:outline-none focus:ring-0',
    },
  },
})

type TextareaProps = {
  name: string
  placeholder?: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  error?: FieldError
  errorMessage?: string
  valueState?: string
  disabled?: boolean
  className?: string
  rows?: number
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      name,
      placeholder,
      icon,
      error,
      errorMessage,
      valueState,
      disabled,
      className,
      rows = 4,
      ...rest
    },
    ref
  ) => {
    const hasError = !!(error || errorMessage)
    const hasValue = !!valueState?.trim()
    const color = hasError ? 'failure' : hasValue ? 'success' : 'gray'

    return (
      <div className='relative'>
        <ThemeProvider theme={textareaTheme}>
          {icon && (
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-start pt-2 pl-2'>
              {React.createElement(icon, {
                className: 'h-5 w-5 text-gray-400',
              })}
            </div>
          )}

          <FlowTextarea
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            color={color}
            rows={rows}
            ref={ref}
            className={`${icon ? 'pl-10' : ''} ${className}`}
            {...rest}
          />
          {errorMessage && (
            <p className='absolute mt-1 text-xs leading-normal font-extralight text-red-600'>
              {errorMessage}
            </p>
          )}
        </ThemeProvider>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
