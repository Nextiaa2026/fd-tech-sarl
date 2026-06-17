import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/lib/about";

type FaqSectionProps = {
  light?: boolean;
  className?: string;
};

export function FaqSection({ light, className }: FaqSectionProps) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          label="FAQ"
          title="Questions"
          emphasis="fréquentes"
          description="Retrouvez les réponses aux questions les plus courantes sur nos services et notre façon de travailler."
          light={light}
          className="mb-8"
        />

        <Accordion type="single" collapsible className="rounded-2xl border-border bg-white">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="px-4 py-4 text-sm font-medium text-brand-charcoal hover:no-underline sm:px-6 sm:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-sm leading-relaxed text-muted-foreground sm:px-6">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
