import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteTitle = 'Lucky Bear Casino | Официальный Сайт Казино'
const siteDescription = 'Лаки Бир Казино - надежное онлайн казино с широким выбором игр. Зеркало сайта, официальный доступ, быстрые выплаты и щедрые бонусы для новых игроков.'

export const metadata: Metadata = {
  metadataBase: new URL('https://luckybear18casino.vercel.app'),
  title: siteTitle,
  description: siteDescription,
  generator: 'v0.app',
  keywords: [
    'lucky bear casino',
    'luckybear casino',
    'lucky bear казино',
    'lucky bear casino зеркало',
    'lucky bear casino официальный',
    'lucky bear casino официальный сайт',
    'lucky bear казино',
    'лаки бир казино',
    'лаки бир казино зеркало',
    'лаки бир казино онлайн',
    'лаки бир казино официальный',
    'лаки бир казино официальный сайт',
    'лаки бир казино сайт',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://luckybear18casino.vercel.app/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://luckybear18casino.vercel.app',
    title: siteTitle,
    description: siteDescription,
    siteName: 'Lucky Bear Casino',
    images: [
      {
        url: 'https://luckybear18casino.vercel.app/luckybear-casino-art.png',
        width: 1200,
        height: 630,
        alt: 'Lucky Bear Casino',
      },
    ],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="canonical" href="https://luckybear18casino.vercel.app/" />
        <link rel="alternate" hrefLang="ru" href="https://luckybear18casino.vercel.app/" />
        <meta name="distribution" content="global" />
        <meta name="language" content="Russian" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
