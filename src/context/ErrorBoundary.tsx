'use client'

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ReactErrorBoundary
      fallback={
        <div className='rounded bg-red-300 p-4 text-red-700'>
          Coś poszło nie tak. Spróbuj odświeżyć stronę.
        </div>
      }
    >
      {children}
    </ReactErrorBoundary>
  )
}

export default ErrorBoundary
