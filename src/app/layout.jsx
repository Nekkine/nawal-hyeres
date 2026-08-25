import { Poppins, Playfair_Display } from 'next/font/google'
import FloatingActions from '@/components/FloatingActions'
import CookieBanner from '@/components/CookieBanner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { buildClothingStoreSchema } from '@/lib/schema'
import { siteConfig, contact, seo } from '@/lib/site'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: contact.merchantName }],
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: seo.defaultTitle,
    description: seo.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.defaultTitle,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F8F4EC' },
    { media: '(prefers-color-scheme: dark)', color: '#211D19' },
  ],
}

const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d){document.documentElement.classList.add("dark")}}catch(e){}})()`

const jsonLd = buildClothingStoreSchema()

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${poppins.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col overflow-x-clip">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingActions />
        <CookieBanner />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
