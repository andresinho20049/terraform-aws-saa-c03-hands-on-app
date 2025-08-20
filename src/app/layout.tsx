import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../context/theme-context';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AWS SAA-C03 Hands-On App',
  description:
    'A hands-on application for AWS Certified Solutions Architect - Associate (SAA-C03) exam preparation',
  keywords: [
    'AWS',
    'SAA-C03',
    'Solutions Architect',
    'Hands-On',
    'Certification',
    'Cloud Computing',
    'DevOps',
    'Terraform',
    'andresinho20049',
  ],
  authors: [
    { name: 'Andresinho20049', url: 'https://github.com/andresinho20049' },
  ],
  creator: 'Andresinho20049',
  publisher: 'Andresinho20049',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
