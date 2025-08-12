import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'


export const metadata: Metadata = {
  title: 'Adam Clark Logistics',
  description:
    'Adam Clark Logistics offers professional freight forwarding, supply chain management, and transport services. We provide reliable, cost-effective, and timely delivery solutions worldwide.',
  keywords: [
    'Adam Clark Logistics',
    'freight forwarding',
    'logistics company',
    'transport solutions',
    'supply chain management',
    'shipping services',
    'international transport',
  ],
  authors: [{ name: 'Adam Clark Logistics Team', url: 'https://adamclarklogistics.com' }],
  generator: 'Next.js',
  applicationName: 'Adam Clark Logistics',
  referrer: 'origin-when-cross-origin',
  creator: 'Adam Clark Logistics',
  publisher: 'Adam Clark Logistics',
  metadataBase: new URL('https://adamclarklogistics.com'),
  alternates: {
    canonical: 'https://adamclarklogistics.com',
  },
  openGraph: {
    title: 'Adam Clark Logistics | Reliable Freight & Transport Solutions',
    description:
      'Professional freight forwarding, supply chain management, and worldwide shipping solutions.',
    url: 'https://adamclarklogistics.com',
    siteName: 'Adam Clark Logistics',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Adam Clark Logistics - Global Freight & Transport Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adam Clark Logistics | Freight & Transport Solutions',
    description:
      'Worldwide freight forwarding, shipping, and supply chain management services.',
    images: ['/og-image.jpg'],
    creator: '@adamclarklogistics',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
