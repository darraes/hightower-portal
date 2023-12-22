import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import { Inter } from 'next/font/google'
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Meta from './components/Meta'

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
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" />
      <body className={comfortaa.className}>
        <Menu />
        <Meta title="AirShare" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
