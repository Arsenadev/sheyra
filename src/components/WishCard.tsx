import { Heart, Smile, Sparkles, Star, Sun, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { WashiTape } from "./WashiTape";

const icons = { heart: Heart, smile: Smile, sparkles: Sparkles, star: Star, sun: Sun, users: Users };
export type WishIcon = keyof typeof icons;

const tones = [
  "bg-pink-soft text-pink-deep",
  "bg-sky-soft text-sky",
  "bg-sage-soft text-sage",
  "bg-peach-soft text-peach",
  "bg-lavender-soft text-lavender",
  "bg-pink-soft text-pink-deep",
];
const tapes = ["sky", "pink", "peach", "sage", "kraft", "lavender"] as const;

export function WishCard({ icon, text, index }: { icon: WishIcon; text: string; index: number }) {
  const Icon = icons[icon];
  const rot = [-1.5, 1.2, -0.8, 1.6, -1.2, 0.9][index % 6];
  return (
    <div
      className="relative rounded-2xl bg-paper p-5 pl-5 shadow-paper transition-transform duration-300 hover:-translate-y-1"
      style={{ transform: `rotate(${rot}deg)` }}
    >
      <WashiTape color={tapes[index % 6] ?? "pink"} pattern={index % 2 ? "stripes" : "dots"} className="-top-3 right-5 h-5 w-16 rotate-6" />
      <div className="flex items-start gap-4">
        <span className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-full", tones[index % 6])}>
          <Icon className="h-5 w-5" strokeWidth={2.2} />
        </span>
        <p className="min-w-0 pt-1.5 font-hand text-xl leading-snug text-ink">{text}</p>
      </div>
    </div>
  );
}
