import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://estateflow.luxury'),
  title: {
    default: 'EstateFlow | Ultra-Luxury Real Estate & Private Advisory',
    template: '%s | EstateFlow Luxury',
  },
  description: 'Premier advisory firm for luxury architectural estates, off-market penthouses, and waterfront acquisitions in Beverly Hills, Miami, and London.',
  keywords: ['Real Estate', 'Luxury Estates', 'Bel Air Villas', 'Penthouse', 'Off-Market Properties', 'Architectural Homes'],
  openGraph: {
    title: 'EstateFlow | Premier Ultra-Luxury Real Estate',
    description: 'Exclusive portfolio of world-class architectural estates and private off-market listings.',
    url: 'https://estateflow.luxury',
    siteName: 'EstateFlow Advisory',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EstateFlow Ultra-Luxury Real Estate',
    description: 'Bespoke real estate acquisitions and off-market architectural estates.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0f0f0f] text-[#f0ece3] antialiased selection:bg-[#8B6914] selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
