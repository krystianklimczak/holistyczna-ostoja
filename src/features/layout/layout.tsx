'use client'

import { Footer, Topbar } from './components'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Topbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
