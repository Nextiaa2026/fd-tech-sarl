import Link from "next/link";
import { cn } from "@/lib/utils";

type PillButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "white" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export function PillButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: PillButtonProps) {
  const styles = cn(
    "inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition-all hover:gap-4",
    variant === "primary" &&
      "bg-brand-purple text-white hover:bg-brand-purple/90",
    variant === "white" &&
      "bg-white text-brand-charcoal hover:bg-white/90",
    variant === "outline" &&
      "border border-white/30 bg-transparent text-white hover:bg-white/10",
    className
  );

  const arrow = (
    <span
      className={cn(
        "flex size-7 items-center justify-center rounded-full",
        variant === "primary" && "bg-white/20",
        variant === "white" && "bg-brand-charcoal text-white",
        variant === "outline" && "bg-white/20"
      )}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
        {arrow}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
      {arrow}
    </button>
  );
}
