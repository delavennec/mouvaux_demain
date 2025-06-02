import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"

const events = [
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
  {
    date: "25 Mai 2025",
    time: "10h00",
    title: "Marché de Mouvaux - Stand d'information",
    description: "Venez nous rencontrer sur notre stand au marché hebdomadaire pour échanger en toute convivialité.",
    location: "Place du marché",
    type: "Stand",
  },
  {
    date: "29 Mai 2025",
    time: "20h00",
    title: "Réunion publique - Quartier Résidentiel",
    description: "Focus sur les enjeux du quartier résidentiel : espaces verts, circulation et qualité de vie.",
    location: "École primaire Jean Jaurès",
    type: "Réunion publique",
  },
  {
    date: "1 Juin 2025",
    time: "16h00",
    title: "Rencontre avec les commerçants",
    description: "Échanges sur le soutien au dynamisme économique local et aux commerces de proximité.",
    location: "Centre commercial Les Prés",
    type: "Rencontre",
  },
]

export default function AgendaPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Agenda de campagne</h1>
          <p className="text-xl text-gray-600">Retrouvez tous nos événements et rencontres publiques</p>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Date and Time */}
                  <div className="md:w-48 flex-shrink-0">
                    <div className="bg-emerald-50 rounded-lg p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Calendar className="w-5 h-5 text-emerald-600 mr-2" />
                        <span className="font-semibold text-emerald-600">{event.date}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 text-emerald-600 mr-2" />
                        <span className="text-emerald-600">{event.time}</span>
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
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

        {/* CTA Section */}
        <div className="text-center mt-12 bg-emerald-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Participez à notre campagne</h2>
          <p className="text-gray-600 mb-6">
            Votre présence et vos questions enrichissent nos échanges. Tous nos événements sont ouverts à tous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/association">Rejoindre l'association</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
