import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nailmuse-discover.sparrowteamsorg.chatgpt.site'),
  title: 'NailMuse — Nail Art, Beautifully Discovered',
  description: 'Discover, filter, and save the nail-art trends shaping your next manicure.',
  openGraph: {
    title: 'NailMuse — Nail Art, Beautifully Discovered',
    description: 'Discover, filter, and save the nail-art trends shaping your next manicure.',
    images: [{ url: '/og.png', width: 1536, height: 911, alt: 'NailMuse nail art discovery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NailMuse — Nail Art, Beautifully Discovered',
    description: 'Discover, filter, and save the nail-art trends shaping your next manicure.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}>{children}</body></html>;
}
