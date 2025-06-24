import type { Metadata } from 'next';
import { Inter, Montserrat, Roboto } from 'next/font/google';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Desa Bawu',
  description: 'Permata Alam di Ujung Utara Boyolali',
  keywords: [
    'Desa Bawu',
    'Boyolali',
    'Website Desa',
    'Pemerintah Desa Bawu',
    'Kecamatan Kemusu',
    'Kemusu',
    'Bawu',
  ],
  authors: [{ name: 'KKN Desa Bawu 2025', url: 'https://desabawu.site' }],
  metadataBase: new URL('https://desabawu.site'),
  openGraph: {
    title: 'Desa Bawu',
    description: 'Permata Alam di Ujung Utara Boyolali',
    url: 'https://desabawu.site',
    siteName: 'Desa Bawu',
    images: [
      {
        url: '/metadata/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Logo Desa Bawu',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desa Bawu',
    description: 'Permata Alam di Ujung Utara Boyolali',
    images: ['/metadata/android-chrome-512x512.png'],
  },
  icons: {
    icon: ['/metadata/favicon.ico?v=4'],
    apple: ['/metadata/apple-touch-icon.png?v=4'],
  },
  manifest: '/metadata/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} ${roboto.variable} antialiased font-montserrat bg-background`}
        suppressHydrationWarning
      >
        <main>{children}</main>

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'GovernmentOrganization',
            name: 'Desa Bawu',
            url: 'https://desabawu.site',
            logo: 'https://desabawu.site/metadata/logo.png',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Boyolali',
              addressRegion: 'Jawa Tengah',
              addressCountry: 'Indonesia',
            },
            description: 'Website resmi Desa Bawu, Boyolali.',
          })}
        </script>
      </body>
    </html>
  );
}
