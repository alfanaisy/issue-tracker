import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css';
import { Container, Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Theme appearance="light" accentColor="violet">
          <Navbar />
          <main className="p-5">
            <Container>{children}</Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
