import Image from "next/image";
import { PillButton } from "@/components/pill-button";
import { siteConfig } from "@/lib/site";

export function BuildingBannerSection() {
  const { buildingBanner } = siteConfig;

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative h-[75vh] min-h-[480px] w-full">
        <Image
          src={buildingBanner.image}
          alt={buildingBanner.alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Fade toward bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white from-20% via-white/80 to-transparent" />
      </div>

      <div className="relative mx-auto -mt-32 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-2xl space-y-5">
          <p className="text-sm font-medium tracking-wide text-brand-purple">
            FD-TECH Construction Service
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-brand-charcoal sm:text-4xl lg:text-5xl">
            {buildingBanner.title}{" "}
            <span className="font-serif italic text-brand-purple">
              {buildingBanner.titleEmphasis}
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {buildingBanner.description}
          </p>
          <PillButton href="/#services">Découvrir nos services</PillButton>
        </div>
      </div>
    </section>
  );
}
