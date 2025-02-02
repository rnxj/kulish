import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

import './globals.css';

const centuryGothic = localFont({
  src: './fonts/centurygothic.ttf',
  variable: '--font-century-gothic',
});

const centuryGothicBold = localFont({
  src: './fonts/centurygothic_bold.ttf',
  variable: '--font-century-gothic-bold',
});

const candara = localFont({
  src: './fonts/candara.ttf',
  variable: '--font-candara',
});

const pmingliu = localFont({
  src: './fonts/pmingliu.ttf',
  variable: '--font-pmingliu',
});

export const metadata: Metadata = {
  title: 'The Kulish School',
  description: 'The Kulish School',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${centuryGothic.variable} ${centuryGothicBold.variable} ${candara.variable} ${pmingliu.variable} antialiased`}
      >
        <Navbar />
        <main className='font-[family-name:var(--font-century-gothic)]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
