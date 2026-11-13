import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JeanPhilippe Tourigny',
  description:
    'Couturier français installé entre Marrakech et Paris. Collections diffusion, pièces couture, caftans et créations sur mesure.',
  keywords: [
    'JeanPhilippe Tourigny',
    'Jean-Philippe Tourigny',
    'couture',
    'couturier français',
    'Marrakech',
    'Paris',
    'caftan marocain',
    'caftan contemporain',
    'gandoura contemporaine',
    'artisanat marocain',
    'création sur mesure',
  ],
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
     
<body className={`${inter.className} flex min-h-screen flex-col bg-[#EEE7DF]`}>
  <div className="flex-1">
    {children}
  </div>

  <footer className="w-full bg-[#EEE7DF] px-6 py-5 text-center">
    <p className="text-[11px] tracking-[0.12em] text-[#77716C]">
      © {new Date().getFullYear()} JeanPhilippe Tourigny — Tous droits réservés
    </p>
  </footer>
</body>

    </html>
  )
}
