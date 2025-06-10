import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterPopup } from "@/components/newsletter-popup"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mouvaux Demain - Charles Delavenne",
  description: "Un vote ambitieux et constructif pour Mouvaux. Pour un cadre de vie serein et agréable.",
  keywords: "Mouvaux, Charles Delavenne, élections, municipales, écologie, sécurité, budget",
  openGraph: {
    title: "Mouvaux Demain - Charles Delavenne",
    description: "Un vote ambitieux et constructif pour Mouvaux. Pour un cadre de vie serein et agréable.",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <NewsletterPopup />
        <ScrollToTop />
      </body>
    </html>
  )
}
