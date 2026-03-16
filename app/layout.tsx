import type { Metadata } from 'next';
import { Bebas_Neue, Barlow } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const barlow = Barlow({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Extreecon Engineering Company Limited',
  description:
    'Leading engineering company in Kenya specializing in Building, Water, and Road Engineering Works since 2013.',
  keywords: 'engineering, construction, Kenya, Nairobi, Mombasa, building, roads, water',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
