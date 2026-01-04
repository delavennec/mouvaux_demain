import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"
import EventCard from '@/components/event-card'
import { mainEvent, secondMainEvent, futureEvents, atelierEvents } from '@/lib/events'

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

export default function HomePage() {
  const allEvents = [secondMainEvent, mainEvent].concat(futureEvents || [], ...(atelierEvents || []))
  const homepageEvents = filterFutureEvents(allEvents)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-indigo-900/40 to-blue-800/50 z-10" />
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/general/photo_de_groupe.jpg"
            alt="Équipe Renouveau pour Mouvaux "
            width={1800}
            height={1250}
            className="w-auto h-auto min-w-full min-h-full"
            style={{ transform: 'translate(0px, -200px)' }}
            priority
          />
        </div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto" style={{ marginTop: '20vh' }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Un vote ambitieux et constructif pour Mouvaux
          </h1>
          <div className="flex flex-col items-center justify-center bg-blue-600/90 px-6 py-3 rounded-lg mb-8 inline-block">
            <p className="text-lg md:text-xl font-medium">Pour une ville sûre, attractive, dynamique et agréable</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Link href="/contact">Soutenir Renouveau pour Mouvaux </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Nos Priorités Button */}
      <div className="flex justify-center px-4 mt-8 relative z-10">
        <Button asChild size="lg" className="bg-blue-900 hover:bg-blue-950 text-white px-8 py-3 text-lg">
          <Link href="/programme">Nos priorités</Link>
        </Button>
      </div>

      {/* News Teaser */}
      <section className="py-16 px-4 -mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Nos ateliers d'échange et de réflexion</h3>
              {homepageEvents
                .filter(ev => ev?.title?.includes('Atelier'))
                .map((ev, idx) => (
                  <div key={idx} className="block transition-transform hover:scale-102 hover:shadow-md">
                    <EventCard
                      event={ev}
                      compact
                      contactInline
                      footer={
                        <Link href="/evenements" className="flex items-center text-blue-600 mt-1 text-sm font-medium">
                          <span>En savoir plus</span>
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      }
                    />
                  </div>
                ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Notre prochaine réunion publique</h3>
              {homepageEvents
                .filter(ev => ev?.title?.includes('Réunion'))
                .map((ev, idx) => (
                  <div key={idx} className="block transition-transform hover:scale-102 hover:shadow-md">
                    <EventCard
                      event={ev}
                      compact
                      contactInline
                      footer={
                        <Link href="/evenements" className="flex items-center text-blue-600 mt-1 text-sm font-medium">
                          <span>En savoir plus</span>
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                      }
                    />
                  </div>
                ))}
            </div>
            {homepageEvents
              .filter(ev => !ev?.title?.includes('Atelier') && !ev?.title?.includes('Réunion'))
              .map((ev, idx) => (
                <div key={idx} className="block transition-transform hover:scale-102 hover:shadow-md">
                  <EventCard
                    event={ev}
                    footer={
                      <Link href="/evenements" className="flex items-center text-blue-600 mt-3 text-sm font-medium">
                        <span>En savoir plus</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    }
                  />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Divider & Events Section */}
      <section className="pt-4 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="border-t-4 border-blue-900 mb-8"></div>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Nos événements et positions</h2>
          <div className="mb-10">
            <a
              href="https://www.facebook.com/charlesxdelavenne"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 font-semibold hover:underline text-lg"
            >
              En savoir plus
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-left">
              <Image
                src="/accueil/photo-reunion.jpg"
                alt="Réunion publique 17 novembre"
                width={384}
                height={288}
                className="w-[384px] h-auto rounded-lg object-cover"
              />
              <p className="text-base text-gray-700 leading-relaxed mt-4 max-w-[384px]">
                Extraordinaire réunion publique à Mouvaux. Vous étiez plus de 150 à avoir pris du temps pour échanger avec notre équipe sur l'avenir de notre ville. Voilà déjà 5 mois que l'on se prépare, si les Mouvallois le veulent bien, à arriver à la tête de la municipalité en mars prochain. Ce fut l'occasion de rappeler les raisons de mon engagement. Elles sont ancrées dans mon histoire, ma famille, mon parcours.
              </p>
              <Link href="/charles-delavenne" className="inline-flex items-center text-blue-900 font-semibold hover:underline mt-3 justify-start w-[384px]">
                Charles Delavenne
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="flex flex-col items-center text-left">
              <Image
                src="/accueil/pb-chauffage.jpg"
                alt="Problématique chauffage école"
                width={384}
                height={288}
                className="w-[384px] h-auto rounded-lg object-cover"
              />
              <p className="text-base text-gray-700 leading-relaxed mt-4 max-w-[384px]">
                «Qu'est-ce que je fais des biftecks et des brocolis?». Est-ce la réponse appropriée attendue d'un maire lorsque des parents d'élèves soulèvent un problème bien réel ? Ces parents s'étonnent que le paiement de la cantine ne soit pas annulable alors que leurs enfants sont contraints de rester à la maison en raison d'une panne de chauffage dans leur école. La municipalité a peut être légalement raison, mais un peu d'empathie et de compréhension seraient bienvenues. Peu importe le nombre de familles concernées ou qu'une partie de ces familles ne soient pas mouvalloises, pour chacune d'entre elles, c'est un problème compréhensible notamment pour celles qui ont plusieurs enfants. Une fois encore, une preuve d'absence d'écoute et de bienveillance…
              </p>
            </div>
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
