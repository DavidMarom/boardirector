"use client";
import { Inter } from 'next/font/google'
import { Header } from '@/components'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div className="layout">

        <body className={inter.className}>
          <Header />
          {children}</body>
      </div>
    </html>
  )
}
