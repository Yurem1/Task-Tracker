import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: 'Task Tracker - Tasks',
  description: 'View, create, or update your tasks.',
};

interface IRootLayout {
  children: Readonly<React.ReactNode>
}

export default function RootLayout({ children }: IRootLayout) {
  
  const classes = 'h-full';

  return (
    <section className={classes}>
      {children}
    </section>
  );
}