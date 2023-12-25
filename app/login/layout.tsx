import { Comfortaa } from 'next/font/google'
import { Inter } from 'next/font/google'
import Footer from "../components/Footer";
import Meta from '../components/Meta'

import 'bootstrap/dist/css/bootstrap.css'
import '../globals.css'

const comfortaa = Comfortaa({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" />
      <body className={comfortaa.className}>
        <Meta title="AirShare" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
