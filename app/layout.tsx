import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { Lexend, Urbanist } from 'next/font/google';
import { Metadata, Viewport } from 'next';


const lexend = Lexend({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  preload: true,
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
});

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  preload: true,
  weight: ['400', '500', '600', '700'],
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'DIPPER Lab',
    template: '%s | DIPPER Lab',
  },
  description: 'Distributed IoT Platforms, Privacy, and Edge-Intelligence Research Lab',
  keywords: ['IoT', 'blockchain', 'artificial intelligence', 'research', 'technology', 'edge intelligence'],
  authors: [{ name: 'DIPPER Lab Team' }],
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={` ${lexend.variable} ${urbanist.variable}`}>
      <Analytics />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
