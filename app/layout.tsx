import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Chakra_Petch } from 'next/font/google'

const chakraPetch = Chakra_Petch({
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${chakraPetch.className}`}>
        {children}
        <canvas id='dithering' width='20px' height='20px' className='letsNotShowThis'/>
        <canvas id='lines' width='20px' height='20px' className='letsNotShowThis'/>
      </body>
    </html>
  );
}
