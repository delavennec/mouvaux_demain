import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Leaf, Calculator, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/60 to-blue-800/70 z-10" />
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Équipe Mouvaux Demain"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Un vote ambitieux et constructif pour Mouvaux
          </h1>
          <div className="flex flex-col items-center justify-center bg-blue-600/90 px-6 py-3 rounded-lg mb-8 inline-block">
            <p className="text-lg md:text-xl font-medium">Pour un cadre de vie serein et agréable</p>
          </div>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg mx-auto">
            <Link href="/contact">Je soutiens Mouvaux Demain</Link>
          </Button>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Nos priorités pour Mouvaux</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Sécurité</h3>
                <p className="text-gray-600 mb-4">
                  Renforcement des effectifs de police municipale et mise en place de dispositifs de vidéoprotection.
                </p>
                <Link
                  href="/programme#securite"
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
                >
                  En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Écologie</h3>
                <p className="text-gray-600 mb-4">
                  Transition écologique pragmatique avec développement des énergies renouvelables locales.
                </p>
                <Link
                  href="/programme#ecologie"
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
                >
                  En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <Calculator className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Budget</h3>
                <p className="text-gray-600 mb-4">
                  Gestion budgétaire responsable sans augmentation des impôts locaux.
                </p>
                <Link
                  href="/programme#budget"
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700"
                >
                  En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Primary CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Suivez notre campagne au quotidien</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Recevez en exclusivité nos propositions, invitations aux événements et actualités de campagne directement
            dans votre boîte mail.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterForm 
              buttonText="Je m'inscris"
              buttonClassName="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 font-semibold"
              inputClassName="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500"
              messageClassName="text-blue-100"
              layout="row"
            />
            <p className="text-blue-100 text-sm mt-3">✓ Pas de spam • ✓ Désinscription facile • ✓ Données protégées</p>
          </div>
        </div>
      </section>

      {/* News Teaser */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Actualités</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-lg mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">Samedi 05 juillet 2025 (18h00)</div>
                <h3 className="text-lg font-semibold mb-3">Réunion publique – Apéro républicain</h3>
                <p className="text-gray-600 text-sm">
                  Salle Courcol, Mouvaux
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Secondary */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ne ratez aucune actualité</h2>
          <p className="text-lg text-gray-600 mb-8">
            Rejoignez les <strong>500+ habitants</strong> qui suivent déjà notre campagne par email.
          </p>
          <div className="flex justify-center max-w-lg mx-auto">
            <NewsletterForm 
              buttonText="Rejoindre"
              buttonClassName="bg-blue-600 hover:bg-blue-700 px-6 py-3"
              inputClassName="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900"
              messageClassName="text-gray-600 mt-2"
              layout="row"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
