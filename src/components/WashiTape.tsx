import { cn } from "@/lib/utils";

type Props = {
  color?: "pink" | "sky" | "sage" | "peach" | "lavender" | "kraft";
  pattern?: "plain" | "stripes" | "gingham" | "dots";
  className?: string;
};

const colors = {
  pink: "bg-pink-soft text-pink",
  sky: "bg-sky-soft text-sky",
  sage: "bg-sage-soft text-sage",
  peach: "bg-peach-soft text-peach",
  lavender: "bg-lavender-soft text-lavender",
  kraft: "bg-kraft text-peach",
};

const patterns = {
  plain: "",
  stripes:
    "[background-image:repeating-linear-gradient(90deg,currentColor_0_2px,transparent_2px_7px)]",
  gingham:
    "[background-image:linear-gradient(90deg,currentColor_0_5px,transparent_5px_10px),linear-gradient(currentColor_0_5px,transparent_5px_10px)] [background-size:10px_10px]",
  dots: "[background-image:radial-gradient(currentColor_1.2px,transparent_1.2px)] [background-size:7px_7px]",
};

/** Semi-transparent tape strip. Position it with className (absolute). */
export function WashiTape({ color = "pink", pattern = "plain", className }: Props) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-10 block h-6 w-20 opacity-80 shadow-[0_1px_2px_oklch(0.4_0.02_50/0.12)] [&]:[background-blend-mode:multiply]",
        colors[color],
        patterns[pattern],
        className,
      )}
      style={{ clipPath: "polygon(2% 0,98% 4%,100% 100%,0 96%)" }}
    />
  );
}
