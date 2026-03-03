import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Heart, Download, Book, Leaf, Building2 } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ProgrammePage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Notre Programme</h1>
          <p className="text-xl text-blue-600 font-medium">Un nouveau souffle pour Mouvaux</p>
        </div>
      </div>

      <div className="w-full mb-8">
        <Image
          src="/programme/photo-equipe.webp"
          alt="Photo de l'équipe"
          width={2400}
          height={1200}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Download Button */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-8">
        <Button
          asChild
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
        >
          <a href="/programme.pdf" download>
            <Download className="w-5 h-5" />
            Télécharger notre programme
          </a>
        </Button>
      </div>

      {/* Main Section - Full Width Background */}
      <div className="bg-blue-50 py-8 mb-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-4 text-gray-700">
            <p>Chères Mouvalloises, Chers Mouvallois,</p>
            
            <p>Mouvaux est une ville d'exception. Nous l'aimons pour son histoire, pour ses parcs, pour son esprit village. Mais aujourd'hui, force est de constater que notre "Belle Époque" s'essouffle.</p>
            
            <p>L'insécurité grandissante, l'urbanisme mal maîtrisé et le sentiment d'éloignement entre la Mairie et vous, habitants, ne sont pas des fatalités. Ce sont les conséquences de choix politiques passés et d'un manque d'anticipation.</p>
            
            <p className="font-semibold">Le 15 mars 2026, vous avez le pouvoir de changer les choses.</p>
            
            <p>J'ai décidé de conduire une liste de rassemblement, composée de 33 femmes et hommes compétents, issus de tous nos quartiers et de la société civile. Nous ne sommes pas là pour faire de la figuration, mais pour agir.</p>
            
            <p className="font-semibold">Notre ambition est claire :</p>
            
            <ul className="space-y-2 ml-6">
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Rétablir l'ordre et la tranquillité que vous êtes en droit d'attendre.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Stopper la bétonisation pour préserver notre cadre de vie unique.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">●</span>
                <span>Gérer vos impôts avec rigueur, en investissant là où c'est utile, pas dans le superflu.</span>
              </li>
            </ul>
            
            <p>Ce programme, que vous allez découvrir dans ces pages, est un contrat de confiance. Il est chiffré, réaliste et tourné vers votre quotidien.</p>
            
            <p>Je m'engage à être un Maire à temps plein, accessible et à votre écoute. Ensemble, réveillons Mouvaux.</p>
            
            <div className="mt-8">
              <p>Fidèlement,</p>
              <p className="mt-2">
                <span className="font-semibold">Charles DELAVENNE</span> <span className="italic">Tête de liste "Renouveau pour Mouvaux"</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Sécurité Card */}
        <Card className="border-2 border-blue-200 shadow-none mt-8">
          <CardContent className="py-8 px-8">
            <div className="space-y-6 text-gray-700">
              {/* Header with Shield Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">SÉCURITÉ</h2>
              </div>

              <p className="font-semibold text-gray-900">La sécurité est la première des libertés. Nous assumons une politique de fermeté.</p>

              {/* Section 1 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">UNE POLICE MUNICIPALE PUISSANTE ET PRÉSENTE</h3>
                <p className="mb-3">Le Maire doit assumer son rôle de premier magistrat.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Effectifs et Amplitude :</span> Nous renforcerons significativement les effectifs de la Police Municipale pour assurer une présence visible 7j/7, avec des horaires élargis en soirée et le week-end.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Brigades Mixtes :</span> Mise en place de patrouilles conjointes Police Municipale / Police Nationale pour quadriller le terrain.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Lutte contre les trafics :</span> Création d'un poste d'adjoint spécifiquement dédié à la Sécurité. Objectif : harcèlement des points de deal et tolérance zéro.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">LE CHOC TECHNOLOGIQUE</h3>
                <p className="mb-3">Mouvaux doit rattraper son retard et utiliser les outils modernes.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Vidéo-protection intelligente :</span> Déploiement de caméras de nouvelle génération aux entrées de ville, devant les écoles et dans les zones sensibles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Connexion Métropolitaine :</span> Raccordement direct au CMSU (Centre de Supervision Urbain) de la Métropole pour garantir une intervention immédiate des forces de l'ordre en cas d'alerte.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Lien direct Citoyen-Police :</span> Création d'une application smartphone dédiée pour signaler instantanément une incivilité ou un danger.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">PRÉVENTION ET JUSTICE</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Protection juridique :</span> La ville se portera systématiquement partie civile à chaque agression d'agent ou dégradation de bien public.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Sécurisation piétonne :</span> Plan lumière spécifique pour renforcer l'éclairage de tous les passages piétons de la commune.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gouvernance, Finances & Démocratie Card */}
        <Card className="border-2 border-indigo-200 shadow-none mt-8">
          <CardContent className="py-8 px-8">
            <div className="space-y-6 text-gray-700">
              {/* Header with Building2 Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">GOUVERNANCE, FINANCES & DÉMOCRATIE</h2>
              </div>

              <p className="font-semibold text-gray-900">Le socle de notre engagement : une gestion saine et partagée.</p>

              {/* Section 1 - Gouvernance */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">GOUVERNER, C'EST CHOISIR</h3>
                <p className="mb-3">La gestion municipale est une question de priorités. Nous n'augmenterons pas la pression fiscale par facilité. Notre méthode sera celle du bon sens : chaque euro dépensé doit être utile aux Mouvallois.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Nos choix sont clairs :</span> Nous investirons massivement dans vos priorités (Sécurité, Propreté, Cadre de vie) en stoppant les dépenses de prestige et de communication superflues.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Sobriété politique :</span> Réduction immédiate des frais de réception et de représentation des élus.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 - Démocratie */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">UNE DÉMOCRATIE LOCALE VIVANTE</h3>
                <p className="mb-3">Fini les décisions prises en vase clos. Nous voulons une ville qui vous écoute.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Transparence totale :</span> Attribution des logements sociaux et des subventions via des commissions mixtes (incluant l'opposition) pour garantir l'équité et stopper le clientélisme.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Ateliers participatifs décisionnaires :</span> Pour les aménagements de voirie ou de quartier, les riverains seront consultés et auront un pouvoir de décision réel.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Mairie 2.0 & Humaine :</span> Digitalisation des démarches (inscriptions, état civil) pour vous simplifier la vie, tout en garantissant un accueil physique chaleureux pour ceux qui préfèrent le contact humain.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Culture, Animation & Vie Associative Card */}
        <Card className="border-2 border-purple-300 shadow-none mt-8">
          <CardContent className="py-8 px-8">
            <div className="space-y-6 text-gray-700">
              {/* Header with Users Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">CULTURE, ANIMATION & VIE ASSOCIATIVE</h2>
              </div>

              <p className="font-semibold text-gray-900">Mouvaux, ville de liens et d'épanouissement.</p>

              {/* Section 1 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">UNE AMBITION CULTURELLE POUR TOUS</h3>
                <p className="mb-3">La culture ne doit pas être une variable d'ajustement, mais un droit concret.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">L'Étoile Rayonnante :</span> Ce projet phare comprendra l'installation d'une véritable cinémathèque et une ouverture élargie de la structure aux habitants.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Patrimoine vivant :</span> Rénovation complète de la Salle Pierre Bercker pour en faire un écrin digne de nos événements.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Formation des talents :</span> Création d'une École municipale regroupant Théâtre, Danse et Chant pour former nos jeunes artistes.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">SOUTENIR LE TISSU ASSOCIATIF</h3>
                <p className="mb-3">Les bénévoles sont la richesse de notre commune. Nous serons à leurs côtés.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Moyens renforcés :</span> Augmentation du soutien financier, mais aussi matériel et logistique pour toutes les associations mouvalloises.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span>Soutenir et financer l'implantation de commerces de bouche dans notre ville.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Nouveaux lieux de convivialité :</span></span>
                  </li>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start">
                      <span className="mr-2">○</span>
                      <span>Création d'un Café Associatif rue Gallieni, géré par et pour les jeunes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">○</span>
                      <span>Lancement d'un "Troc aux plantes" annuel au Parc du Hautmont.</span>
                    </li>
                  </ul>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Culture Solidaire :</span> Via le CCAS, nous offrirons des places de spectacle aux familles les plus modestes pour que personne ne soit exclu.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">DYNAMISME ÉCONOMIQUE & PERSONNEL COMMUNAL</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Le Marché, cœur de ville :</span> Il ne doit pas être un simple lieu de vente, mais un lieu de vie. Nous lui rendrons ses lettres de noblesse par une nouvelle dynamique commerciale et des animations régulières.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Administration exemplaire :</span> Pour avoir un service public de qualité, il faut des agents valorisés. Nous améliorerons la qualité de vie au travail (locaux, matériel) de nos agents municipaux.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Aînés, Santé & Solidarité Card */}
        <Card className="border-2 border-rose-200 shadow-none mt-8">
          <CardContent className="py-8 px-8">
            <div className="space-y-6 text-gray-700">
              {/* Header with Heart Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">AÎNÉS, SANTÉ & SOLIDARITÉ</h2>
              </div>

              <p className="font-semibold text-gray-900">La ville comme facilitateur de vie et de santé.</p>

              {/* Section 1 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">LE MAINTIEN À DOMICILE : NOTRE PRIORITÉ</h3>
                <p className="mb-3">La mairie ne doit pas être une simple administration, mais un relais facilitateur. Notre rôle est de coordonner les services pour vous permettre de rester chez vous le plus longtemps possible, en toute sécurité.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Guichet Unique :</span> La ville centralisera les demandes pour organiser l'aide présentielle et les soins à domicile.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Soutenir les Aidants :</span> Parce qu'aider un proche est épuisant, nous développerons des solutions de répit, comme le "baluchonnage" (relais à domicile) et faciliterons l'accès aux auxiliaires de vie.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">SANTÉ & ACCÈS AUX SOINS</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Maison de Santé Pluriprofessionnelle :</span> Nous porterons le projet de création d'une maison de santé pour lutter contre la désertification médicale et regrouper les praticiens.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Pouvoir d'achat santé :</span> Négociation d'une mutuelle communale de groupe pour offrir à tous les Mouvallois une couverture santé de qualité à tarif préférentiel.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">LIEN SOCIAL ET LOGEMENT</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Lutter contre l'isolement :</span> Développement des clubs seniors dans tous les quartiers, accompagnement à l'informatique pour les démarches en ligne, et actions intergénérationnelles avec le Conseil Municipal des Jeunes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Conseil des Séniors :</span> Création d'une instance consultative pour que votre expérience éclaire les décisions municipales.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Nouvelle offre de logement :</span> Remplacement de la résidence "La Belle Époque" par une Résidence Services moderne en centre-ville, adaptée aux nouveaux besoins.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Jeunesse, École & Sport Card */}
        <Card className="border-2 border-amber-200 shadow-none mt-8">
          <CardContent className="py-8 px-8">
            <div className="space-y-6 text-gray-700">
              {/* Header with Book Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Book className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">JEUNESSE, ÉCOLE & SPORT</h2>
              </div>

              <p className="font-semibold text-gray-900">Investir dans notre jeunesse, c'est investir pour demain.</p>

              {/* Section 1 - École */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">ÉCOLE : REPRENDRE LA MAIN SUR LA QUALITÉ</h3>
                <p className="mb-3">L'éducation de nos enfants mérite le meilleur.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Le Périscolaire :</span> Nous reprendrons la gestion du périscolaire pour en garantir la qualité pédagogique et l'encadrement.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Dans l'assiette :</span> Révolution dans les cantines avec une alimentation 100% saine, bio et issue de circuits courts locaux.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Harcèlement scolaire :</span> Tolérance zéro. Création en concertation avec les directions des écoles d'un dispositif d'alerte municipal avec un interlocuteur dédié et un numéro d'urgence pour les familles et les élèves.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 - Jeunesse & Emploi */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">JEUNESSE & EMPLOI</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Forum Avenir :</span> Organisation d'un "Forum des jeunes" annuel pour mettre en relation directe nos jeunes (stages, premiers emplois) avec le réseau des chefs d'entreprises mouvallois.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 - Sport */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">LE SPORT, VECTEUR DE COHÉSION</h3>
                <p className="mb-3">Le sport véhicule des valeurs de respect et d'effort que nous soutiendrons.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Infrastructures modernes :</span> Remplacement de la pelouse par un terrain synthétique pour le football, création de terrains de Padel, et rénovation urgente de la toiture de la salle Coubertin.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Grands Événements :</span> Nous pérenniserons les rendez-vous d'envergure (Eurométropole Masters de Judo, Tournoi international de Foot) et créerons un Urban Trail pour découvrir la ville en courant, ainsi qu'un grand week-end multisports.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cadre de Vie, Urbanisme & Écologie Card */}
        <Card className="border-2 border-green-200 shadow-none mt-8">
          <CardContent className="py-8 px-8">
            <div className="space-y-6 text-gray-700">
              {/* Header with Leaf Icon */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">CADRE DE VIE, URBANISME & ÉCOLOGIE</h2>
              </div>

              <p className="font-semibold text-gray-900">Préserver notre cadre de vie et préparer l'avenir.</p>

              {/* Section 1 - Urbanisme */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">URBANISME MAÎTRISÉ : STOP AU BÉTON</h3>
                <p className="mb-3">Nous mettons fin à l'urbanisme subi pour passer à un urbanisme choisi et apaisé.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Végétalisation du coeur de ville</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Remise à plat immédiate :</span> Nous reverrons tous les projets immobiliers en cours avec les promoteurs. Construire sans penser à l'intégration paysagère, au stationnement et aux services, c'est fini.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Équilibre vital :</span> Nous veillerons à une mixité harmonieuse entre commerces de proximité, services et logements pour ne pas devenir une ville-dortoir.</span>
                  </li>
                </ul>
              </div>

              {/* Section 2 - Mouvaux verte */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">MOUVAUX VILLE VERTE ET DURABLE</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">La Ligne de Vie :</span> Pour chaque naissance à Mouvaux, la commune s'engage à planter un arbre. Un symbole fort d'enracinement pour les générations futures.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Propreté urbaine & Civisme :</span> Mise en place du dispositif "Signaler et Agir" : une brigade d'intervention rapide pour nettoyer les dépôts sauvages et les tags sous 48h.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Création d'un nouveau parc public</span> après concertation avec les comités de quartier</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Sobriété énergétique :</span> Lancement d'un grand plan d'isolation des bâtiments publics (écoles, salles de sport) pour réduire la facture et l'empreinte carbone.</span>
                  </li>
                </ul>
              </div>

              {/* Section 3 - Cause Animale */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">LA CAUSE ANIMALE : UNE VRAIE POLITIQUE</h3>
                <p className="mb-3">Le respect du vivant est une marque de civilisation. Mouvaux doit être exemplaire.</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Ferme Pédagogique :</span> Création d'une structure éducative ouverte aux écoles et aux familles. Un lieu de découverte et de lien avec la nature, intégrant de la médiation animale.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Chats errants :</span> Lancement d'une campagne de stérilisation des chats libres, en partenariat avec les associations, pour réguler la population avec éthique et bienveillance.</span>
                  </li>
                </ul>
              </div>

              {/* Section 4 - Mobilités */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">MOBILITÉS DOUCES ET ACTIVES</h3>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start">
                    <span className="mr-2">●</span>
                    <span><span className="font-semibold text-blue-900">Vélo & Transports :</span> Ouverture d'une station V'Lille tant attendue pour connecter Mouvaux à la métropole et création d'un réseau cyclable continu et sécurisé pour les trajets du quotidien.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
