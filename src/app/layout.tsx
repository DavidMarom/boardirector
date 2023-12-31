"use client";
import { Inter } from 'next/font/google'
import { Header } from '@/components'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import { PopupProvider } from '@/services/popupProvider'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PopupProvider />
        <div className="layout">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
