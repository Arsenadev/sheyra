import { HeartFilled, Sparkle, Star } from "@/components/Doodles";
import { Polaroid } from "@/components/Polaroid";
import { Reveal } from "@/components/Reveal";
import { WashiTape } from "@/components/WashiTape";
import { birthday, finale } from "@/data/birthday";

const floaters = [
  { left: "8%", dx: "20px", dur: "9s", delay: "0s", size: "w-4", color: "text-pink" },
  { left: "22%", dx: "-16px", dur: "11s", delay: "2s", size: "w-3", color: "text-peach" },
  { left: "40%", dx: "12px", dur: "8s", delay: "4s", size: "w-5", color: "text-lavender" },
  { left: "58%", dx: "-20px", dur: "12s", delay: "1s", size: "w-3", color: "text-sky" },
  { left: "74%", dx: "14px", dur: "10s", delay: "3s", size: "w-4", color: "text-pink" },
  { left: "88%", dx: "-10px", dur: "9.5s", delay: "5s", size: "w-3", color: "text-sage" },
];

export function Finale() {
  return (
    <section id="finale" className="paper-grain relative overflow-hidden px-5 pb-32 pt-24 text-center">
      {/* floating hearts & sparkles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {floaters.map((f, i) => {
          const I = i % 3 === 0 ? Sparkle : HeartFilled;
          return (
            <I
              key={i}
              className={`absolute bottom-0 animate-rise ${f.size} ${f.color}`}
              style={{ left: f.left, "--dx": f.dx, animationDuration: f.dur, animationDelay: f.delay } as React.CSSProperties}
            />
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-md">
        <Reveal>
          <div className="relative mx-auto w-36">
            <Polaroid src={finale.photo} alt={birthday.name} rotate={4} tape="lavender" tapePattern="dots" className="w-full opacity-90" />
            <Star className="absolute -right-4 -top-4 w-7 text-butter animate-twinkle" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-10 font-hand text-4xl leading-tight tracking-wide text-ink sm:text-5xl">{finale.title}</h2>
          <p className="mt-3 font-script text-2xl text-sky">{finale.subtitle}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative mt-10 rounded-md bg-paper px-6 py-8 text-left shadow-polaroid" style={{ transform: "rotate(-0.8deg)" }}>
            <WashiTape color="pink" pattern="gingham" className="-top-3 left-1/2 w-28 -translate-x-1/2 rotate-2" />
            <div className="space-y-4 font-hand text-lg leading-8 tracking-wide text-ink">
              {finale.message.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 text-right font-script text-4xl text-pink-deep">{finale.signature}</p>
            <HeartFilled className="absolute -bottom-3 -right-2 w-8 rotate-12 text-pink" />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-14 font-script text-xl text-ink-soft">
            made with care, for {birthday.name}'s {birthday.age}th ♡
          </p>
        </Reveal>
      </div>
    </section>
  );
}
