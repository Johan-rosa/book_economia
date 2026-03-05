import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://empirica.do'),
  title: 'Introducción a la Economía: Una visión desde la República Dominicana | Fundación Empírica',
  description:
    'Introducción a la Economía con ejemplos apegados al contexto y la historia económica de la República Dominicana. Por Fundación Empírica.',
  openGraph: {
    title: 'Introducción a la Economía | Fundación Empírica',
    description:
      'El primer libro de economía con ejemplos apegados al contexto y la historia económica de la República Dominicana.',
    url: 'https://empirica.do',
    siteName: 'Fundación Empírica',
    images: [{ url: '/images/logo-empirica.png', alt: 'Fundación Empírica' }],
    locale: 'es_DO',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Introducción a la Economía | Fundación Empírica',
    description:
      'El primer libro de economía con ejemplos apegados al contexto y la historia económica de la República Dominicana.',
    images: ['/images/logo-empirica.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a3a5c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_inter.variable} ${_dmSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
