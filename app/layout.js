import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home Based Food	',
  description: 'A Complete Solution For Home Based Food',
}

import NavBar from '@/components/navbar'



export default function RootLayout({ children }) {
  return (
    <html lang="en" className=''>
      <body className={inter.className}>
      <NavBar/>
        {children}
        </body>
    </html>
  )
}
