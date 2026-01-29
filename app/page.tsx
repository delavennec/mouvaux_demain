'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"
import EventCard from '@/components/event-card'
import { EventPositionCard } from '@/components/event-position-card'
import { mainEvent, secondMainEvent, futureEvents, atelierEvents } from '@/lib/events'
import { filterFutureEvents } from "@/lib/utils"
import { useState } from "react"

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
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg border-2 border-blue-900">
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

      {/* Prochaine réunion publique */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* Nos événements et positions - Moved up */}
      <section className="pt-8 pb-16 px-4">
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
            {/* Réunion publique 24 janvier 2026 */}
            <EventPositionCard
              date="24 janvier 2026"
              title="Réunion publique"
              images={[
                { src: '/accueil/photo-site.jpg', alt: 'Réunion publique 24 janvier' },
                { src: '/accueil/photo-reunion-24-charles.jpeg', alt: 'Charles Delavenne lors de la réunion' }
              ]}
              text="Une superbe troisième réunion publique où nous avons eu la chance de réunir plus de 150 personnes hier soir à la salle Bercker. Un grand merci à notre équipe soudée et au soutien indéfectible des Mouvallois présents. C'est au travers de l'écoute et des échanges dynamiques que nous réaliserons ce renouveau pour Mouvaux."
            />

            {/* Porte-à-porte janvier 2026 */}
            <EventPositionCard
              date="Janvier 2026"
              title="Porte à porte"
              images={[
                { src: '/accueil/photo porte a porte.jpg', alt: 'Porte-à-porte rue de Londres' }
              ]}
              text="Encore une belle soirée de porte-à-porte rue de Londres. Merci à tous pour votre engagement."
              fullWidthImage
            />

            {/* Atelier commerce janvier 2026 */}
            <EventPositionCard
              date="Janvier 2026"
              title="Atelier Commerce"
              images={[
                { src: '/accueil/photo atelier commerce 1.jpg', alt: 'Atelier commerce - échanges' },
                { src: '/accueil/photo atelier commerce 2.jpg', alt: 'Atelier commerce - participants' }
              ]}
              text="Retour en images sur notre atelier commerce, qui fut un lieu de dialogue constructif et d'enrichissantes suggestions. Merci aux Mouvallois pour la qualité des échanges, l'écoute et les nombreuses visions partagées. C'est ensemble que l'on fait bouger les choses."
            />

            {/* Réunion publique 17 novembre */}
            <EventPositionCard
              date="17 novembre 2025"
              title="Réunion publique"
              images={[
                { src: '/accueil/photo-reunion.jpg', alt: 'Réunion publique 17 novembre' },
                { src: '/accueil/photo web 17 nov.jpeg', alt: 'Réunion publique 17 novembre - vue d\'ensemble' }
              ]}
              text="Extraordinaire réunion publique à Mouvaux. Vous étiez plus de 150 à avoir pris du temps pour échanger avec notre équipe sur l'avenir de notre ville. Voilà déjà 5 mois que l'on se prépare, si les Mouvallois le veulent bien, à arriver à la tête de la municipalité en mars prochain. Ce fut l'occasion de rappeler les raisons de mon engagement. Elles sont ancrées dans mon histoire, ma famille, mon parcours."
              link={{ text: 'Charles Delavenne', href: '/charles-delavenne' }}
            />

            {/* Position sur le problème de chauffage */}
            <EventPositionCard
              date="Décembre 2025"
              images={[
                { src: '/accueil/pb-chauffage.jpg', alt: 'Problématique chauffage école' }
              ]}
              text="«Qu'est-ce que je fais des biftecks et des brocolis?». Est-ce la réponse appropriée attendue d'un maire lorsque des parents d'élèves soulèvent un problème bien réel ? Ces parents s'étonnent que le paiement de la cantine ne soit pas annulable alors que leurs enfants sont contraints de rester à la maison en raison d'une panne de chauffage dans leur école. La municipalité a peut être légalement raison, mais un peu d'empathie et de compréhension seraient bienvenues. Peu importe le nombre de familles concernées ou qu'une partie de ces familles ne soient pas mouvalloises, pour chacune d'entre elles, c'est un problème compréhensible notamment pour celles qui ont plusieurs enfants. Une fois encore, une preuve d'absence d'écoute et de bienveillance…"
              previewSentences={2}
            />
          </div>
        </div>
      </section>

      {/* News Teaser */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8 max-w-4xl">
            {homepageEvents.filter(ev => ev?.title?.includes('Atelier')).length > 0 && (
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
            )}
            {homepageEvents.filter(ev => ev?.title?.includes('Réunion')).length > 0 && (
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
            )}
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
