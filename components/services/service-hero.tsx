import Image from "next/image";
import type { Service } from "@/lib/services";

type ServiceHeroProps = {
  service: Service;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[50vh] overflow-hidden bg-brand-charcoal">
      <Image
        src={service.image}
        alt={service.alt}
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/70 to-brand-charcoal/40" />

      <div className="relative mx-auto flex min-h-[50vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <span className="mb-4 text-sm font-medium text-brand-purple-70">
          Service {service.number}
        </span>
        <h1 className="max-w-3xl text-4xl font-bold text-white sm:text-5xl">
          {service.title}{" "}
          <span className="font-serif italic">{service.titleEmphasis}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">
          {service.shortDescription}
        </p>
      </div>
    </section>
  );
}
