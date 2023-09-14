import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight:'500',
 })

export const metadata: Metadata = {
  title: 'AFA Benadressa',
  description: 'Asociación de Familias del CEIP Benadressa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={montserrat.className} >{children}</body>
    </html>
  )
}
