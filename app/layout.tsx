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
  keywords: 'AI, SMS, Kenya, Safaricom, Airtel, chatbot',
  openGraph: {
    title: 'Semai - Your AI Assistant Via SMS',
    description: 'Chat with AI on any phone in Kenya. No app needed, no internet required.',
    image: '/og-image.png',
    url: 'https://semai.vercel.app',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    image: '/og-image.png',
    title: 'Semai - Your AI Assistant Via SMS',
    description: 'Chat with AI on any phone in Kenya. No app needed, no internet required.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
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
