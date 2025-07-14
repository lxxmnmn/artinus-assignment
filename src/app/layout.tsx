import { ReactNode } from 'react';
import localFont from 'next/font/local';
import { Providers } from '@/app/providers';

import type { Metadata } from 'next';

import './globals.css';

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ARTINUS Frontend Assignment',
  description: 'by Minjeong Lee',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
