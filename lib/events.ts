export type Event = {
  id: string
  date: string
  time: string
  title: string
  description: string
  location: string
  contact?: string
  type: string
}

export const mainEvent: Event = {
  id: "reunion-2025-09-12",
  date: "12 Septembre 2025",
  time: "18h30",
  title: "Réunion publique",
  description:
    "Retrouvez-nous le vendredi 12 septembre à 18h30 à la salle Courcol pour la première réunion publique de « Renouveau pour Mouvaux », suivie d'un verre de l'amitié. Ce sera l'occasion de présenter notre candidat Charles Delavenne et l'équipe « Renouveau pour Mouvaux » et d'échanger avec les Mouvallois sur les principaux axes de notre campagne.",
  location: "Salle Courcol, 29 rue Gallieni, 59420 Mouvaux",
  contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
  type: "Réunion publique",
}

export const secondMainEvent: Event = {
  id: "reunion-2025-11-17",
  date: "17 Novembre 2025",
  time: "18h30",
  title: "Réunion publique",
  description:
    "Retrouvez-nous le lundi 17 novembre à 18h30 à la salle Courcol pour la deuxième réunion publique de « Renouveau pour Mouvaux », suivie d'un verre de l'amitié. Les Mouvallois et Mouvalloises ont eu l'occasion d'émettre leurs suggestions pour la ville et d'échanger avec le candidat Charles Delavenne. Nous avons également annoncé le lancement d'ateliers thématiques, visant à rassembler les habitants pour discuter des enjeux de notre ville, en particulier sur les thèmes de la sécurité, l'urbanisation, la culture, les seniors et l'éducation.",
  location: "Salle Courcol, 29 rue Gallieni, 59420 Mouvaux",
  contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
  type: "Réunion publique",
}

export const futureEvents: Event[] = [
  {
    id: "reunion-2026-01-24",
    date: "24 Janvier 2026",
    time: "18h30",
    title: "Réunion publique",
    description:
      "Nous nous faisons un plaisir de vous retrouver pour notre troisième réunion publique, qui se déroulera sur le thème de la sécurité.",
    location: "Salle Bercker, 574 rue de Tourcoing",
    contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
    type: "Réunion publique",
  },
]

export default mainEvent

export const ateliersOverview = {
  id: "ateliers-overview",
  date: "",
  time: "",
  title: "Ateliers thématiques ouverts à tous",
  description:
    "Thèmes :\nSécurité\nEconomie / Attractivité / Entreprises / Commerce\nEnvironnement / Propreté / Cause animale / Urbanisme\nJeunesse / Sport / Education\nFamille / Santé / Seniors\nCulture / Citoyenneté / Evénements\n\nPour tout renseignement : RenouveauMouvaux@gmail.com — 06 89 31 65 48",
  location: "",
  contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
  type: "Atelier collectif",
}

export const atelierEvents: Event[] = [
  {
    id: "atelier-securite-2025-12-19",
    date: "19 Décembre 2025",
    time: "18h30 - 20h30",
    title: "Atelier Sécurité",
    description: "Vendredi 19 décembre de 18h30 à 20h30\nMairie de Mouvaux (rendez-vous à l'entrée de l'école de musique)",
    location: "Mairie de Mouvaux",
    contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
    type: "Atelier",
  },
  {
    id: "atelier-economie-2025-12-06",
    date: "6 Décembre 2025",
    time: "14h30 - 16h30",
    title: "Atelier Economie / Attractivité / Entreprises / Commerce",
    description: "Samedi 6 décembre de 14h30 à 16h30\nMairie de Mouvaux (rendez-vous à l'entrée de l'école de musique)",
    location: "Mairie de Mouvaux",
    contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
    type: "Atelier",
  },
  {
    id: "atelier-environnement-2025-12-18",
    date: "18 Décembre 2025",
    time: "18h30 - 20h30",
    title: "Atelier Environnement / Propreté / Cause animale / Urbanisme",
    description: "Jeudi 18 Décembre de 18h30 à 20h30\n10 rue Beethoven, Mouvaux",
    location: "10 rue Beethoven, Mouvaux",
    contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
    type: "Atelier",
  },
  {
    id: "atelier-jeunesse-2025-12-17",
    date: "17 Décembre 2025",
    time: "18h30 - 20h30",
    title: "Atelier Jeunesse / Sport / Education",
    description: "Mercredi 17 Décembre de 18h30 à 20h30\n14 rue Franklin Roosevelt, Mouvaux",
    location: "14 rue Franklin Roosevelt, Mouvaux",
    contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
    type: "Atelier",
  },
  {
    id: "atelier-famille-2025-12-11",
    date: "11 Décembre 2025",
    time: "18h30 - 20h30",
    title: "Atelier Famille / Santé / Seniors",
    description: "Jeudi 11 Décembre de 18h30 à 20h30\n17 rue Lorthiois, Mouvaux",
    location: "17 rue Lorthiois, Mouvaux",
    contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
    type: "Atelier",
  },
  {
    id: "atelier-culture-2025-12-20",
    date: "20 Décembre 2025",
    time: "9h30 - 11h30",
    title: "Atelier Culture / Citoyenneté / Evénements",
    description: "Samedi 20 Décembre de 9h30 à 11h30\nMairie de Mouvaux (rendez-vous à l'entrée de l'école de musique)",
    location: "Mairie de Mouvaux",
    contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
    type: "Atelier",
  },
  {
    id: "atelier-commerce-2026-01-15",
    date: "15 Janvier 2026",
    time: "18h30",
    title: "Atelier Commerce / Entreprise / Economie / Attractivité",
    description: "Jeudi 15 Janvier de 18h30\nMairie de Mouvaux",
    location: "Mairie de Mouvaux",
    contact: "RenouveauMouvaux@gmail.com — 06 89 31 65 48",
    type: "Atelier",
  },
]

