import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { siteDescription, siteTitle, siteUrl, socialImage } from './site-config';
import StructuredData from './structured-data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'Simone Borin Portfolio',
  title: {
    default: siteTitle,
    template: '%s | Simone Borin',
  },
  description: siteDescription,
  authors: [{ name: 'Simone Borin', url: siteUrl }],
  creator: 'Simone Borin',
  publisher: 'Simone Borin',
  category: 'technology',
  alternates: {
    canonical: siteUrl,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: siteUrl,
    siteName: 'Simone Borin Portfolio',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: 'Simone Borin — Siti web su misura, design e sviluppo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#090c13',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <StructuredData />
        <noscript>
          <style>{`
            .fade-in, .scale-in { opacity: 1 !important; transform: none !important; }
            #hero-title [aria-hidden="true"] { visibility: visible !important; }
          `}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
