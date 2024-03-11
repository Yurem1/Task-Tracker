import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Task Tracker',
  description: 'Create, update, and delete tasks.',
};

interface IRootLayout {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: IRootLayout) {

  const classes = `h-screen overflow-auto ${inter.className}`;

  return (
    <html lang="en">
      <body className={classes}>
        <div className='h-full px-12 py-4'>
          {children}
        </div>
      </body>
    </html>
  );
}
