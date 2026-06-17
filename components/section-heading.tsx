import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  emphasis: string;
  description?: string;
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  label,
  title,
  emphasis,
  description,
  light,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {label && (
        <p
          className={cn(
            "text-sm font-medium",
            light ? "text-white/70" : "text-brand-purple"
          )}
        >
          <span className="mr-1">•</span>
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-brand-charcoal"
        )}
      >
        {title}{" "}
        <span className="font-serif italic">{emphasis}</span>
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed",
            light ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
