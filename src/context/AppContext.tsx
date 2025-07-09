'use client'

import { Suspense } from 'react'
import { SnackbarProvider } from 'notistack'
import { ErrorBoundary } from '.'

const AppContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Ładowanie aplikacji...</p>}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={5000}
        >
          {children}
        </SnackbarProvider>
      </Suspense>
    </ErrorBoundary>
  )
}

export default AppContext
