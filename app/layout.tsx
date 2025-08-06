import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Duria - Premium Durian Export & Lifestyle Brand',
  description: 'Experience the finest quality durians from Southeast Asia. Duria specializes in premium durian export, bringing authentic flavors worldwide with exceptional quality and service.',
  keywords: 'durian, premium durian, durian export, Musang King, D24, Southeast Asia, premium fruits',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}