import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nailart.bookmylook.co'),
  title: {
    default: 'Nail Art Designs UK: 2026 Trends | NailMuse',
    template: '%s | NailMuse UK',
  },
  description: 'Explore trending nail art designs in the UK for 2026. Find autumn colours, short nail ideas and salon-ready briefs, updated every week.',
  keywords: [
    'nail art designs',
    'nail art design',
    'nail art new design',
    'beginners nail art designs',
    'new nail arts designs',
    'rainbow nail art designs',
    'nail art design new',
    'easy nail art designs for toenails',
    'newest nail art designs',
    'new designs of nail art',
    'nail art designs UK',
    'nail trends 2026',
  ],
  alternates: { canonical: 'https://nailart.bookmylook.co' },
  category: 'beauty',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://nailart.bookmylook.co',
    siteName: 'NailMuse by BookMyLook',
    title: 'Nail Art Designs UK: 2026 Trends | NailMuse',
    description: 'Explore the nail colours, short designs and salon-ready manicure ideas trending across the UK, updated weekly.',
    images: [{ url: '/og.png', width: 1536, height: 911, alt: 'NailMuse UK nail art trends' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nail Art Designs UK: 2026 Trends | NailMuse',
    description: 'Explore current UK nail colours, short designs and salon-ready manicure ideas, updated weekly.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body className={montserrat.variable}>{children}</body></html>;
}
