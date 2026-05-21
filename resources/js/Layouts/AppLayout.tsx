import { ReactNode } from 'react'
import Navbar from '../src/components/layout/Navbar'
import Footer from '../src/components/layout/Footer'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7FFF9] dark:bg-[#060C0A]">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
