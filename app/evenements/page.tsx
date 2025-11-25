import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Mail } from "lucide-react"
import Link from "next/link"

// Main event data
const mainEvent = {
  date: "12 Septembre 2025",
  time: "18h30",
  title: "Réunion publique",
  description: "Retrouvez-nous le vendredi 12 septembre à 18h30 à la salle Courcol pour la première réunion publique de « Renouveau pour Mouvaux », suivie d'un verre de l'amitié. Ce sera l'occasion de présenter notre candidat Charles Delavenne et l'équipe « Renouveau pour Mouvaux » et d'échanger avec les Mouvallois sur les principaux axes de notre campagne.",
  location: "Salle Courcol, 29 rue Gallieni, 59420 Mouvaux",
  contact: "RenouveauPourMouvaux@gmail.com",
  type: "Réunion publique",
},
  {
  date: "17 Novembre 2025",
  time: "18h30",
  title: "Réunion publique",
  description: "Retrouvez-nous le lundi 17 septembre à 18h30 à la salle Courcol pour la deuxième réunion publique de « Renouveau pour Mouvaux », suivie d'un verre de l'amitié. Les Mouvallois et Mouvalloises ont eu l'occasion d'émettre leurs suggestions pour la ville et d'échanger avec le candidat Charles Delavenne. Nous avons également annoncé le lancement d'ateliers thématiques, visant à rassembler les habitants pour discuter des enjeux de notre ville, en particulier sur les thèmes de la sécurité, l'urbanisation, la culture, les seniors et l'éducation.",
  location: "Salle Courcol, 29 rue Gallieni, 59420 Mouvaux",
  contact: "RenouveauMouvaux@gmail.com",
  type: "Réunion publique",
}

// Keeping the events array for future events
const futureEvents = [
  {
    date: "15 Mai 2025",
    time: "19h00",
    title: "Réunion publique - Quartier Centre",
    description:
      "Échanges sur nos propositions pour améliorer la sécurité et les services de proximité dans le quartier centre de Mouvaux.",
    location: "Salle des fêtes, Mairie de Mouvaux",
    type: "Réunion publique",
  },
  {
    date: "18 Mai 2025",
    time: "14h00",
    title: "Atelier participatif - Transition écologique",
    description:
      "Construisons ensemble les solutions pour une Mouvaux plus verte et durable. Venez partager vos idées et propositions.",
    location: "Centre culturel Jacques Brel",
    type: "Atelier",
  },
  {
    date: "22 Mai 2025",
    time: "18h30",
    title: "Rencontre avec les associations",
    description:
      "Dialogue avec les acteurs associatifs locaux sur la vie culturelle, sportive et sociale de notre commune.",
    location: "Maison des associations",
    type: "Rencontre",
  },
]

export default function EvenementsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Événements</h1>
          <p className="text-xl text-gray-600">Retrouvez nos prochains rendez-vous et venez échanger avec nous</p>
        </div>

        {/* Main Event Highlight */}
        <div className="mb-12">
          <Card className="hover:shadow-lg transition-shadow border-2 border-blue-500">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Date and Time */}
                <div className="md:w-48 flex-shrink-0">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-blue-600">{mainEvent.date}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-blue-600">{mainEvent.time}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                      {mainEvent.type}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{mainEvent.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{mainEvent.description}</p>
                  <div className="flex items-center text-gray-500 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{mainEvent.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Mail className="w-4 h-4 mr-2" />
                    <span className="text-sm">Pour tout renseignement : {mainEvent.contact}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Future Events List - Hidden for now, will be displayed when needed */}
        {/* <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Événements à venir</h2>
          <div className="space-y-6">
            {futureEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-48 flex-shrink-0">
                      <div className="bg-blue-50 rounded-lg p-4 text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="font-semibold text-blue-600">{event.date}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <Clock className="w-4 h-4 text-blue-600 mr-2" />
                          <span className="text-blue-600">{event.time}</span>
                        </div>
                      </div>
                      <div className="mt-2 text-center">
                        <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{event.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="text-center mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Participez à notre campagne</h2>
          <p className="text-gray-600 mb-6">
            Votre présence et vos questions enrichissent nos échanges. Tous nos événements sont ouverts à tous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/association">Rejoindre Renouveau pour Mouvaux</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
