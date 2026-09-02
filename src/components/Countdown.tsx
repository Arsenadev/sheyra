import { pad, type Remaining } from "@/lib/countdown";

const units: { key: keyof Remaining; label: string }[] = [
  { key: "days", label: "DAYS" },
  { key: "hours", label: "HOURS" },
  { key: "minutes", label: "MINUTES" },
  { key: "seconds", label: "SECONDS" },
];

export function Countdown({ remaining }: { remaining: Remaining | null }) {
  return (
    <div
      className="relative mx-auto w-full max-w-sm rounded-xl bg-paper px-3 py-5 shadow-paper"
      role="timer"
      aria-live="polite"
    >
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center">
        {units.map((u, i) => (
          <div key={u.key} className="contents">
            <div className="flex flex-col items-center">
              <span className="font-hand text-[2.6rem] leading-none tabular-nums text-pink-deep sm:text-5xl">
                {remaining ? pad(remaining[u.key]) : "--"}
              </span>
              {u.key === "days" && <span className="mt-1 h-0.5 w-10 rounded-full bg-pink" />}
              <span className="mt-2 font-body text-[10px] font-semibold tracking-wider text-ink-soft sm:text-xs">
                {u.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <span className="-mt-6 px-0.5 font-hand text-3xl text-pink sm:px-1">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
