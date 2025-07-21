import { ReactNode } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import CalcomFloatingButton from './CalcomFloatingButton'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <CalcomFloatingButton />
    </div>
  )
}