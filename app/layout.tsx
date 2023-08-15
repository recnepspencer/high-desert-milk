import './globals.css'
import { Inter } from 'next/font/google'
import NavMenu from './NavMenu'
import {Roboto_Slab} from 'next/font/google'
import Home from './page'
import Footer from './footer'
const rslab = Roboto_Slab({
  subsets: ['latin'],
  variable: '--rslab'
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='box-border'>
      <body className={`${rslab.className} overflow-x-hidden`}>
        <NavMenu/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
