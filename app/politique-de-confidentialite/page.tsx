import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Politique de Confidentialité</h1>
        
        <div className="prose prose-blue max-w-none">
          <p className="text-lg mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            Mouvaux Demain s'engage à protéger la vie privée des utilisateurs de son site internet. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données à caractère personnel est :
          </p>
          <p className="ml-4">
            Association Mouvaux Demain<br />
            137, rue Faidherbe<br />
            59420 Mouvaux<br />
            Email : contact@delavenne.fr
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Données collectées</h2>
          <p>
            Nous collectons les types de données suivants :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Données d'identification</strong> : nom, prénom, adresse email</li>
            <li><strong>Données de message</strong> : contenu des messages que vous nous envoyez via le formulaire de contact</li>
            <li><strong>Données techniques</strong> : adresse IP, type de navigateur, pages visitées, durée de la visite</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Finalités du traitement</h2>
          <p>
            Nous utilisons vos données personnelles pour les finalités suivantes :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Vous permettre de nous contacter via le formulaire de contact</li>
            <li>Vous envoyer notre newsletter si vous vous y êtes inscrit</li>
            <li>Analyser l'utilisation de notre site afin de l'améliorer</li>
            <li>Répondre à vos demandes d'information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Base légale du traitement</h2>
          <p>
            Nous traitons vos données personnelles sur les bases légales suivantes :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Consentement</strong> : lorsque vous nous donnez explicitement votre accord (par exemple, en vous inscrivant à notre newsletter)</li>
            <li><strong>Intérêt légitime</strong> : lorsque le traitement est nécessaire aux fins de nos intérêts légitimes (par exemple, pour améliorer notre site)</li>
            <li><strong>Obligation contractuelle</strong> : lorsque le traitement est nécessaire à l'exécution d'un contrat auquel vous êtes partie ou à l'exécution de mesures précontractuelles prises à votre demande</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Destinataires des données</h2>
          <p>
            Vos données personnelles peuvent être partagées avec :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Les membres autorisés de notre association qui ont besoin d'y accéder pour répondre à vos demandes</li>
            <li>Nos prestataires de services techniques qui nous aident à faire fonctionner notre site (hébergement, maintenance)</li>
            <li>Mailchimp pour la gestion de notre newsletter</li>
          </ul>
          <p>
            Nous ne vendons ni ne louons vos données personnelles à des tiers.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Durée de conservation</h2>
          <p>
            Nous conservons vos données personnelles pour la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, et conformément aux obligations légales :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Données des formulaires de contact : 3 ans à compter du dernier contact</li>
            <li>Données d'inscription à la newsletter : jusqu'à votre désinscription</li>
            <li>Données techniques et cookies : 13 mois maximum</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Droit d'accès</strong> : vous pouvez obtenir une copie des données personnelles que nous détenons sur vous</li>
            <li><strong>Droit de rectification</strong> : vous pouvez demander la correction des données inexactes</li>
            <li><strong>Droit à l'effacement</strong> : vous pouvez demander la suppression de vos données dans certaines circonstances</li>
            <li><strong>Droit à la limitation du traitement</strong> : vous pouvez demander la limitation du traitement de vos données</li>
            <li><strong>Droit à la portabilité</strong> : vous pouvez obtenir vos données dans un format structuré et lisible par machine</li>
            <li><strong>Droit d'opposition</strong> : vous pouvez vous opposer au traitement de vos données dans certaines circonstances</li>
            <li><strong>Droit de retirer votre consentement</strong> à tout moment, lorsque le traitement est basé sur le consentement</li>
          </ul>
          <p>
            Pour exercer ces droits, veuillez nous contacter à l'adresse email suivante : contact@delavenne.fr
          </p>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (www.cnil.fr).
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Cookies et technologies similaires</h2>
          <p>
            Notre site utilise des cookies et des technologies similaires pour améliorer votre expérience de navigation. Un cookie est un petit fichier texte qui est stocké sur votre appareil lors de votre visite sur notre site.
          </p>
          <p>
            Nous utilisons les types de cookies suivants :
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Cookies strictement nécessaires</strong> : indispensables au fonctionnement du site</li>
            <li><strong>Cookies de performance</strong> : pour améliorer le site en collectant des informations sur son utilisation</li>
            <li><strong>Cookies fonctionnels</strong> : pour mémoriser vos préférences</li>
          </ul>
          <p>
            Vous pouvez gérer les cookies via les paramètres de votre navigateur. Pour plus d'informations, consultez notre <Link href="/cookies" className="text-blue-600 hover:underline">Politique relative aux cookies</Link>.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Sécurité des données</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte, l'accès non autorisé, la divulgation, l'altération ou la destruction.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Transferts internationaux de données</h2>
          <p>
            Vos données peuvent être transférées et stockées sur des serveurs situés en dehors de l'Union européenne, notamment pour notre service de newsletter via Mailchimp. Dans ce cas, nous nous assurons que ces transferts sont effectués dans le respect de la réglementation applicable en matière de protection des données personnelles, notamment en utilisant des clauses contractuelles types approuvées par la Commission européenne.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Modifications de la politique de confidentialité</h2>
          <p>
            Nous pouvons modifier cette politique de confidentialité à tout moment. La version la plus récente sera toujours disponible sur notre site, avec la date de dernière mise à jour.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou vos données personnelles, veuillez nous contacter à l'adresse suivante :
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