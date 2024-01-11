import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SK1PPI | Solana Interact With Wallets',
  description: 'This app is a part of the Solana Development Course by James Pacheco and others. It contains the code for the first module of the bootcamp, which is about interacting wallets on the Solana Network.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
