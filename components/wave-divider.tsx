import { cn } from "@/lib/utils";

type WaveDividerProps = {
  position?: "top" | "bottom";
  fill?: string;
  className?: string;
};

export function WaveDivider({
  position = "bottom",
  fill = "white",
  className,
}: WaveDividerProps) {
  return (
    <div
      className={cn(
        "pointer-events-none relative h-16 w-full overflow-hidden leading-none",
        position === "top" && "-mt-px rotate-180",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,64 L0,64 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
