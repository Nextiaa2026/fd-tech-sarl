import Image from "next/image";
import { SectionLabel } from "@/components/section-label";
import { siteConfig } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1541976590-713941681591?w=1600&q=85&auto=format&fit=crop"
            alt="Bâtiment en construction avec échafaudages"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <SectionLabel>À propos</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight text-brand-charcoal sm:text-4xl">
            Engagés pour redéfinir les{" "}
            <span className="font-serif italic">standards</span> de la
            construction
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            {siteConfig.about}
          </p>
        </div>
      </div>
    </section>
  );
}
