import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';

// Site metadata for SEO
export const metadata: Metadata = {
  title: 'Nishant Kumar Maurya | Software Engineer & Full Stack Developer',
  description:
    'Professional portfolio of Nishant Kumar Maurya. Full-stack developer specializing in web applications, problem-solving, and modern technologies.',
  keywords: [
    'Portfolio',
    'Developer',
    'Full Stack',
    'Software Engineer',
    'Web Developer',
    'JavaScript',
    'React',
    'Next.js',
  ],
  authors: [{ name: 'Nishant Kumar Maurya' }],
  creator: 'Nishant Kumar Maurya',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nkinloop.dev',
    siteName: 'Nishant Kumar Maurya Portfolio',
    title: 'Nishant Kumar Maurya | Software Engineer & Full Stack Developer',
    description:
      'Professional portfolio showcasing full-stack development projects and expertise.',
    images: [
      {
        url: 'https://nkinloop.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nishant Kumar Maurya | Software Engineer',
    description: 'Professional portfolio of a full-stack developer',
    creator: '@nkinloop',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

/**
 * RootLayout Component
 * Provides the main layout wrapper for all pages
 * Includes global styles and metadata
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--bg)] text-slate-100 antialiased">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
