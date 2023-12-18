import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import { Inter } from 'next/font/google'
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

const comfortaa = Comfortaa({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portal AirShare',
  description: 'Portal para clientes da AirShare',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={comfortaa.className}>
        <Menu />
        <main className='mt-5'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
