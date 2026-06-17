"use client";

import { useState } from "react";
import { PillButton } from "@/components/pill-button";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-muted/30 p-12 text-center">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-brand-purple/10 text-2xl text-brand-purple">
          ✓
        </div>
        <h3 className="text-xl font-bold text-brand-charcoal">
          Message envoyé !
        </h3>
        <p className="mt-2 text-muted-foreground">
          Nous avons bien reçu votre demande et vous recontacterons
          prochainement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-brand-charcoal"
          >
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-brand-charcoal"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-brand-charcoal"
        >
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-2 block text-sm font-medium text-brand-charcoal"
        >
          Service concerné
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
        >
          <option value="">Sélectionnez un service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title} {service.titleEmphasis}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-brand-charcoal"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20"
        />
      </div>

      <PillButton type="submit" className="w-full justify-center sm:w-auto">
        Envoyer le message
      </PillButton>
    </form>
  );
}
