import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { teamMembers } from "@/lib/about";
import { cn } from "@/lib/utils";

export function TeamSection() {
  return (
    <section id="equipe" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Notre équipe"
            title="Des experts"
            emphasis="passionnés"
            description="Une équipe pluridisciplinaire dédiée à la réussite de vos projets, sur le terrain comme au bureau."
          />
          <Link
            href="/a-propos"
            className="shrink-0 text-sm font-medium text-brand-purple transition-colors hover:text-brand-purple/80"
          >
            En savoir plus sur nous →
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className={cn(
                "group overflow-hidden rounded-2xl border border-border bg-white transition-shadow hover:shadow-lg",
                teamMembers.length % 3 === 1 &&
                  index === teamMembers.length - 1 &&
                  "lg:col-start-2"
              )}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-xs text-brand-purple">
                  <span className="mr-1">•</span>
                  {member.location}
                </p>
                <h3 className="mt-1 text-lg font-bold text-brand-charcoal">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-muted-foreground">
                  {member.role}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
