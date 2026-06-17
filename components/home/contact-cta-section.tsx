import { PillButton } from "@/components/pill-button";
import { WaveDivider } from "@/components/wave-divider";

export function ContactCtaSection() {
  return (
    <section className="relative bg-brand-purple">
      <WaveDivider position="top" fill="#70147a" className="!h-12" />

      <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Prêt à lancer votre{" "}
          <span className="font-serif italic">projet</span> ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Contactez notre équipe pour discuter de vos besoins en construction,
          immobilier ou travaux publics.
        </p>
        <div className="mt-8">
          <PillButton href="/contact" variant="white">
            Demander un devis
          </PillButton>
        </div>
      </div>
    </section>
  );
}
