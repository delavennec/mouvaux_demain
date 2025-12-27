import { Button } from "@/components/ui/button"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Événements</h1>
          <p className="text-xl text-gray-600">Retrouvez nos prochains rendez-vous et venez échanger avec nous</p>
        </div>

        {/* Main Events Highlight (Ateliers overview + sorted events) */}
        <div className="mb-12 space-y-6">
          {/* Overview card for Ateliers - clickable to ateliers page (rendered first) */}
          <Link href="/evenements/ateliers" className="block">
            <div className="hover:shadow-lg transition-shadow border-2 border-blue-500 rounded-lg p-6 bg-white">
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 text-center">{ateliersOverview.title}</h3>
              <div className="mb-4">
                <ul className="list-disc pl-6 text-gray-600">
                  <li>Sécurité</li>
                  <li>Economie / Attractivité / Entreprises / Commerce</li>
                  <li>Environnement / Propreté / Cause animale / Urbanisme</li>
                  <li>Jeunesse / Sport / Education</li>
                  <li>Famille / Santé / Seniors</li>
                  <li>Culture / Citoyenneté / Evénements</li>
                </ul>
              </div>
              <div className="text-gray-500 text-sm text-center mt-3">Merci de s'inscrire à l'adresse {ateliersOverview.contact}</div>
            </div>
          </Link>
          
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
