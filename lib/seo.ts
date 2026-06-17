import type { Metadata } from "next";
import { logos } from "@/lib/logos";
import { siteConfig } from "@/lib/site";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://fd-tech.fr";

export function getSiteUrl(path = ""): string {
  return `${siteUrl}${path}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  type = "website",
}: PageMetadataOptions): Metadata {
  const url = getSiteUrl(path);
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title,
    description,
    keywords: [
      "construction",
      "travaux publics",
      "immobilier",
      "FD-TECH",
      ...keywords,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteUrl,
    logo: getSiteUrl(logos.brand),
    description: siteConfig.description,
    slogan: siteConfig.slogan,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressCountry: "FR",
    },
  };
}

export function faqJsonLd(
  items: ReadonlyArray<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function serviceJsonLd(service: {
  title: string;
  titleEmphasis: string;
  shortDescription: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} ${service.titleEmphasis}`,
    description: service.shortDescription,
    provider: { "@type": "Organization", name: siteConfig.legalName },
    url: getSiteUrl(`/services/${service.slug}`),
  };
}
