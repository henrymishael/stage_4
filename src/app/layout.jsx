import './globals.css'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Henry Onyekachukwu Mishael | FrontEnd Developer',
  description: 'My portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='!smooth-scroll'>
      <body className={open_sans.className}>{children}</body>
    </html>
  )
}
