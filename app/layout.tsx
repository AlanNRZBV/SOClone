import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';
import './globals.css';
import React, { FC } from 'react';
import { Inter, Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';
import theme from 'tailwindcss/defaultTheme';
import ThemeProvider from '@/context/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ],
  variable: '--font-inter',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk',
});

export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'A StackOverflow clone made for educational purposes',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => (
  <ClerkProvider
    appearance={{
      elements: {
        fontButtonPrimary: 'primary-gradient',
        footerActionLink: 'primary-test-gradient hover:text-primary-500',
      },
    }}
  >
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
);
export default RootLayout;
