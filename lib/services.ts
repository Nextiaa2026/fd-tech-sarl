export type Service = {
  slug: string;
  number: string;
  title: string;
  titleEmphasis: string;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  featureTag: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    slug: "batiment-et-travaux-publics",
    number: "01",
    title: "Bâtiment et",
    titleEmphasis: "Travaux Publics",
    shortDescription:
      "Construction d'infrastructures, routes, ouvrages d'art et bâtiments publics avec une expertise reconnue.",
    longDescription:
      "Nous réalisons des projets de bâtiment et de travaux publics de toute envergure : voiries, réseaux, ouvrages hydrauliques et bâtiments administratifs. Notre maîtrise des normes techniques et notre organisation rigoureuse assurent la qualité et la pérennité de chaque ouvrage.",
    highlights: [
      "Études et conception d'ouvrages",
      "Terrassement et fondations spéciales",
      "Voiries et réseaux divers",
      "Gestion de chantier clé en main",
    ],
    featureTag: "Infrastructures durables",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=85&auto=format&fit=crop",
    alt: "Chantier de travaux publics avec grues et structures en béton",
  },
  {
    slug: "immobilier",
    number: "02",
    title: "Solutions",
    titleEmphasis: "Immobilières",
    shortDescription:
      "Promotion, acquisition et gestion de biens immobiliers résidentiels et commerciaux.",
    longDescription:
      "Notre pôle immobilier accompagne investisseurs et particuliers dans leurs projets : promotion immobilière, conseil en investissement et gestion de patrimoine. Nous sélectionnons des emplacements stratégiques et des programmes à forte valeur ajoutée.",
    highlights: [
      "Promotion immobilière",
      "Conseil en investissement",
      "Gestion locative",
      "Évaluation et expertise",
    ],
    featureTag: "Patrimoine de qualité",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=85&auto=format&fit=crop",
    alt: "Maison moderne avec clés remises par un agent immobilier",
  },
  {
    slug: "vente-de-terrain",
    number: "03",
    title: "Vente de",
    titleEmphasis: "Terrain",
    shortDescription:
      "Parcelles viabilisées et terrains constructibles sélectionnés pour vos projets résidentiels ou commerciaux.",
    longDescription:
      "Nous proposons une sélection de terrains constructibles, viabilisés et conformes aux plans d'urbanisme. Notre équipe vous guide dans les démarches administratives et vous aide à choisir l'emplacement idéal pour votre projet.",
    highlights: [
      "Terrains viabilisés",
      "Études de sol et faisabilité",
      "Accompagnement administratif",
      "Emplacements stratégiques",
    ],
    featureTag: "Terrains sélectionnés",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=85&auto=format&fit=crop",
    alt: "Vaste terrain constructible avec vue sur la campagne",
  },
  {
    slug: "location",
    number: "04",
    title: "Location de",
    titleEmphasis: "Biens",
    shortDescription:
      "Location de logements, locaux commerciaux et espaces professionnels adaptés à vos besoins.",
    longDescription:
      "Notre service de location met à disposition des biens résidentiels et professionnels soigneusement entretenus. Nous assurons un suivi rigoureux et une relation de confiance avec locataires et propriétaires.",
    highlights: [
      "Logements résidentiels",
      "Locaux commerciaux",
      "Bureaux et espaces pro",
      "Gestion locative complète",
    ],
    featureTag: "Biens entretenus",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1600&q=85&auto=format&fit=crop",
    alt: "Appartement moderne et lumineux meublé",
  },
  {
    slug: "construction",
    number: "05",
    title: "Projets de",
    titleEmphasis: "Construction",
    shortDescription:
      "Construction neuve de bâtiments résidentiels, commerciaux et industriels, de la conception à la livraison.",
    longDescription:
      "De la conception architecturale à la livraison des clés, nous pilotons l'ensemble de vos projets de construction neuve. Nos équipes coordonnent corps de métier, respectent les délais et garantissent un niveau de finition irréprochable.",
    highlights: [
      "Construction résidentielle",
      "Bâtiments commerciaux",
      "Structures industrielles",
      "Suivi qualité et sécurité",
    ],
    featureTag: "Exécution maîtrisée",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85&auto=format&fit=crop",
    alt: "Ouvriers africains sur un chantier de construction en structure métallique",
  },
  {
    slug: "prestation-de-service",
    number: "06",
    title: "Prestation de",
    titleEmphasis: "Service",
    shortDescription:
      "Services techniques, maintenance, rénovation et expertise au service de vos installations.",
    longDescription:
      "Nous proposons des prestations de service sur mesure : maintenance préventive, rénovation, expertise technique et assistance à maîtrise d'ouvrage. Nos techniciens qualifiés interviennent rapidement pour garantir le bon fonctionnement de vos équipements et bâtiments.",
    highlights: [
      "Maintenance et entretien",
      "Rénovation et réhabilitation",
      "Expertise technique",
      "Assistance à maîtrise d'ouvrage",
    ],
    featureTag: "Intervention rapide",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=85&auto=format&fit=crop",
    alt: "Architecte examinant des plans de construction sur table",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAdjacentServices(slug: string): {
  prev: Service | null;
  next: Service | null;
} {
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? services[index - 1] : null,
    next: index < services.length - 1 ? services[index + 1] : null,
  };
}
