import Link from "next/link";
import { PillButton } from "@/components/pill-button";
import type { Service } from "@/lib/services";
import { getAdjacentServices } from "@/lib/services";

type ServiceDetailProps = {
  service: Service;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  const { prev, next } = getAdjacentServices(service.slug);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <p className="mb-2 text-sm font-medium text-brand-purple">
              {service.featureTag}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {service.longDescription}
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-bold text-brand-charcoal">
              Ce que nous proposons
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-brand-charcoal"
                >
                  <span className="mt-0.5 text-brand-purple">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-muted/30 p-6">
            <h3 className="mb-2 text-lg font-bold text-brand-charcoal">
              Besoin d&apos;un devis ?
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Notre équipe est disponible pour étudier votre projet et vous
              proposer une solution adaptée.
            </p>
            <PillButton href="/contact" className="w-full justify-center">
              Demander un devis
            </PillButton>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl items-center justify-between border-t border-border px-4 pt-8 sm:px-6 lg:px-8">
        {prev ? (
          <Link
            href={`/services/${prev.slug}`}
            className="group flex flex-col text-sm"
          >
            <span className="text-muted-foreground">Précédent</span>
            <span className="font-medium text-brand-charcoal group-hover:text-brand-purple">
              ← {prev.title} {prev.titleEmphasis}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/services/${next.slug}`}
            className="group flex flex-col text-right text-sm"
          >
            <span className="text-muted-foreground">Suivant</span>
            <span className="font-medium text-brand-charcoal group-hover:text-brand-purple">
              {next.title} {next.titleEmphasis} →
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}
