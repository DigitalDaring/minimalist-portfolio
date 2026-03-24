import type { Metadata } from 'next';
import './globals.css';
import { Chakra_Petch } from 'next/font/google'
import setupWindowBackgrounds from './sourcery/canvas-magic/window-setup';

declare global {
  interface Window { 
    backgrounds: {
      dithered1: string,
      dithered2: string,
      dithered3: string,
      dithered4: string,
      lines: string
    },
    icons: {
      folder: string
    }
  }
}

setupWindowBackgrounds();

const chakraPetch = Chakra_Petch({
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Edmund Bates Portfolio',
  description: 'LoFi aesthetic',
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
        <canvas id='spriteMap' width='400px' height='400px' className='letsNotShowThis'/>
        <canvas id='dithering1' width='20px' height='20px' className='letsNotShowThis'/>
        <canvas id='dithering2' width='16px' height='16px' className='letsNotShowThis'/>
        <canvas id='dithering3' width='16px' height='16px' className='letsNotShowThis'/>
        <canvas id='dithering4' width='16px' height='16px' className='letsNotShowThis'/>
        <canvas id='lines' width='20px' height='20px' className='letsNotShowThis'/>
      </body>
    </html>
  );
}
