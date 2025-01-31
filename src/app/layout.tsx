import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootLayoutClient from '../components/RootLayoutClient';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ImportTrace - AI Video Shorts Generator',
  description: 'Transform your long videos into viral shorts with AI-powered technology',
  keywords: 'video editing, AI, shorts, viral content, social media',
  authors: [{ name: 'ImportTrace' }],
  openGraph: {
    title: 'ImportTrace - AI Video Shorts Generator',
    description: 'Transform your long videos into viral shorts with AI-powered technology',
    type: 'website',
    locale: 'en_US',
    siteName: 'ImportTrace',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ImportTrace - AI Video Shorts Generator',
    description: 'Transform your long videos into viral shorts with AI-powered technology',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
