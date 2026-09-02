import { useEffect, useState } from "react";
import { Lock, LockOpen } from "lucide-react";
import { Butterfly, Sparkle, Star } from "@/components/Doodles";
import { unlockText } from "@/data/birthday";
import { cn } from "@/lib/utils";

const sparkles = [
  { x: "20%", y: "30%", d: 0 },
  { x: "75%", y: "26%", d: 150 },
  { x: "14%", y: "62%", d: 300 },
  { x: "82%", y: "60%", d: 450 },
  { x: "50%", y: "18%", d: 600 },
  { x: "40%", y: "72%", d: 750 },
];

/** Short lock → open → glow → fade-out sequence. Calls onDone after ~3.2s. */
export function UnlockAnimation({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0); // 0 lock in, 1 open+glow, 2 text, 3 fade

  useEffect(() => {
    const t = [
      setTimeout(() => setStep(1), 700),
      setTimeout(() => setStep(2), 1300),
      setTimeout(() => setStep(3), 2600),
      setTimeout(onDone, 3200),
    ];
    return () => t.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-background transition-opacity duration-700",
        step === 3 && "opacity-0",
      )}
      aria-live="polite"
    >
      <Butterfly className={cn("absolute left-[12%] top-[28%] w-10 text-lavender transition-all duration-1000", step >= 1 ? "-translate-y-6 translate-x-3 opacity-100" : "opacity-0")} />
      <Butterfly className={cn("absolute right-[14%] top-[34%] w-8 -scale-x-100 text-sky transition-all duration-1000 delay-200", step >= 1 ? "-translate-y-4 -translate-x-3 opacity-100" : "opacity-0")} />
      <Star className={cn("absolute left-[22%] bottom-[30%] w-6 text-butter transition-all duration-700", step >= 1 ? "rotate-12 opacity-100" : "opacity-0")} />

      {sparkles.map((s, i) => (
        <Sparkle
          key={i}
          className={cn("absolute w-5 text-peach transition-all duration-500", step >= 1 ? "animate-twinkle opacity-100" : "scale-0 opacity-0")}
          style={{ left: s.x, top: s.y, transitionDelay: `${s.d}ms` }}
        />
      ))}

      <div
        className={cn(
          "relative grid h-24 w-24 place-items-center rounded-3xl bg-pink text-paper transition-all duration-700 animate-pop",
          step >= 1 && "animate-glow-pulse scale-110",
        )}
      >
        <Lock className={cn("absolute h-11 w-11 transition-all duration-500", step >= 1 ? "rotate-12 scale-75 opacity-0" : "opacity-100")} strokeWidth={2.4} />
        <LockOpen className={cn("absolute h-11 w-11 transition-all duration-500", step >= 1 ? "opacity-100" : "-rotate-12 scale-75 opacity-0")} strokeWidth={2.4} />
      </div>

      <p
        className={cn(
          "mt-8 px-6 text-center font-hand text-2xl text-ink transition-all duration-700",
          step >= 2 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        )}
      >
        {unlockText}
      </p>
    </div>
  );
}
