import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://simone.dev'),
  applicationName: 'Simone Borin Portfolio',
  title: {
    default: 'Simone Borin | Sviluppatore Freelance',
    template: '%s | Simone Borin',
  },
  description:
    'Portfolio di Simone Borin: sviluppo web, AI e automazioni, SEO, UI/UX, dashboard e gestionali su misura.',
  keywords: [
    'Simone Borin',
    'sviluppatore freelance',
    'web development',
    'AI automazioni',
    'SEO',
    'UI UX',
    'dashboard',
    'gestionali',
    'Next.js',
    'React',
  ],
  authors: [{ name: 'Simone Borin', url: 'https://simone.dev' }],
  creator: 'Simone Borin',
  publisher: 'Simone Borin',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://simone.dev',
    siteName: 'Simone Borin Portfolio',
    title: 'Simone Borin | Sviluppatore Freelance',
    description:
      'Sviluppo siti e web app moderne, automazioni AI, SEO e interfacce orientate ai risultati.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simone Borin | Sviluppatore Freelance',
    description: 'Web development, AI/automazioni, SEO, UI/UX, dashboard e gestionali.',
    creator: '@simoneborin',
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
      <body>{children}</body>
    </html>
  );
}
