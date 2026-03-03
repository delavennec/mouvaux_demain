import Image from "next/image"

const colistiers = [
  { id: 1, nom: "Charles DELAVENNE", profession: "Avocat, tête de liste", photo: "Charles Delavenne 1.webp" },
  { id: 2, nom: "Marycke CUYPERS", profession: "Chef de projet, grande enseigne spécialisée, conseillère municipale", photo: "Maryke Cuypers 1.webp" },
  { id: 3, nom: "Benjamin LEPLAT", profession: "Consultant web digital", photo: "benjamin leplat.webp" },
  { id: 4, nom: "Diane DUPONT", profession: "Gestion de patrimoine", photo: "Diane Dupont 1.webp" },
  { id: 5, nom: "Stéphane LEBON", profession: "Gérant de société, conseiller municipal", photo: "Stéphane Lebon 1.webp" },
  { id: 6, nom: "Véronique CANONNE", profession: "Aide soignante, conseillère municipale", photo: "Véronique Canonne 1.webp" },
  { id: 7, nom: "Hughes BEAUDOUIN", profession: "Conseiller presse, Parlement européen", photo: "Hughes Beaudouin 1.webp" },
  { id: 8, nom: "Vanessa GASNET", profession: "Responsable agence ressources humaines, présidente d'association", photo: "Vanessa Gasnet 1.webp" },
  { id: 9, nom: "Goeffrey GILLES", profession: "Ingénieur produit", photo: "Goeffrey Gilles.webp" },
  { id: 10, nom: "Florentine DELESALLE", profession: "Responsable marketing & communication", photo: "florentine delesalle.webp" },
  { id: 11, nom: "Bertrand MAUX", profession: "Gérant de société", photo: "bertrand maux.webp" },
  { id: 12, nom: "Marie-Claire CERVETO", profession: "Inspectrice finances publiques", photo: "marie claire cerveto.webp" },
  { id: 13, nom: "Olivier BASTARD DE CRISNAY", profession: "Chef de produit", photo: "olivier crisnay.webp" },
  { id: 14, nom: "Véronique ROSSETTI", profession: "Enseignante", photo: "Véronique Rossetti.webp" },
  { id: 15, nom: "Christian DELEU", profession: "Retraité, cadre banque, conseiller de quartier Les Francs/Vert Pré", photo: "Christian Deleu 1.webp" },
  { id: 16, nom: "Pascaline BAVIERE", profession: "Déléguée médicale, industrie pharmaceutique", photo: "pascaline baviere.webp" },
  { id: 17, nom: "Michel SAILLIOT", profession: "Chef d'entreprise", photo: "Michel Saillot 1.webp" },
  { id: 18, nom: "Annie SELOSSE", profession: "Retraitée, médecin anesthésiste", photo: "Annie Pannecoucke 1.webp" },
  { id: 19, nom: "Jean Jacques LECLERCQ", profession: "Retraité, cadre commercial", photo: "Jean-Jacques Leclercq 1.webp" },
  { id: 20, nom: "Germaine HERVEIN", profession: "Retraitée, professeur d'histoire, conseillère Triez-Vauban", photo: "Germaine Hervein.webp" },
  { id: 21, nom: "Thierry SALINAS", profession: "Directeur sécurité, grande distribution", photo: "Thierry Salinas 1.webp" },
  { id: 22, nom: "Rose-Lyne AUBERT", profession: "Retraitée, cadre textile, conseillère de quartier Les Francs/Vert Pré", photo: "Rose-Lyne Aubert.webp" },
  { id: 23, nom: "Antoine DANEL", profession: "Retraité, cadre informatique, président d'association", photo: "Antoine Danel 1.webp" },
  { id: 24, nom: "Katy AUSLOOS", profession: "Retraitée, secteur bancaire", photo: "Katy Ausloos 1.webp" },
  { id: 25, nom: "Christophe LEMAIRE", profession: "Expert ingénierie solaire hybride", photo: "christophe lemaire.webp" },
  { id: 26, nom: "Charlotte DE LA FOUCHARDIERE", profession: "Retraitée, responsable communication", photo: "Charlotte De la Fouchardière 1.webp" },
  { id: 27, nom: "Mario METTA", profession: "Consultant formateur", photo: "Mario Metta.webp" },
  { id: 28, nom: "Dorothée DELMOTTE", profession: "Chargée de développement", photo: "Dorothée DELMOTTE.webp" },
  { id: 29, nom: "Hervé PANNECOUCKE", profession: "Expert comptable, commissaire aux comptes", photo: "Hervé Pannecoucke 1.webp" },
  { id: 30, nom: "Mélodie TERNYNCK", profession: "Office manager", photo: "mélodie ternyncke.webp" },
  { id: 31, nom: "Pierre DELOMTTE", profession: "Cadre commercial, secteur médical", photo: "Pierre Delmotte 1.webp" },
  { id: 32, nom: "Annie MILLECAMPS", profession: "Retraitée, enseignante, présidente d'association", photo: "Annie Millecamps.webp" },
  { id: 33, nom: "Gérard SIMON", profession: "Retraité, fonction publique", photo: "Gérard Simon.webp" },
  { id: 34, nom: "Marion CARISSIMO", profession: "Retraitée, enseignement catholique, conseillère Mouvaux-Centre", photo: "Marion Carissimo 1.webp" },
  { id: 35, nom: "Daniel FLORIN", profession: "Retraité, responsable études industrielles, conseiller de quartier Centre/Mirabeau", photo: "Daniel Florin 1.webp" },
]

export default function NotreListePage() {
  return (
    <div className="min-h-screen py-8">
      <style>{`
        .colistier-card-image {
          position: relative;
        }
        .colistier-card-image::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 9px;
          background: linear-gradient(to right, #E0F2FE, #1E3A8A);
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Notre Liste</h1>
          <p className="text-xl text-blue-600 font-medium">Les 35 femmes et hommes engagés pour Mouvaux</p>
        </div>

        {/* Grid of colistiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {colistiers.map((colistier) => (
            <div key={colistier.id} className="flex flex-col items-center text-center">
              {/* Photo */}
              <div className="w-56 h-[244px] mb-4 rounded-lg shadow-[14px_24px_52px_rgba(30,58,138,0.55)]">
                <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center colistier-card-image">
                  {colistier.photo ? (
                    <Image
                      src={`/colistiers/${colistier.photo}`}
                      alt={colistier.nom}
                      width={250}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">Photo non disponible</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="w-56 bg-gradient-to-b from-blue-50 to-blue-100/60 border border-blue-100 rounded-lg px-3 py-3">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{colistier.nom}</h3>
                <p className="text-sm text-gray-600">{colistier.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
