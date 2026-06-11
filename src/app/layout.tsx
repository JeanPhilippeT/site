import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JeanPhilippe Tourigny',
  description: 'Couturier Français installé entre Marrakech et Paris. Collections diffusion, creations Couture, caftans, gandouras et creations sur-mesure.',
  keywords: 'couture, couture artisanale, fashion, mode, luxury, atelier, fusion, Marrakech, Paris, Caftans, caftan marocain, gandouras, robes du soir, robes cocktail, tenues d'exceptions, collections diffusion, prêt-a-porter, couturier, designer, JeanPhilippe Tourigny, Tourigny Couture.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
