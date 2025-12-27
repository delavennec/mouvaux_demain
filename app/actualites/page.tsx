import React from 'react';
import { Metadata } from 'next';
import EventCard from '@/components/event-card'
import { secondMainEvent, futureEvents, atelierEvents } from '@/lib/events'

export const metadata: Metadata = {
  title: 'Actualités | Renouveau pour Mouvaux',
  description: 'Retrouvez toutes les actualités de la campagne Renouveau pour Mouvaux et Charles Delavenne.',
};

// Parse French date format (e.g., "12 Septembre 2025") to Date object
function parseFrenchDate(dateString: string): Date {
  const frenchMonths: { [key: string]: number } = {
    'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
    'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
  }
  
  const parts = dateString.toLowerCase().split(/\s+/)
  const day = parseInt(parts[0], 10)
  const month = frenchMonths[parts[1]]
  const year = parseInt(parts[2], 10)
  
  return new Date(year, month, day)
}

// Filter events that haven't passed yet
function filterFutureEvents(events: any[]): any[] {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  return events.filter(event => {
    try {
      const eventDate = parseFrenchDate(event.date)
      return eventDate >= today
    } catch {
      // If parsing fails, include the event
      return true
    }
  })
}

export default function ActualitesPage() {
  const allEvents = [secondMainEvent].concat(futureEvents || [], ...(atelierEvents || []))
  const actualitesEvents = filterFutureEvents(allEvents)

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Actualités</h1>

      {/* Featured events cards */}
      <div className="mb-10 max-w-3xl mx-auto space-y-6">
        {actualitesEvents.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Presse</h2>
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
    </main>
  );
}