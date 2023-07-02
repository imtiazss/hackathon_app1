import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
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
    <html lang="en" className=' bg-myWhite'>
      <body className={inter.className} >
        <div className='max-w-[95%] mx-auto'>
        <Navbar/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  )
}
