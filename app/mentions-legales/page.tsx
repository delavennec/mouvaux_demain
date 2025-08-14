export default function LegalNoticePage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Mentions Légales</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informations légales</h2>
          <p>
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs du site les informations suivantes :
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Éditeur du site</h3>
          <p className="ml-4">
            <strong>Association Renouveau pour Mouvaux</strong><br />
            Association loi 1901<br />
            Adresse : 137, rue Faidherbe, 59420 Mouvaux<br />
            Email : contact@delavenne.fr<br />
            Téléphone : [Insérer numéro de téléphone]<br />
            Représentant légal : Charles Delavenne, en qualité de Président
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Hébergeur du site</h3>
          <p className="ml-4">
            <strong>Vercel Inc.</strong><br />
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
            Site web : https://vercel.com
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Directeur de la publication</h3>
          <p className="ml-4">
            Charles Delavenne, Président de l'association Renouveau pour Mouvaux
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Présentation du site</h2>
          <p>
            Le site <strong>mouvaux-demain.fr</strong> a pour objet de :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Présenter l'association Renouveau pour Mouvaux et ses activités</li>
            <li>Informer sur le projet politique de Charles Delavenne pour la commune de Mouvaux</li>
            <li>Permettre aux utilisateurs de contacter l'association</li>
            <li>Proposer l'inscription à une newsletter d'information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique ou autre est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Conditions d'utilisation</h2>
          <p>
            L'utilisateur du site <strong>mouvaux-demain.fr</strong> s'engage à :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Ne pas utiliser le site d'une manière qui pourrait endommager, désactiver, surcharger ou altérer le site</li>
            <li>Ne pas tenter d'obtenir un accès non autorisé au site, aux systèmes informatiques ou aux réseaux connectés au site</li>
            <li>Respecter toutes les lois et réglementations applicables lors de l'utilisation du site</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Liens hypertextes</h2>
          <p>
            Le site <strong>mouvaux-demain.fr</strong> peut contenir des liens hypertextes vers d'autres sites internet. La mise en place de ces liens ne signifie pas que nous approuvons les contenus de ces sites. Nous déclinons toute responsabilité quant au contenu des informations fournies sur ces sites au titre de l'activation de ces liens.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Données personnelles</h2>
          <p>
            Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre <a href="/politique-de-confidentialite" className="text-blue-600 hover:underline">Politique de Confidentialité</a>.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies</h2>
          <p>
            Les informations concernant l'utilisation des cookies sont détaillées dans notre <a href="/cookies" className="text-blue-600 hover:underline">Politique relative aux cookies</a>.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Droit applicable et juridiction compétente</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
          <p>
            Pour toute question concernant ces mentions légales, vous pouvez nous contacter à l'adresse suivante :
          </p>
          <p className="ml-4">
            Association Renouveau pour Mouvaux<br />
            137, rue Faidherbe<br />
            59420 Mouvaux<br />
            Email : contact@delavenne.fr
          </p>
        </div>
      </div>
    </div>
  )
} 