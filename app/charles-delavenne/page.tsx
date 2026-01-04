import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"

export default function CharlesDelavennePage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Charles Delavenne</h1>
          <p className="text-xl text-blue-600 font-medium">Tête de liste Renouveau pour Mouvaux</p>
        </div>

        {/* Intro Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/DLGA-Charles-DELAVENNE-STUDIOFALOUR-0013.jpg"
                alt="Charles Delavenne"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Un engagement au service de Mouvaux</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  <strong>Âgé de 47 ans</strong>, avocat de formation et de profession, Charles Delavenne est marié et
                  père de quatre enfants. Il vit et travaille sur notre territoire, auquel il est profondément attaché.
                </p>
                <p>
                  Issu d'une famille engagée dans la vie publique – son père fut agriculteur et maire d'une commune
                  rurale – il a grandi dans le respect des valeurs de la République, du travail, de l'écoute et du
                  service de l'intérêt général.
                </p>
              </div>
            </div>
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

        {/* Timeline */}
        <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-6 rounded-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Parcours professionnel et engagement</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="ml-16">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Formation juridique</h3>
                      <p className="text-gray-600">
                        Avocat de formation, spécialisé dans le droit des affaires et l'accompagnement d'entreprises.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-indigo-600 rounded-full"></div>
                <div className="ml-16">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Énergies renouvelables</h3>
                      <p className="text-gray-600">
                        Expérience professionnelle auprès d'acteurs des énergies renouvelables, du financement et du
                        développement économique.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-orange-600 rounded-full"></div>
                <div className="ml-16">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Engagement associatif</h3>
                      <p className="text-gray-600">
                        Impliqué dans la vie associative locale, avec la conviction que la proximité et l'engagement de
                        terrain doivent guider l'action publique.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-purple-600 rounded-full"></div>
                <div className="ml-16">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Renouveau pour Mouvaux</h3>
                      <p className="text-gray-600">
                        Création et animation du mouvement Renouveau pour Mouvaux pour porter un projet politique centré sur
                        l'intérêt général.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 border-blue-200">
            <CardContent className="p-12 text-center">
              <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 leading-relaxed">
                "Je refuse l'opportunisme et les carrières politiques déconnectées. Être élu local, c'est un engagement
                de chaque instant au service des habitants, pas une étape dans un parcours personnel."
              </blockquote>
              <cite className="text-lg text-blue-600 font-medium">Charles Delavenne</cite>
            </CardContent>
          </Card>
        </section>

        {/* Newsletter Signup - Inline */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Restez connecté avec Charles Delavenne</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Recevez les réflexions et propositions de Charles directement par email. Un contenu exclusif pour mieux
                comprendre sa vision pour Mouvaux.
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm 
                  buttonText="Suivre Charles"
                  buttonClassName="bg-blue-600 hover:bg-blue-700"
                  inputClassName="flex-1 px-4 py-3 rounded-lg border border-gray-300"
                  messageClassName="text-sm mt-2"
                  layout="row"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Positioning */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Un positionnement clair</h2>
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                <strong>Candidat du Centre et de la Droite républicaine</strong>, Charles Delavenne se positionne
                clairement contre les extrêmes et défend une ligne politique d'équilibre, de responsabilité et de
                progrès durable.
              </p>
              <p>
                Son engagement s'inspire des valeurs portées par des figures comme Simone Veil, Jacques Delors et
                Jean-Louis Borloo : le refus du cynisme politique, la primauté des convictions et du bon sens local.
              </p>
            </div>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/programme">Découvrir notre projet</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
