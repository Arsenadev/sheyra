import { UNLOCK_TIMESTAMP } from "@/data/birthday";

export type Remaining = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

/** Remaining time until the unlock moment, computed from real UTC timestamps
 *  (the target is fixed to Asia/Jakarta via its +07:00 offset). */
export function getRemaining(now: number = Date.now()): Remaining {
  const total = Math.max(0, UNLOCK_TIMESTAMP - now);
  const s = Math.floor(total / 1000);
  return {
    total,
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export const isUnlocked = (now: number = Date.now()) => now >= UNLOCK_TIMESTAMP;

export const pad = (n: number) => String(n).padStart(2, "0");
