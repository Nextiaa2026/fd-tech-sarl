import type { Metadata } from "next";
import { AboutSection } from "@/components/home/about-section";
import { BuildingBannerSection } from "@/components/home/building-banner-section";
import { ContactCtaSection } from "@/components/home/contact-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesPreviewSection } from "@/components/home/services-preview-section";
import { StatsSection } from "@/components/home/stats-section";
import { TeamSection } from "@/components/home/team-section";
import { ValuesSection } from "@/components/home/values-section";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Accueil",
  description: siteConfig.description,
  path: "/",
  keywords: [
    "construction",
    "travaux publics",
    "immobilier",
    "bâtiment",
    "Afrique",
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <StatsSection />
      <ServicesPreviewSection />
      <ProjectsSection />
      <BuildingBannerSection />
      <TeamSection />
      <ContactCtaSection />
    </>
  );
}
