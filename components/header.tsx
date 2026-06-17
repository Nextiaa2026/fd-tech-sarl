"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { Logo } from "@/components/logo";
import { PillButton } from "@/components/pill-button";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";

export function Header() {
  const navLinks = siteConfig.nav.filter(
    (item) => !("hasDropdown" in item && item.hasDropdown)
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {siteConfig.nav.map((item) =>
            "hasDropdown" in item && item.hasDropdown ? (
              <DropdownMenu key={item.href}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="gap-1 px-2 text-sm font-medium text-brand-charcoal hover:text-brand-purple"
                  >
                    Services
                    <HugeiconsIcon icon={ArrowDown01Icon} className="size-3.5" strokeWidth={2} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-72">
                  <DropdownMenuLabel>Nos services</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {services.map((service) => (
                    <DropdownMenuItem key={service.slug} asChild>
                      <Link href={`/services/${service.slug}`}>
                        <span className="font-medium">
                          {service.title} {service.titleEmphasis}
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/#services" className="text-brand-purple">
                      Voir tous les services
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-charcoal transition-colors hover:text-brand-purple"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <PillButton href="/contact" className="!px-5 !py-2.5 text-xs">
            Nous contacter
          </PillButton>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Ouvrir le menu"
            >
              <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Navigation mobile">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
              <p className="px-3 pt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </p>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-accent"
                >
                  {service.title} {service.titleEmphasis}
                </Link>
              ))}
              <div className="mt-6 px-3">
                <PillButton href="/contact" className="w-full justify-center">
                  Nous contacter
                </PillButton>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
