import Image from "next/image";
import Link from "next/link";
import { PillButton } from "@/components/pill-button";
import { SectionHeading } from "@/components/section-heading";
import { WaveDivider } from "@/components/wave-divider";
import { services } from "@/lib/services";

export function ServicesPreviewSection() {
  return (
    <section id="services" className="relative bg-brand-charcoal">
      <WaveDivider position="top" fill="#1d1d1b" className="!h-12" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Nos services"
            title="Des solutions"
            emphasis="complètes"
            description="De la conception à la livraison, nous accompagnons chaque étape de vos projets de construction et d'immobilier."
            light
          />
          <PillButton href="/contact" variant="outline" className="shrink-0">
            En savoir plus
          </PillButton>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="space-y-4">
                <span className="text-6xl font-bold text-white/10">
                  {service.number}
                </span>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {service.title}{" "}
                  <span className="font-serif italic">
                    {service.titleEmphasis}
                  </span>
                </h3>
                <p className="text-white/60">{service.shortDescription}</p>
                <p className="text-sm font-medium text-brand-purple-70">
                  {service.featureTag}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-brand-purple-50"
                >
                  Voir le service
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider fill="white" />
    </section>
  );
}
