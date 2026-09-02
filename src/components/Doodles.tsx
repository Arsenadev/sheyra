import type { CSSProperties, SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export const Cloud = (p: P) => (
  <svg viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18 34h30a9 9 0 0 0 1-18 12 12 0 0 0-23-3 9 9 0 0 0-8 21Z" />
  </svg>
);

export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" {...p}>
    <path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.5 6.7 19.4l1.2-6L3.4 9.3l6-.7L12 3Z" />
  </svg>
);

export const Sparkle = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2c.6 5.5 2.5 7.4 8 8-5.5.6-7.4 2.5-8 8-.6-5.5-2.5-7.4-8-8 5.5-.6 7.4-2.5 8-8Z" />
  </svg>
);

export const Heart = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" {...p}>
    <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z" />
  </svg>
);

export const HeartFilled = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10Z" />
  </svg>
);

export const Bow = (p: P) => (
  <svg viewBox="0 0 64 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M32 20c-6-8-14-12-22-8-4 2-4 10 0 14 6 4 16-2 22-6Zm0 0c6-8 14-12 22-8 4 2 4 10 0 14-6 4-16-2-22-6Z" />
    <circle cx="32" cy="20" r="3.5" />
    <path d="M28 24l-4 12M36 24l4 12" />
  </svg>
);

export const Flower = (p: P) => (
  <svg viewBox="0 0 48 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
    <path d="M24 30v30" />
    <path d="M24 46c-8 0-12-6-12-10 6 0 12 4 12 10ZM24 52c8 0 12-6 12-10-6 0-12 4-12 10Z" />
    <path d="M14 20c0-8 4-14 10-14s10 6 10 14c0 6-4 10-10 10s-10-4-10-10Z" />
    <path d="M18 14c2 4 4 6 6 6s4-2 6-6" />
  </svg>
);

export const Sprig = (p: P) => (
  <svg viewBox="0 0 40 80" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
    <path d="M20 78V10" />
    <path d="M20 22c-8-2-12-8-12-14 6 0 12 6 12 14ZM20 36c-8-2-12-8-12-14 6 0 12 6 12 14ZM20 50c-8-2-12-8-12-14 6 0 12 6 12 14ZM20 30c8-2 12-8 12-14-6 0-12 6-12 14ZM20 44c8-2 12-8 12-14-6 0-12 6-12 14ZM20 58c8-2 12-8 12-14-6 0-12 6-12 14Z" />
  </svg>
);

export const Butterfly = (p: P) => (
  <svg viewBox="0 0 48 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" {...p}>
    <path d="M24 12c-4-8-16-12-20-6-3 5 2 12 8 14-6 2-10 8-6 13 4 5 14 0 18-8 4 8 14 13 18 8 4-5 0-11-6-13 6-2 11-9 8-14-4-6-16-2-20 6Z" />
    <path d="M24 10v22M20 6l-3-4M28 6l3-4" strokeLinecap="round" />
  </svg>
);

export const SmileyFace = (p: P) => (
  <svg viewBox="0 0 40 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
    <circle cx="12" cy="6" r="1.4" fill="currentColor" />
    <circle cx="28" cy="6" r="1.4" fill="currentColor" />
    <path d="M12 14c4 5 12 5 16 0" />
  </svg>
);

export const Dot = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <span className={`absolute block h-2 w-2 rounded-full ${className ?? ""}`} style={style} />
);

/** Motion lines like the reference: "( ( (" beside an element */
export const MotionLines = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" {...p}>
    <path d="M4 12h5M6 6l3 3M6 18l3-3" />
  </svg>
);

/** Ambient scattered decorations used behind sections. */
export function AmbientDoodles({ variant = "a" }: { variant?: "a" | "b" | "c" }) {
  if (variant === "b")
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Butterfly className="absolute left-[6%] top-[8%] w-9 text-lavender animate-drift" />
        <Star className="absolute right-[8%] top-[14%] w-5 text-butter animate-twinkle" />
        <Cloud className="absolute right-[4%] top-[42%] w-14 text-sky animate-float-slow" />
        <Heart className="absolute left-[8%] top-[60%] w-5 text-pink animate-float" />
        <Sparkle className="absolute left-[40%] top-[88%] w-4 text-peach animate-twinkle [animation-delay:1s]" />
        <Dot className="bg-sage left-[20%] top-[30%]" />
        <Dot className="bg-pink right-[18%] top-[72%]" />
        <Dot className="bg-butter left-[70%] top-[20%] h-1.5 w-1.5" />
      </div>
    );
  if (variant === "c")
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Flower className="absolute left-[4%] top-[6%] w-10 text-pink-deep animate-wiggle" />
        <Sprig className="absolute right-[4%] top-[50%] w-9 text-sage animate-wiggle [animation-delay:2s]" />
        <Star className="absolute left-[12%] top-[70%] w-5 text-lavender animate-twinkle" />
        <Sparkle className="absolute right-[14%] top-[12%] w-5 text-butter animate-twinkle [animation-delay:.6s]" />
        <Cloud className="absolute left-[55%] top-[4%] w-12 text-sky animate-float-slow" />
        <Dot className="bg-peach left-[30%] top-[40%]" />
        <Dot className="bg-sky right-[30%] top-[85%]" />
      </div>
    );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Cloud className="absolute left-[4%] top-[4%] w-16 text-sky animate-float-slow" />
      <Bow className="absolute right-[5%] top-[5%] w-14 text-pink-deep animate-wiggle" />
      <Star className="absolute left-[34%] top-[6%] w-5 text-lavender animate-twinkle" />
      <Cloud className="absolute right-[3%] top-[16%] w-12 text-sky animate-float [animation-delay:1.5s]" />
      <Sparkle className="absolute left-[8%] top-[13%] w-4 text-butter animate-twinkle [animation-delay:.8s]" />
      <Heart className="absolute right-[16%] top-[22%] w-6 text-pink animate-float" />
      <Star className="absolute left-[7%] top-[38%] w-5 text-lavender animate-twinkle [animation-delay:.3s]" />
      <Star className="absolute right-[6%] top-[60%] w-5 text-lavender animate-twinkle [animation-delay:1.2s]" />
      <Star className="absolute left-[5%] top-[62%] w-5 text-butter animate-twinkle [animation-delay:.5s]" />
      <Dot className="bg-sage left-[55%] top-[4%]" />
      <Dot className="bg-pink right-[30%] top-[4%]" />
      <Dot className="bg-butter left-[8%] top-[14%] h-1.5 w-1.5" />
      <Dot className="bg-sky left-[8%] top-[54%] h-2.5 w-2.5" />
      <Dot className="bg-sage right-[10%] top-[38%]" />
      <Dot className="bg-butter right-[6%] top-[52%] h-1.5 w-1.5" />
      <Dot className="bg-pink left-[8%] top-[27%] h-1.5 w-1.5" />
    </div>
  );
}
