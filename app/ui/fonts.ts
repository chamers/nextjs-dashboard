import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], display: 'swap' });
export const lusitana = Lusitana({
  weight: ['400', '700'], // optional, defaults to ['400'] Tailwind font-bold
  subsets: ['latin'],
  display: 'swap',
});
