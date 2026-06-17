import Link from "next/link";
import { Logo } from "@/components/logo";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <Logo variant="light" />
            <p className="text-sm leading-relaxed text-white/60">
              {siteConfig.slogan}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Navigation
            </h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Entreprise
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/a-propos"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/#equipe"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos#faq"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {service.title} {service.titleEmphasis}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>{siteConfig.contact.address}</li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {siteConfig.legalName}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
