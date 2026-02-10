import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import EventCard from "@/components/event-card"
import { mainEvent, secondMainEvent, ateliersOverview, atelierEvents, futureEvents } from "@/lib/events"
import { filterFutureEvents, sortEventsByDate } from "@/lib/utils"

// Main event data moved to lib/events

// `EventCard` helper moved to `components/event-card.tsx`

// Keeping the events array in `lib/events` for future events

export default function EvenementsPage() {
  // Find the atelier commerce event (15 Janvier 2026)
  const atelierCommerce = atelierEvents.find(e => e.id === "atelier-commerce-2026-01-15")
  
  // Get the upcoming meeting (24 Janvier 2026)
  const upcomingMeeting = futureEvents.find(e => e.id === "reunion-2026-01-24")
  
  // Collect all events and sort by date
  const allEvents = [mainEvent, secondMainEvent].concat(futureEvents || [], ...(atelierEvents || []))
  const filteredAndSorted = sortEventsByDate(filterFutureEvents(allEvents))

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nos Événements</h1>
          <p className="text-xl text-gray-600">Retrouvez nos prochains rendez-vous et venez échanger avec nous</p>
        </div>

        {/* Prochaine réunion publique */}
        <section className="mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Prochaine réunion publique : Samedi 21 février en salle Courcol
              </h3>
              <div className="text-center text-gray-700 space-y-2">
                <p className="text-lg">Venez échanger avec nous sur l'avenir de Mouvaux</p>
                <p className="font-medium mt-4">
                  Pour plus d'informations :{' '}
                  <a href="mailto:RenouveauMouvaux@gmail.com" className="text-blue-600 hover:underline">
                    RenouveauMouvaux@gmail.com
                  </a>
                  {' '}- <a href="tel:0689316548" className="text-blue-600 hover:underline">06 89 31 65 48</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Events Highlight (Actualités + sorted events) */}
        <div className="mb-12 space-y-6">
          {/* Actualités section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Actualités</h2>
            
            {/* Presse subsection */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Presse</h3>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">
                  Dans la Voix du Nord le 6 juillet 2025, j&apos;ai annoncé ma candidature et le lancement de la campagne « Renouveau pour Mouvaux »
                </p>
                
                <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 mb-4">
                  <a 
                    href="https://www.lavoixdunord.fr/1603743/article/2025-07-06/municipales-mouvaux-charles-delavenne-sera-candidat-la-tete-d-une-liste"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Lire l&apos;article : « Municipales à Mouvaux : Charles Delavenne sera candidat à la tête d'une liste »
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Ateliers thématiques ouverts à tous - removed, replaced by actualités above */}
          
          {/* All events sorted by date (closest first) */}
          {filteredAndSorted.map((event, idx) => (
            <div key={idx}>
              {/* Special styling for atelier commerce */}
              {event.id === "atelier-commerce-2026-01-15" ? (
                <div className="border-2 border-slate-900 rounded-lg p-6 bg-white hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900">Atelier déplacé</h3>
                  <EventCard event={event} />
                </div>
              ) : (
                <EventCard event={event} />
              )}
            </div>
          ))}
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
