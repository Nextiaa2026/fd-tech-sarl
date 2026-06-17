import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
};

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-sm font-medium tracking-wide",
        light ? "text-white/70" : "text-brand-purple",
        className
      )}
    >
      <span className="mr-1">•</span>
      {children}
    </p>
  );
}
