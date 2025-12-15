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
    default: 'SIWA - Smart Indigenous Weather App',
    template: '%s | SIWA',
  },
  description: 'SIWA combines traditional ecological knowledge with AI to provide climate-smart weather forecasting for Ghanaian farmers.',
  keywords: [ 'SIWA', 'Smart Indigenous Weather App', 'Climate Resilience', 'Agriculture', 'Ghana', 'Weather Forecasting', 'AI', 'Indigenous Knowledge', 'Smallholder Farmers' ],
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
