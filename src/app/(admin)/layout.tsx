import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '../globals.css';

const centuryGothic = localFont({
  src: '../fonts/centurygothic.ttf',
  variable: '--font-century-gothic',
});

const centuryGothicBold = localFont({
  src: '../fonts/centurygothic_bold.ttf',
  variable: '--font-century-gothic-bold',
});

const candara = localFont({
  src: '../fonts/candara.ttf',
  variable: '--font-candara',
});

const pmingliu = localFont({
  src: '../fonts/pmingliu.ttf',
  variable: '--font-pmingliu',
});

export const metadata: Metadata = {
  title: 'Admin Dashboard - The Kulish School',
  description: 'Admin Dashboard for The Kulish School',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${centuryGothic.variable} ${centuryGothicBold.variable} ${candara.variable} ${pmingliu.variable} antialiased`}
      >
        <div className="font-[family-name:var(--font-century-gothic)]">
          {children}
        </div>
      </body>
    </html>
  );
} 