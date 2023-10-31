import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Share me!',
  description: 'App to share your social links!'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" >
      <body>{children}</body>
    </html>
  )
}
