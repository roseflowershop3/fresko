import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '[PLATFORM NAME] — Research-Driven Websites for Real Businesses',
  description:
    'We research your market, study your competitors, and build a website that actually works for your business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} style={{ backgroundColor: '#FFF8F2' }}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
