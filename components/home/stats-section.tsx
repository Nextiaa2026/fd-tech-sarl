import { siteConfig } from "@/lib/site";

const iconMap = {
  building: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 21H21M5 21V7L12 3L19 7V21M9 21V13H15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  hardhat: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 15V11C4 7.134 7.134 4 11 4H13C16.866 4 20 7.134 20 11V15M4 15H20M4 15V17C4 18.105 4.895 19 6 19H18C19.105 19 20 18.105 20 17V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  trophy: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 21H16M12 17V21M7 4H17V10C17 12.761 14.761 15 12 15C9.239 15 7 12.761 7 10V4ZM7 4H5C5 6.209 6.791 8 9 8M17 4H19C19 6.209 17.209 8 15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  layers: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function StatsSection() {
  return (
    <section className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mx-auto mb-12 max-w-3xl text-center text-xl font-semibold leading-relaxed text-brand-charcoal sm:text-2xl">
          {siteConfig.slogan}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-white p-6"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-brand-purple/10 text-brand-purple">
                {iconMap[stat.icon]}
              </div>
              <p className="text-3xl font-bold text-brand-charcoal">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
