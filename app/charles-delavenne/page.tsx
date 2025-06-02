import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CharlesDelavennePage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Charles Delavenne</h1>
          <p className="text-xl text-emerald-600 font-medium">Tête de liste Mouvaux Demain</p>
        </div>

        {/* Intro Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=500&width=400"
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

        {/* Timeline */}
        <section className="mb-16 bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-6 rounded-2xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Parcours professionnel et engagement</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            <div className="space-y-8">
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-emerald-600 rounded-full"></div>
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
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full"></div>
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
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">Mouvaux Demain</h3>
                      <p className="text-gray-600">
                        Création et animation de l'association Mouvaux Demain pour porter un projet politique centré sur
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
          <Card className="bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 border-emerald-200">
            <CardContent className="p-12 text-center">
              <Quote className="w-12 h-12 text-emerald-600 mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 leading-relaxed">
                "Je refuse l'opportunisme et les carrières politiques déconnectées. Être élu local, c'est un engagement
                de chaque instant au service des habitants, pas une étape dans un parcours personnel."
              </blockquote>
              <cite className="text-lg text-emerald-600 font-medium">Charles Delavenne</cite>
            </CardContent>
          </Card>
        </section>

        {/* Newsletter Signup - Inline */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-blue-50 via-emerald-50 to-purple-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Restez connecté avec Charles Delavenne</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Recevez les réflexions et propositions de Charles directement par email. Un contenu exclusif pour mieux
                comprendre sa vision pour Mouvaux.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300"
                  />
                  <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
                    Suivre Charles
                  </Button>
                </div>
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
            <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Link href="/programme">Découvrir notre programme</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
