import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export function ProjectsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projets récents"
          title="Nos dernières"
          emphasis="réalisations"
          description="Découvrez une sélection de nos projets récents à travers l'Afrique et au-delà."
          className="mb-12"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.projects.map((project) => (
            <article key={project.name} className="group">
              <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <p className="text-sm text-brand-purple">
                <span className="mr-1">•</span>
                {project.location}
              </p>
              <h3 className="mt-1 text-lg font-bold text-brand-charcoal">
                {project.name}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
