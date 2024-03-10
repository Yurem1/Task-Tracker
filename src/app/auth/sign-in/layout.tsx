import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: 'Task Tracker - Sign-In',
  description: 'Sign in to your account.',
};

interface IRootLayout {
  children: Readonly<React.ReactNode>
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <section>
      {children}
    </section>
  );
}