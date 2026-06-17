import Image from "next/image";
import { PillButton } from "@/components/pill-button";
import { WaveDivider } from "@/components/wave-divider";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-brand-charcoal">
      <Image
        src={siteConfig.hero.image}
        alt={siteConfig.hero.alt}
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/60 to-transparent" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-medium tracking-wide text-white/70">
            FD TECH CONSTRUCTION SERVICE SARL
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            La solidité d&apos;un{" "}
            <span className="font-serif italic">savoir-faire</span>, la sécurité
            de vos projets.
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-white/70">
            {siteConfig.description}
          </p>
          <PillButton href="/contact" variant="white">
            Discuter d&apos;un projet
          </PillButton>
        </div>

        <div className="absolute bottom-8 right-4 hidden rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md sm:right-8 lg:block">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {["A", "B", "C"].map((letter) => (
                <div
                  key={letter}
                  className="flex size-8 items-center justify-center rounded-full border-2 border-white/20 bg-brand-purple text-xs font-bold text-white"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">4.9/5</p>
              <p className="text-xs text-white/60">Avis clients</p>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fill="white" />
    </section>
  );
}
