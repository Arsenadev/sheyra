import { Lock } from "lucide-react";
import { Countdown } from "@/components/Countdown";
import { AmbientDoodles, Butterfly, Cloud, Flower, Heart, HeartFilled, MotionLines, SmileyFace, Sparkle, Sprig, Star } from "@/components/Doodles";
import { WashiTape } from "@/components/WashiTape";
import { birthday, lockScreen } from "@/data/birthday";
import type { Remaining } from "@/lib/countdown";

export function LockScreen({ remaining }: { remaining: Remaining | null }) {
  return (
    <main className="paper-grain relative flex min-h-screen flex-col items-center overflow-hidden bg-background px-5 pb-10 pt-20 text-center">
      <AmbientDoodles variant="a" />

      {/* Lock */}
      <div className="relative z-10 flex items-center gap-3 animate-fade-in">
        <MotionLines className="w-5 text-pink" />
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-pink text-paper shadow-paper">
          <Lock className="h-7 w-7" strokeWidth={2.4} />
        </span>
        <MotionLines className="w-5 -scale-x-100 text-pink" />
        <Sparkle className="absolute -right-6 -top-2 w-4 text-butter animate-twinkle" />
        <Sparkle className="absolute -left-7 top-6 w-3 text-butter animate-twinkle [animation-delay:.7s]" />
      </div>

      {/* Title */}
      <h1 className="relative z-10 mt-8 font-hand text-[2.6rem] leading-[1.15] tracking-wide text-ink sm:text-5xl animate-fade-in [animation-delay:.1s]">
        <MotionLines className="absolute -left-10 top-1 w-6 -rotate-45 text-pink" />
        {lockScreen.title[0]}
        <br />
        <span className="underline-doodle px-1 text-pink-deep">{lockScreen.title[1]}</span> {lockScreen.title[2]}
        <br />
        {lockScreen.title[3]}
        <Heart className="absolute -right-9 top-2 w-7 text-pink animate-float" />
      </h1>
      <p className="relative z-10 mt-3 font-hand text-xl text-sky animate-fade-in [animation-delay:.2s]">
        {lockScreen.subtitle}
        <Sparkle className="absolute -right-7 top-0 w-5 text-butter animate-twinkle" />
      </p>

      {/* Date ticket */}
      <div className="relative z-10 mt-8 flex items-center gap-3 font-hand text-2xl text-ink animate-fade-in [animation-delay:.3s]">
        <Heart className="w-5 text-pink" />
        {lockScreen.unlocksOn}
        <Heart className="w-5 text-pink" />
      </div>
      <div className="relative z-10 mt-3 w-full max-w-sm animate-fade-in [animation-delay:.35s]">
        <WashiTape color="kraft" pattern="dots" className="-left-5 top-1/2 h-7 w-20 -rotate-6" />
        <WashiTape color="kraft" pattern="dots" className="-right-5 top-1/2 h-7 w-20 rotate-6" />
        <div className="stitched rounded-sm bg-pink-soft px-6 py-5 shadow-paper" style={{ transform: "rotate(-1deg)" }}>
          <p className="font-script text-4xl leading-none text-ink sm:text-5xl">{birthday.dateLabel}</p>
          <span className="mt-3 inline-block rounded-full bg-paper/80 px-4 py-1 font-hand text-lg tracking-wide text-pink-deep">
            {birthday.timeLabel}
          </span>
        </div>
      </div>

      {/* Countdown */}
      <div className="relative z-10 mt-7 w-full animate-fade-in [animation-delay:.45s]">
        <Countdown remaining={remaining} />
      </div>

      <p className="relative z-10 mt-7 font-hand text-xl leading-snug text-ink animate-fade-in [animation-delay:.55s]">
        {lockScreen.footer}
        <br />
        the clock hits <span className="underline-doodle text-pink-deep">{lockScreen.footerTime}</span>
      </p>

      <HeartFilled className="relative z-10 mt-6 w-7 text-sky animate-float" />

      {/* Scrapbook footer */}
      <div className="relative z-10 mt-6 w-full max-w-md">
        <div aria-hidden className="grid-paper torn-edge absolute -left-6 top-0 h-44 w-40 -rotate-6 opacity-90" />
        <div aria-hidden className="torn-edge absolute -right-4 top-6 h-40 w-44 rotate-3 bg-kraft opacity-90" />
        <Flower className="absolute left-2 top-2 w-11 text-pink-deep animate-wiggle" />
        <WashiTape color="sky" pattern="stripes" className="left-10 top-24 h-7 w-24 -rotate-12" />
        <Sprig className="absolute right-6 top-2 w-9 text-sage animate-wiggle [animation-delay:1s]" />
        <WashiTape color="pink" pattern="gingham" className="right-8 top-16 h-6 w-16 rotate-[70deg]" />
        <SmileyFace className="absolute right-16 top-24 w-10 text-ink-soft" />
        <Cloud className="absolute right-24 top-0 w-10 text-sky" />
        <Butterfly className="absolute left-32 top-6 w-8 text-lavender animate-drift" />

        <div className="relative mt-28 rounded-md bg-paper/95 px-6 py-6 shadow-paper" style={{ transform: "rotate(-1.5deg)" }}>
          <HeartFilled className="absolute -left-2 -top-4 w-8 rotate-[-20deg] text-pink-deep" />
          <p className="font-hand text-lg leading-relaxed tracking-wide text-ink">
            {lockScreen.quote[0]}
            <br />
            {lockScreen.quote[1]}
          </p>
          <Heart className="absolute bottom-3 right-4 w-5 text-lavender" />
          <Star className="absolute -right-3 -top-3 w-5 text-butter animate-twinkle" />
        </div>
      </div>
    </main>
  );
}
