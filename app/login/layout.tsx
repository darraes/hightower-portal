import { comfortaa } from '../globals'
import Footer from "../components/Footer";
import Meta from '../components/Meta'

import 'bootstrap/dist/css/bootstrap.css'
import '../globals.css'

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
