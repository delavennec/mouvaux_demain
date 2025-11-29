export type Event = {
  date: string
  time: string
  title: string
  description: string
  location: string
  contact?: string
  type: string
}

export const mainEvent: Event = {
  date: "12 Septembre 2025",
  time: "18h30",
  title: "Réunion publique",
  description:
    "Retrouvez-nous le vendredi 12 septembre à 18h30 à la salle Courcol pour la première réunion publique de « Renouveau pour Mouvaux », suivie d'un verre de l'amitié. Ce sera l'occasion de présenter notre candidat Charles Delavenne et l'équipe « Renouveau pour Mouvaux » et d'échanger avec les Mouvallois sur les principaux axes de notre campagne.",
  location: "Salle Courcol, 29 rue Gallieni, 59420 Mouvaux",
  contact: "RenouveauPourMouvaux@gmail.com",
  type: "Réunion publique",
}

export const secondMainEvent: Event = {
  date: "17 Novembre 2025",
  time: "18h30",
  title: "Réunion publique",
  description:
    "Retrouvez-nous le lundi 17 novembre à 18h30 à la salle Courcol pour la deuxième réunion publique de « Renouveau pour Mouvaux », suivie d'un verre de l'amitié. Les Mouvallois et Mouvalloises ont eu l'occasion d'émettre leurs suggestions pour la ville et d'échanger avec le candidat Charles Delavenne. Nous avons également annoncé le lancement d'ateliers thématiques, visant à rassembler les habitants pour discuter des enjeux de notre ville, en particulier sur les thèmes de la sécurité, l'urbanisation, la culture, les seniors et l'éducation.",
  location: "Salle Courcol, 29 rue Gallieni, 59420 Mouvaux",
  contact: "RenouveauMouvaux@gmail.com",
  type: "Réunion publique",
}

export const futureEvents: Event[] = [
  {
    date: "15 Mai 2025",
    time: "19h00",
    title: "Réunion publique - Quartier Centre",
    description:
      "Échanges sur nos propositions pour améliorer la sécurité et les services de proximité dans le quartier centre de Mouvaux.",
    location: "Salle des fêtes, Mairie de Mouvaux",
    type: "Réunion publique",
  },
  {
    date: "18 Mai 2025",
    time: "14h00",
    title: "Atelier participatif - Transition écologique",
    description:
      "Construisons ensemble les solutions pour une Mouvaux plus verte et durable. Venez partager vos idées et propositions.",
    location: "Centre culturel Jacques Brel",
    type: "Atelier",
  },
  {
    date: "22 Mai 2025",
    time: "18h30",
    title: "Rencontre avec les associations",
    description:
      "Dialogue avec les acteurs associatifs locaux sur la vie culturelle, sportive et sociale de notre commune.",
    location: "Maison des associations",
    type: "Rencontre",
  },
]

export default mainEvent

export const ateliersOverview = {
  date: "",
  time: "",
  title: "Ateliers thématiques ouverts à tous",
  description:
    "Thèmes :\nSécurité\nEconomie / Attractivité / Entreprises / Commerce\nEnvironnement / Propreté / Cause animale / Urbanisme\nJeunesse / Sport / Education\nFamille / Santé / Seniors\nCulture / Citoyenneté / Evénements\n\nPour tout renseignement : RenouveauMouvaux@gmail.com",
  location: "",
  contact: "RenouveauMouvaux@gmail.com",
  type: "Atelier collectif",
}

export const atelierEvents: Event[] = [
  {
    date: "19 Décembre 2025",
    time: "18h30 - 20h30",
    title: "Atelier Sécurité",
    description: "Vendredi 19 décembre de 18h30 à 20h30\nMairie de Mouvaux (rendez-vous à l'entrée de l'école de musique)",
    location: "Mairie de Mouvaux",
    contact: "RenouveauMouvaux@gmail.com",
    type: "Atelier",
  },
  {
    date: "6 Décembre 2025",
    time: "14h30 - 16h30",
    title: "Atelier Economie / Attractivité / Entreprises / Commerce",
    description: "Samedi 6 décembre de 14h30 à 16h30\nMairie de Mouvaux (rendez-vous à l'entrée de l'école de musique)",
    location: "Mairie de Mouvaux",
    contact: "RenouveauMouvaux@gmail.com",
    type: "Atelier",
  },
  {
    date: "18 Décembre 2025",
    time: "18h30 - 20h30",
    title: "Atelier Environnement / Propreté / Cause animale / Urbanisme",
    description: "Jeudi 18 Décembre de 18h30 à 20h30\n10 rue Beethoven, Mouvaux",
    location: "10 rue Beethoven, Mouvaux",
    contact: "RenouveauMouvaux@gmail.com",
    type: "Atelier",
  },
  {
    date: "17 Décembre 2025",
    time: "18h30 - 20h30",
    title: "Atelier Jeunesse / Sport / Education",
    description: "Mercredi 17 Décembre de 18h30 à 20h30\n14 rue Franklin Roosevelt, Mouvaux",
    location: "14 rue Franklin Roosevelt, Mouvaux",
    contact: "RenouveauMouvaux@gmail.com",
    type: "Atelier",
  },
  {
    date: "11 Décembre 2025",
    time: "18h30 - 20h30",
    title: "Atelier Famille / Santé / Seniors",
    description: "Jeudi 11 Décembre de 18h30 à 20h30\n17 rue Lorthiois, Mouvaux",
    location: "17 rue Lorthiois, Mouvaux",
    contact: "RenouveauMouvaux@gmail.com",
    type: "Atelier",
  },
  {
    date: "20 Décembre 2025",
    time: "9h30 - 11h30",
    title: "Atelier Culture / Citoyenneté / Evénements",
    description: "Samedi 20 Décembre de 9h30 à 11h30\nMairie de Mouvaux (rendez-vous à l'entrée de l'école de musique)",
    location: "Mairie de Mouvaux",
    contact: "RenouveauMouvaux@gmail.com",
    type: "Atelier",
  },
]

