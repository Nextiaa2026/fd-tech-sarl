import Image from "next/image";
import { PillButton } from "@/components/pill-button";
import { aboutContent } from "@/lib/about";

export function AboutStorySection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-brand-charcoal sm:text-4xl">
              Qui sommes-<span className="font-serif italic">nous</span> ?
            </h2>
            {aboutContent.story.map((paragraph) => (
              <p
                key={paragraph.slice(0, 30)}
                className="text-base leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-brand-purple/10 bg-brand-purple/5 p-6">
                <h3 className="font-bold text-brand-charcoal">Notre mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {aboutContent.mission}
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted/30 p-6">
                <h3 className="font-bold text-brand-charcoal">Notre vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {aboutContent.vision}
                </p>
              </div>
            </div>

            <PillButton href="/contact">Nous contacter</PillButton>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={aboutContent.storyImage}
              alt={aboutContent.storyImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
