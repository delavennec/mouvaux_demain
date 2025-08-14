"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Calculator, Leaf, Building2, Briefcase, Users } from "lucide-react"
import Link from "next/link"

import { NewsletterForm } from "@/components/newsletter-form"

const engagements = [
  {
    id: "securite",
    title: "Renforcer et garantir la sécurité du quotidien dans tous les quartiers",
    icon: Shield,
    points: [
      "Renforcement des effectifs de la police municipale et amélioration de leurs équipements",
      "Mise en place de dispositifs de vidéoprotection dans les zones sensibles",
      "Développement de partenariats avec les forces de sécurité nationales pour des actions coordonnées",
    ],
  },
  {
    id: "cadre-vie",
    title: "Améliorer le cadre de vie",
    icon: Leaf,
    points: [
      "Aménagement d'espaces verts et promotion de la biodiversité urbaine",
      "Entretien et valorisation des espaces publics",
      "Actions pour la propreté et l'embellissement de la commune",
    ],
  },
  {
    id: "economie",
    title: "Soutenir le dynamisme commercial et restaurer l'attractivité économique locale",
    icon: Briefcase,
    points: [
      "Soutien aux commerces de proximité et aux initiatives entrepreneuriales locales",
      "Redynamiser et développer la zone d'activité économique pour attirer les entreprises et créer des emplois",
      "Organisation régulière de forums économiques pour favoriser les échanges entre acteurs locaux",
    ],
  },
  {
    id: "familles",
    title: "Accompagner nos aînés, nos jeunes et les familles",
    icon: Users,
    points: [
      "Développement de services et activités adaptés aux besoins des seniors",
      "Amélioration des dispositifs d’accompagnement et de soutien aux familles",
      "Création d'espaces et d'animations dédiés à la jeunesse",
    ],
  },
  {
    id: "education",
    title: "Assurer la qualité de la vie scolaire et des modes d'accueil de la petite enfance",
    icon: Building2,
    points: [
      "Modernisation des infrastructures scolaires et périscolaires",
      "Développement des capacités d'accueil pour la petite enfance",
      "Soutien aux projets éducatifs et périscolaires",
    ],
  },
  {
    id: "culture",
    title: "Redynamiser la vie culturelle et soutenir le tissu associatif",
    icon: Calculator,
    points: [
      "Organisation d'événements culturels diversifiés et accessibles à tous",
      "Soutien financier et logistique aux associations locales",
      "Développement des espaces dédiés aux activités culturelles et associatives",
    ],
  },
  {
    id: "services",
    title: "Préserver et conforter les services publics de proximité",
    icon: Building2,
    points: [
      "Mise en place d’expérimentations pour faciliter l’accès aux services publics",
      "Développement et formation aux services numériques pour faciliter les démarches administratives",
      "Optimisation des ressources existantes afin d’améliorer l’accès aux services de proximité",
    ],
  },
  {
    id: "participation",
    title: "Favoriser la participation citoyenne",
    icon: Users,
    points: [
      "Engager une véritable concertation avec des conseils de quartier réellement autonomes pour une démocratie participative renforcée",
      "Organisation de consultations publiques sur les projets majeurs de la commune",
      "Transparence dans la gestion municipale avec des comptes rendus accessibles à tous",
    ],
  },
]

export default function ProgrammePage() {

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nos engagements pour Mouvaux</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos priorités pour construire ensemble un avenir responsable, écologique et républicain pour notre commune.
          </p>
        </div>

        {/* Engagements */}
        <div className="space-y-6 mb-12">
          {engagements.map((engagement) => {
            const Icon = engagement.icon

            let iconContainerClass = "w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
            let iconClass = "w-6 h-6 text-blue-600"

            switch (engagement.id) {
              case "budget":
                iconContainerClass = "w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center"
                iconClass = "w-6 h-6 text-orange-600"
                break
              case "ecologie":
                iconContainerClass = "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"
                iconClass = "w-6 h-6 text-green-600"
                break
              case "services":
                iconContainerClass = "w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center"
                iconClass = "w-6 h-6 text-purple-600"
                break
              case "economie":
                iconContainerClass = "w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center"
                iconClass = "w-6 h-6 text-indigo-600"
                break
              case "participation":
                iconContainerClass = "w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center"
                iconClass = "w-6 h-6 text-rose-600"
                break
            }

            return (
              <Card key={engagement.id} id={engagement.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={iconContainerClass}>
                      <Icon className={iconClass} />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-left text-gray-900 mb-3">{engagement.title}</h2>
                      <ul className="space-y-3">
                        {engagement.points.map((point, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Newsletter Signup - Programme */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Recevez le détail de nos propositions</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Tout au long de la campagne, nous détaillerons nos propositions avec des exemples concrets et des témoignages de Mouvallois. Inscrivez-vous pour tout savoir !
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm 
                  buttonText="Je souhaite être informé"
                  buttonClassName="bg-white text-blue-600 hover:bg-gray-100"
                  inputClassName="flex-1 px-4 py-3 rounded-lg text-gray-900"
                  messageClassName="text-blue-100 text-sm mt-2"
                  layout="row"
                />
                <p className="text-blue-100 text-sm mt-3">Déjà 300+ inscrits • Des infos exclusives régulièrementne</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Soutenez notre projet pour Mouvaux</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Ensemble, construisons une commune plus sûre, plus agréable, plus dynamique. Votre soutien est essentiel pour porter ces engagements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Soutenir Renouveau pour Mouvaux</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/association">En savoir plus sur Renouveau pour Mouvaux</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
