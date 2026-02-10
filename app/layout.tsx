import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { NewsletterPopup } from "../components/newsletter-popup"
import { NewsletterProvider } from "../components/newsletter-context"
import { ScrollToTop } from "../components/scroll-to-top"
import { CookieConsent } from "../components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Renouveau pour Mouvaux  - Charles Delavenne",
  description: "Un vote ambitieux et constructif pour Mouvaux. Pour une ville sûre, attractive, dynamique et agréable.",
  keywords: "Mouvaux, Charles Delavenne, élections, municipales, écologie, sécurité, budget",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/favicon.png', sizes: '180x180' },
  },
  openGraph: {
    title: "Renouveau pour Mouvaux  - Charles Delavenne",
    description: "Un vote ambitieux et constructif pour Mouvaux. Pour une ville sûre, attractive, dynamique et agréable.",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <NewsletterProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <NewsletterPopup />
          <ScrollToTop />
          <CookieConsent />
        </NewsletterProvider>
      </body>
    </html>
  )
}
