import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import Footer from '@/components/layout/Footer';
import Loader from '@/components/layout/Loader';
import Navbar from '@/components/layout/Navbar';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

import './globals.css';

const poppins = Poppins({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Jhon Angelo Bustarde — Software Engineer',
  description: 'Software Engineer specializing in Web Development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={cn(poppins.variable)}>
      <body className='bg-background font-sans antialiased'>
        <Loader />
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
