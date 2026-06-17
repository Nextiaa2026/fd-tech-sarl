import type { Metadata } from "next";
import { AboutPageHero } from "@/components/about/about-page-hero";
import { AboutStorySection } from "@/components/about/about-story-section";
import { FaqSection } from "@/components/faq-section";
import { ValuesSection } from "@/components/home/values-section";
import { TeamSection } from "@/components/home/team-section";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";
import { faqItems } from "@/lib/about";

export const metadata: Metadata = createPageMetadata({
  title: "À propos",
  description:
    "Découvrez l'histoire, les valeurs et l'équipe de FD-TECH Construction Service. Solidité, sécurité et excellence au service de vos projets.",
  path: "/a-propos",
  keywords: [
    "à propos",
    "équipe",
    "valeurs",
    "histoire",
    "entreprise construction",
  ],
});

export default function AboutPage() {
  const jsonLd = faqJsonLd(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutPageHero />
      <AboutStorySection />
      <ValuesSection />
      <TeamSection />
      <section id="faq" className="bg-muted/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FaqSection />
        </div>
      </section>
    </>
  );
}
