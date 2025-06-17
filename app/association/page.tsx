import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Palette, Building, Shield, Heart, Leaf, Download, MapPin } from "lucide-react"
import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

const objectifs = [
  {
    title: "Éducation",
    icon: GraduationCap,
    description: "Promouvoir l'excellence éducative et l'épanouissement de tous les enfants",
  },
  {
    title: "Culture",
    icon: Palette,
    description: "Développer l'offre culturelle et soutenir les initiatives artistiques locales",
  },
  {
    title: "Développement économique",
    icon: Building,
    description: "Favoriser l'attractivité économique et l'emploi sur le territoire",
  },
  {
    title: "Sécurité",
    icon: Shield,
    description: "Garantir la tranquillité publique et le bien-vivre ensemble",
  },
  {
    title: "Solidarité",
    icon: Heart,
    description: "Renforcer les liens sociaux et l'entraide entre les habitants",
  },
  {
    title: "Écologie",
    icon: Leaf,
    description: "Préserver l'environnement et promouvoir le développement durable",
  },
]

export default function AssociationPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Mouvaux Demain</h1>
          <p className="text-xl text-blue-600 font-medium">L'association au service de notre territoire</p>
        </div>

        {/* Présentation */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 border-blue-200">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Notre mission</h2>
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  <strong>Mouvaux Demain</strong> est une association loi 1901 créée pour réfléchir et agir en faveur
                  d'un développement durable et harmonieux de notre commune.
                </p>
                <p>
                  Notre association rassemble des citoyens engagés qui partagent une vision commune : construire
                  ensemble l'avenir de Mouvaux dans le respect des valeurs républicaines et de l'intérêt général.
                </p>
                <p>
                  Nous croyons en la force du dialogue, de la participation citoyenne et de l'action collective pour
                  relever les défis de notre territoire.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Objectifs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Nos domaines d'action</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectifs.map((objectif) => {
              const Icon = objectif.icon
              let bgColor = "bg-blue-100"
              let textColor = "text-blue-600"

              if (objectif.title === "Culture") {
                bgColor = "bg-purple-100"
                textColor = "text-purple-600"
              } else if (objectif.title === "Développement économique") {
                bgColor = "bg-indigo-100"
                textColor = "text-indigo-600"
              } else if (objectif.title === "Sécurité") {
                bgColor = "bg-orange-100"
                textColor = "text-orange-600"
              } else if (objectif.title === "Solidarité") {
                bgColor = "bg-rose-100"
                textColor = "text-rose-600"
              } else if (objectif.title === "Écologie") {
                bgColor = "bg-green-100"
                textColor = "text-green-600"
              }

              return (
                <Card key={objectif.title} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 ${textColor}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{objectif.title}</h3>
                    <p className="text-gray-600">{objectif.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Statuts et adhésion */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Documents officiels</h3>
                <p className="text-gray-600 mb-6">
                  Consultez nos statuts pour en savoir plus sur le fonctionnement et les objectifs de l'association.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger les statuts (PDF)
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Nous soutenir</h3>
                <p className="text-gray-600 mb-6">
                  Participez activement au projet politique de Mouvaux Demain et soutenez notre démarche citoyenne.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact">Nous contacter</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Siège social */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                    Siège social
                  </h3>
                  <div className="text-lg text-gray-700 space-y-2">
                    <p>
                      <strong>Mouvaux Demain</strong>
                    </p>
                    <p>137, rue Faidherbe</p>
                    <p>59420 Mouvaux</p>
                  </div>
                  <div className="mt-6">
                    <Button variant="outline">Voir sur la carte</Button>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-500">Carte interactive</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA final */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ensemble, construisons Mouvaux Demain</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Votre engagement et vos idées sont précieux pour enrichir notre projet. Rejoignez une communauté de citoyens
            actifs et responsables.
          </p>

          {/* Newsletter signup */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 max-w-lg mx-auto border-2 border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">📧 Newsletter de l'association</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Recevez nos comptes-rendus d'activités et invitations aux événements
            </p>
            <NewsletterForm 
              buttonText="S'inscrire"
              buttonClassName="bg-blue-600 hover:bg-blue-700"
              inputClassName="flex-1 px-3 py-2 rounded border border-gray-300 text-sm"
              messageClassName="text-sm mt-2"
              layout="row"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/programme">Découvrir notre programme</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
