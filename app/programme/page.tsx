"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Shield, Calculator, Leaf, Building2, Briefcase, Users, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const engagements = [
  {
    id: "securite",
    title: "Restaurer l'autorité républicaine et garantir la sécurité locale",
    icon: Shield,
    points: [
      "Renforcement des effectifs de la police municipale et amélioration de leurs équipements",
      "Mise en place de dispositifs de vidéoprotection dans les zones sensibles",
      "Développement de partenariats avec les forces de sécurité nationales pour des actions coordonnées",
    ],
  },
  {
    id: "budget",
    title: "Assurer une gestion budgétaire responsable",
    icon: Calculator,
    points: [
      "Élaboration d'un budget communal équilibré, sans augmentation des impôts locaux",
      "Optimisation des dépenses publiques par une évaluation rigoureuse des services municipaux",
      "Recherche de financements alternatifs, notamment via des partenariats public-privé",
    ],
  },
  {
    id: "ecologie",
    title: "Promouvoir une transition écologique pragmatique",
    icon: Leaf,
    points: [
      "Développement de projets d'énergies renouvelables à l'échelle locale",
      "Soutien à la rénovation énergétique des bâtiments publics et incitation pour les particuliers",
      "Aménagement d'espaces verts et promotion de la biodiversité urbaine",
    ],
  },
  {
    id: "services",
    title: "Renforcer les services publics de proximité",
    icon: Building2,
    points: [
      "Amélioration de l'accès aux soins par le soutien à l'installation de professionnels de santé",
      "Modernisation des infrastructures scolaires et périscolaires",
      "Développement de services numériques pour faciliter les démarches administratives",
    ],
  },
  {
    id: "economie",
    title: "Soutenir le dynamisme économique local",
    icon: Briefcase,
    points: [
      "Création de zones d'activités pour attirer les entreprises et créer des emplois",
      "Soutien aux commerces de proximité et aux initiatives entrepreneuriales locales",
      "Organisation régulière de forums économiques pour favoriser les échanges entre acteurs locaux",
    ],
  },
  {
    id: "participation",
    title: "Favoriser la participation citoyenne",
    icon: Users,
    points: [
      "Mise en place de conseils de quartier pour une démocratie participative renforcée",
      "Organisation de consultations publiques sur les projets majeurs de la commune",
      "Transparence dans la gestion municipale avec des comptes rendus accessibles à tous",
    ],
  },
]

export default function ProgrammePage() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nos engagements pour Mouvaux</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six priorités pour construire ensemble un avenir responsable, écologique et républicain pour notre commune.
          </p>
        </div>

        {/* Engagements */}
        <div className="space-y-6 mb-12">
          {engagements.map((engagement) => {
            const Icon = engagement.icon
            const isOpen = openItems.includes(engagement.id)

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
                <Collapsible open={isOpen} onOpenChange={() => toggleItem(engagement.id)}>
                  <CollapsibleTrigger className="w-full">
                    <CardContent className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={iconContainerClass}>
                            <Icon className={iconClass} />
                          </div>
                          <h2 className="text-xl font-semibold text-left text-gray-900">{engagement.title}</h2>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                    </CardContent>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="px-6 pb-6 pt-0">
                      <div className="ml-16">
                        <ul className="space-y-3">
                          {engagement.points.map((point, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
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
                Chaque semaine, nous détaillons une de nos propositions avec des exemples concrets et des témoignages
                d'habitants. Inscrivez-vous pour tout savoir !
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                  />
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">Je veux tout savoir</Button>
                </div>
                <p className="text-blue-100 text-sm mt-3">Déjà 300+ inscrits • Contenu exclusif chaque semaine</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Soutenez notre projet pour Mouvaux</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Ensemble, construisons une commune plus sûre, plus verte et plus dynamique. Votre soutien est essentiel pour
            porter ces engagements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Je soutiens Mouvaux Demain</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/association">En savoir plus sur l'association</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
