import Image from "next/image";
import { aboutContent } from "@/lib/about";

export function AboutPageHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-brand-charcoal">
      <Image
        src={aboutContent.hero.image}
        alt={aboutContent.hero.alt}
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-brand-charcoal/60 to-brand-charcoal/90" />

      <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium tracking-wide text-brand-purple-70">
          À propos de FD-TECH
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {aboutContent.hero.title}{" "}
          <span className="font-serif italic">{aboutContent.hero.emphasis}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          {aboutContent.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
