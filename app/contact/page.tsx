import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contactez FD-TECH Construction Service pour discuter de votre projet de construction, immobilier ou travaux publics. Devis gratuit sous 48h.",
  path: "/contact",
  keywords: ["contact", "devis", "rendez-vous", "formulaire"],
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Contact"
            title="Parlons de votre"
            emphasis="projet"
            description="Remplissez le formulaire ci-dessous et notre équipe vous recontactera dans les plus brefs délais."
            light
          />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-xl font-bold text-brand-charcoal">
                Nos coordonnées
              </h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-brand-purple" aria-hidden="true">📍</span>
                  <address className="not-italic">
                    {siteConfig.contact.address}
                  </address>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-purple" aria-hidden="true">📞</span>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                    className="hover:text-brand-purple"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-purple" aria-hidden="true">✉️</span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-brand-purple"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-muted/50 p-6">
              <p className="text-sm font-medium text-brand-charcoal">
                {siteConfig.legalName}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {siteConfig.slogan}
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
