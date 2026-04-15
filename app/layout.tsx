import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: 'Semai - Your AI Assistant Via SMS',
  description: 'Chat with AI on any phone in Kenya. No app needed, no internet required. Just text semai to 20880 from Safaricom or Airtel.',
  generator: 'v0.app',
  openGraph: {
    image: '/semai-logo.png',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`bg-background ${inter.className}`}
      style={{
        '--font-poppins': poppins.style.fontFamily,
      } as React.CSSProperties}
    >
      <body className="font-body antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
