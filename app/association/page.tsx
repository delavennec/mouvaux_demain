import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "@/components/icons"
import Link from "next/link"
import { NewsletterForm } from "@/components/newsletter-form"
import Image from "next/image"

export default function AssociationPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Renouveau pour Mouvaux</h1>
          <p className="text-xl text-blue-600 font-medium">Une nouvelle ambition pour Mouvaux</p>
        </div>

        {/* Galerie photos */}
        <section className="mb-16">
          {/* Rangée haute – décalée à gauche */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-3 md:mb-4 md:pr-24 items-stretch">
            {/* Image 1 */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/association/selfie-avec-chien-v2.webp"
                alt="Selfie avec chien"
                fill
                unoptimized={true}
                className="object-cover"
              />
            </div>
            {/* Image 2 */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/association/reunion-12-podium-v2.webp"
                alt="Réunion publique 12 mars"
                fill
                unoptimized={true}
                priority
                className="object-cover"
              />
            </div>
            {/* Image 3 */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/association/porte-a-porte-vanessa-v2.webp"
                alt="Porte à porte avec Vanessa"
                fill
                unoptimized={true}
                className="object-cover"
              />
            </div>
          </div>

          {/* Rangée basse – décalée à droite */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 md:pl-24 items-stretch">
            {/* Image 4 */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/association/charles-et-equipe-v2.webp"
                alt="Charles et équipe"
                fill
                unoptimized={true}
                priority={true}
                className="object-cover"
              />
            </div>
            {/* Image 5 */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/association/reunion-20-mars-v2.webp"
                alt="Réunion 20 mars"
                fill
                unoptimized={true}
                className="object-cover"
                style={{ objectPosition: "center 28%" }}
              />
            </div>
            {/* Image 6 */}
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/association/telephone-8-mars-v2.webp"
                alt="Téléphone 8 mars"
                fill
                unoptimized={true}
                priority={true}
                className="object-cover"
              />
            </div>
          </div>
          {/* Bouton Adhésion */}
          <div className="mt-8 text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
            >
              <a href="/general/RPM-Statuts-250226.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Télécharger les statuts de l&apos;association
              </a>
            </Button>
          </div>
        </section>

        {/* Présentation */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-50 border-blue-200">
            <CardContent className="p-8">
              <div className="text-lg text-gray-700 space-y-4">
                <p className="text-blue-700">
                  Ce mouvement incarne avant tout un esprit de rassemblement qui transcende les clivages partisans traditionnels. L'équipe du groupe minoritaire « Mouvaux avec vous », menée par Stéphane Lebon, s'unit à cette association, apportant son expertise et sa connaissance approfondie des enjeux locaux. Cette alliance démontre la volonté commune de placer l'intérêt général des Mouvallois au-dessus des ambitions personnelles.
                </p>
                <p>
                  Pour Charles Delavenne, cette association, située au centre droit a vocation à rassembler le plus largement possible tous les Mouvallois attachés à leur ville. C'est une approche non-partisane qui vise à créer une dynamique ouverte à tous pour servir efficacement la commune.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">L'ambition d'un nouveau souffle</h3>
                <p>
                  Le mouvement porte l'ambition de redonner dynamisme et attractivité à notre ville, et éviter qu'elle devienne une « belle endormie » entourée de communes créatives et audacieuses. Cette démarche de renouveau, menée en concertation avec les habitants, vise à offrir une véritable alternative crédible et porteuse d'avenir pour la commune.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Un projet concerté et réaliste</h3>
                <p>
                  Il sera discuté et élaboré en concertation avec les habitants. L'équipe ira régulièrement à la rencontre des habitants dans chacun des quartiers pour écouter leurs préoccupations et recueillir leurs témoignages et leurs idées.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Axes de campagne */}
        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Nos priorités</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">La sécurité du quotidien</h3>
                    <p className="text-gray-700">
                      Constitue le premier pilier, avec des mesures adaptées pour garantir la tranquillité des Mouvallois.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">La préservation du cadre de vie et le logement</h3>
                    <p className="text-gray-700">
                      Occupent une place centrale, visant à maintenir l'environnement exceptionnel de la commune tout en conciliant développement durable et respect du patrimoine.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">L'attention portée aux seniors</h3>
                    <p className="text-gray-700">
                      Témoigne de la volonté de développer des services dédiés aux aînés, reconnus comme acteurs essentiels de la vie communale.
                    </p>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">L'engagement envers la jeunesse</h3>
                    <p className="text-gray-700">
                      Se traduit par des projets éducatifs, culturels et sportifs innovants pour favoriser l'épanouissement des jeunes Mouvallois.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
                <h3 className="text-xl font-bold mb-2 text-gray-900">L'attractivité économique et le dynamisme commercial</h3>
                <p className="text-gray-700">
                  Mouvaux doit retrouver sa place sur la carte de la métropole lilloise afin d'attirer des emplois adaptés à l'identité de la ville. Soutenir et accompagner le commerce, créer des événements fédérateurs pour animer le centre-ville.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Nous soutenir */}
        <section className="mb-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Nous soutenir</h3>
              <p className="text-gray-600 mb-6">
                Participez activement aux projets de Renouveau pour Mouvaux et soutenez notre démarche citoyenne.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/adherer">Nous contacter</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA final */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ensemble, construisons Renouveau pour Mouvaux</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Votre engagement et vos idées sont précieux pour enrichir notre projet. Rejoignez une communauté de citoyens
            actifs et responsables.
          </p>

          {/* Newsletter signup */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 mb-8 max-w-lg mx-auto border-2 border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">📧 Newsletter de l'association</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Recevez nos comptes-rendus d'activités et invitations aux événements
            </p>
            <NewsletterForm 
              buttonText="S'inscrire"
              buttonClassName="bg-blue-600 hover:bg-blue-700"
              inputClassName="flex-1 px-3 py-2 rounded border border-gray-300 text-sm"
              messageClassName="text-sm mt-2"
              layout="row"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/adherer">Nous contacter</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/programme">Découvrir notre projet</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}