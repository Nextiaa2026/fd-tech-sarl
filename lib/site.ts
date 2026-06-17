export const siteConfig = {
  name: "FD-TECH Construction Service",
  legalName: "FD TECH CONSTRUCTION SERVICE SARL",
  slogan:
    "La solidité d'un savoir-faire, la sécurité de vos projets.",
  description:
    "Entreprise de construction, travaux publics, immobilier et prestations de services au service de vos projets.",
  contact: {
    email: "contact@fd-tech.fr",
    phone: "+33 1 00 00 00 00",
    address: "123 Avenue des Chantiers, 75000 Paris, France",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fd-tech.fr",
  ogImage:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=630&fit=crop&q=80",
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/a-propos" },
    { label: "Services", href: "/#services", hasDropdown: true },
    { label: "Équipe", href: "/#equipe" },
    { label: "Contact", href: "/contact" },
  ],
  stats: [
    {
      value: "500+",
      label: "Projets réalisés",
      icon: "building" as const,
    },
    {
      value: "120+",
      label: "Professionnels qualifiés",
      icon: "hardhat" as const,
    },
    {
      value: "15+",
      label: "Années d'excellence",
      icon: "trophy" as const,
    },
    {
      value: "50K+",
      label: "Tonnes de matériaux",
      icon: "layers" as const,
    },
  ],
  projects: [
    {
      location: "Abidjan, Côte d'Ivoire",
      name: "Résidence Les Palmiers",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85&auto=format&fit=crop",
      alt: "Villa moderne avec piscine",
    },
    {
      location: "Dakar, Sénégal",
      name: "Centre Commercial Horizon",
      image:
        "https://images.unsplash.com/photo-1486406146928-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop",
      alt: "Immeuble de bureaux moderne en verre",
    },
    {
      location: "Douala, Cameroun",
      name: "Pont Urbain Nord",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=85&auto=format&fit=crop",
      alt: "Chantier de construction de pont",
    },
  ],
  hero: {
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80",
    alt: "Ingénieur africain en casque de sécurité examinant des plans sur un chantier de construction",
  },
  about:
    "FD-TECH Construction Service allie expertise technique, rigueur et engagement pour mener à bien vos projets de construction, d'immobilier et de travaux publics. Notre équipe pluridisciplinaire garantit des réalisations durables, conformes aux normes et livrées dans les délais.",
} as const;
