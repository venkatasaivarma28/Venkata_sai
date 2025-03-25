import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/components/providers/ThemeProvider'
import { LanguageProvider } from '@/app/components/providers/LanguageProvider'
import Footer from './components/sections/Footer'
import ScrollToTop from './components/ui/ScrollToTop'
import { getImagePath } from '@/utils/imagePath'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sri Gudibandi - Software Engineer',
  description: 'Welcome to my portfolio! I am a software engineer with a passion for building web applications and solving complex problems.',
  icons: {
    icon: [
      {
        url: getImagePath('/favicon/favicon-32x32.png'),
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: getImagePath('/favicon/favicon-16x16.png'),
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: {
      url: getImagePath('/favicon/apple-touch-icon.png'),
      sizes: '180x180',
      type: 'image/png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href={getImagePath('/favicon/site.webmanifest')} />
        <link rel="icon" href={getImagePath('/favicon/favicon.ico')} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Footer />
            <ScrollToTop />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}