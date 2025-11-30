import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"
import EventCard from '@/components/event-card'
import { mainEvent, secondMainEvent, futureEvents, atelierEvents } from '@/lib/events'

export default function HomePage() {
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
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg mx-auto">
            <Link href="/contact">Soutenir Renouveau pour Mouvaux </Link>
          </Button>
        </div>
      </section>

      {/* Pourquoi je m'engage Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pourquoi je m'engage</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <p className="text-gray-700 mb-4">
                  Je m'engage dans la course aux élections municipales de Mouvaux dans un esprit résolument constructif, avec l'ambition de proposer un renouveau pour notre ville. Avec des élus municipaux, d'anciens élus, des citoyens engagés et motivés, partageant une vision commune, je souhaite apporter un nouveau souffle à Mouvaux.
                </p>
                <p className="text-gray-700 mb-4">
                  De nombreux Mouvallois en font quotidiennement le constat. Face aux défis auxquels est confrontée notre commune située au cœur d'une grande agglomération, Mouvaux doit se réinventer pour répondre aux préoccupations et aux attentes légitimes de ses habitants tout en protégeant les atouts de notre ville. La préservation du cadre de vie, héritage inestimable de la commune, constitue un pilier fondamental de notre démarche, tout comme la garantie de la sécurité pour tous.
                </p>
                <p className="text-gray-700 mb-4">
                  L'adaptation aux nouvelles réalités de la vie quotidienne représente un enjeu majeur. Dans un contexte métropolitain en constante évolution, Mouvaux doit offrir à ses habitants les conditions optimales pour mener une vie épanouie : travailler, se former, se déplacer, se détendre dans des espaces de qualité, faire ses courses dans de bonnes conditions, habiter dans un cadre serein.
                </p>
                <p className="text-gray-700 mb-4">
                  Il faut s'adapter mais aussi préserver l'essentiel. Notre ville a un atout majeur, les plus anciens côtoient les plus jeunes. Je veux apporter une attention particulière à ce lien si précieux entre les générations. Ce sera un axe important du projet qui sera proposé aux Mouvallois.
                </p>
                <p className="text-gray-700 mb-4">
                  Il s'agit de redonner un véritable souffle à Mouvaux, de créer une dynamique positive qui rende la ville attractive non seulement pour ses habitants actuels, mais également pour ceux qui souhaiteraient s'y installer.
                </p>
                <p className="text-gray-700">
                  Cette vision s'appuie sur une conviction forte : une municipalité efficace, sur un territoire métropolitain dense, doit être à l'écoute de ses citoyens et dans un esprit constructif avec les communes voisines. En associant expertise et engagement citoyen, notre démarche vise à construire ensemble l'avenir de Mouvaux, en préservant son identité tout en l'adaptant aux enjeux du XXIe siècle.
                </p>
              </CardContent>
            </Card>
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

      {/* News Teaser */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Actualités</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-lg mx-auto">
            {([secondMainEvent, mainEvent].concat(futureEvents || [], atelierEvents || [])).map((ev, idx) => (
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
