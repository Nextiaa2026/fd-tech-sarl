import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { logos } from "@/lib/logos";

type LogoProps = {
  className?: string;
  /** "default" = white/light page backgrounds (header). "light" = dark backgrounds (footer). */
  variant?: "default" | "light";
};

export function Logo({ className, variant = "default" }: LogoProps) {
  const image = (
    <Image
      src={logos.brand}
      alt="FD-TECH Construction Service"
      width={120}
      height={34}
      className={cn(
        "w-auto",
        variant === "light" ? "h-9 sm:h-10" : "h-7 sm:h-8"
      )}
      priority
    />
  );

  return (
    <Link href="/" className={cn("inline-flex shrink-0", className)}>
      {variant === "light" ? (
        image
      ) : (
        <span className="rounded-md bg-brand-charcoal px-2 py-1">
          {image}
        </span>
      )}
    </Link>
  );
}
