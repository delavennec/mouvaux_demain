export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Politique relative aux cookies</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite sur notre site. Il nous permet de stocker des informations relatives à votre navigation et de vous reconnaître lors de vos visites ultérieures.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Quels types de cookies utilisons-nous ?</h2>
          <p>
            Nous utilisons différents types de cookies sur notre site :
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Cookies strictement nécessaires</h3>
          <p>
            Ces cookies sont indispensables au fonctionnement de notre site. Ils vous permettent d'utiliser les fonctionnalités principales, comme la navigation ou l'accès à des espaces sécurisés. Sans ces cookies, notre site ne peut pas fonctionner correctement. Ces cookies ne nécessitent pas votre consentement.
          </p>
          <table className="border-collapse w-full mt-4 mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Nom du cookie</th>
                <th className="border p-2 text-left">Finalité</th>
                <th className="border p-2 text-left">Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">newsletter-popup-shown</td>
                <td className="border p-2">Mémoriser si la popup newsletter a déjà été affichée</td>
                <td className="border p-2">Session</td>
              </tr>
            </tbody>
          </table>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Cookies de performance et d'analyse</h3>
          <p>
            Ces cookies nous permettent de reconnaître et de compter le nombre de visiteurs sur notre site et de voir comment les visiteurs se déplacent sur le site lorsqu'ils l'utilisent. Cela nous aide à améliorer le fonctionnement de notre site, par exemple en nous assurant que les utilisateurs trouvent facilement ce qu'ils recherchent.
          </p>
          <table className="border-collapse w-full mt-4 mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Nom du cookie</th>
                <th className="border p-2 text-left">Finalité</th>
                <th className="border p-2 text-left">Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">_ga</td>
                <td className="border p-2">Google Analytics - Distinguer les utilisateurs</td>
                <td className="border p-2">13 mois</td>
              </tr>
              <tr>
                <td className="border p-2">_gid</td>
                <td className="border p-2">Google Analytics - Distinguer les utilisateurs</td>
                <td className="border p-2">24 heures</td>
              </tr>
              <tr>
                <td className="border p-2">_gat</td>
                <td className="border p-2">Google Analytics - Limiter le taux de demandes</td>
                <td className="border p-2">1 minute</td>
              </tr>
            </tbody>
          </table>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Cookies fonctionnels</h3>
          <p>
            Ces cookies permettent de mémoriser vos choix (comme votre nom d'utilisateur, votre langue ou la région où vous vous trouvez) et de proposer des fonctionnalités améliorées et plus personnalisées.
          </p>
          <table className="border-collapse w-full mt-4 mb-6">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Nom du cookie</th>
                <th className="border p-2 text-left">Finalité</th>
                <th className="border p-2 text-left">Durée de conservation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">cookie-consent</td>
                <td className="border p-2">Mémoriser vos préférences en matière de cookies</td>
                <td className="border p-2">6 mois</td>
              </tr>
            </tbody>
          </table>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Comment gérer les cookies ?</h2>
          <p>
            Lors de votre première visite sur notre site, un bandeau vous informe de l'utilisation de cookies et vous propose de les accepter ou de les refuser. Vous pouvez à tout moment modifier vos préférences.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Via notre bandeau de cookies</h3>
          <p>
            Vous pouvez gérer vos préférences en matière de cookies via notre bandeau de gestion des cookies. Ce bandeau s'affiche lors de votre première visite et reste accessible en cliquant sur le lien "Gérer les cookies" présent en bas de chaque page.
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Via les paramètres de votre navigateur</h3>
          <p>
            Vous pouvez également configurer votre navigateur pour qu'il accepte ou refuse les cookies. Voici comment procéder sur les navigateurs les plus courants :
          </p>
          
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Chrome</strong> : Menu → Paramètres → Afficher les paramètres avancés → Confidentialité → Paramètres de contenu → Cookies</li>
            <li><strong>Firefox</strong> : Menu → Options → Vie privée et sécurité → Cookies et données de sites</li>
            <li><strong>Safari</strong> : Préférences → Confidentialité → Cookies et données de sites web</li>
            <li><strong>Edge</strong> : Menu → Paramètres → Cookies et autorisations de site → Gérer et supprimer les cookies</li>
          </ul>
          
          <p>
            Veuillez noter que la désactivation de certains cookies peut affecter les fonctionnalités de notre site.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies tiers</h2>
          <p>
            Certains cookies sont placés par des services tiers qui apparaissent sur nos pages :
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Google Analytics</h3>
          <p>
            Nous utilisons Google Analytics pour analyser l'utilisation de notre site. Google Analytics génère des informations statistiques et analytiques sur l'utilisation du site par le biais de cookies, qui sont stockés sur les ordinateurs des utilisateurs. Les informations générées relatives à notre site sont utilisées pour créer des rapports sur l'utilisation du site.
          </p>
          <p>
            Google stockera et utilisera ces informations. La politique de confidentialité de Google est disponible à l'adresse suivante : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy</a>
          </p>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Mailchimp</h3>
          <p>
            Pour notre newsletter, nous utilisons Mailchimp qui peut déposer des cookies pour mesurer l'interaction avec nos emails. La politique de confidentialité de Mailchimp est disponible à l'adresse suivante : <a href="https://mailchimp.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://mailchimp.com/legal/privacy/</a>
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Modifications de la politique relative aux cookies</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique à tout moment. Tout changement sera publié sur cette page et entrera en vigueur dès sa publication. Nous vous encourageons à consulter régulièrement cette page pour rester informé des mises à jour.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
          <p>
            Si vous avez des questions concernant notre utilisation des cookies, veuillez nous contacter à l'adresse suivante :
          </p>
          <p className="ml-4">
            Association Mouvaux Demain<br />
            137, rue Faidherbe<br />
            59420 Mouvaux<br />
            Email : contact@delavenne.fr
          </p>
        </div>
      </div>
    </div>
  )
} 