import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: 'Task Tracker - Sign-Up',
  description: 'Sign up for a new account.',
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