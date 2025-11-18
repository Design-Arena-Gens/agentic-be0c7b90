import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Great Rodriguez Hunt',
  description: 'Searching for information about the mysterious musician Rodriguez',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
