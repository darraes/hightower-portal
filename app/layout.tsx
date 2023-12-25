import type { Metadata } from 'next'
import { comfortaa } from './globals'
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Meta from './components/Meta'

import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

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
