import { AmbientDoodles, Bow, HeartFilled, Sparkle } from "@/components/Doodles";
import { Polaroid } from "@/components/Polaroid";
import { WashiTape } from "@/components/WashiTape";
import { birthday, hero } from "@/data/birthday";

export function Hero() {
  return (
    <section id="hero" className="paper-grain relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      <AmbientDoodles variant="a" />

      <div className="relative z-10 w-full max-w-xs animate-fade-in sm:max-w-sm">
        <Bow className="absolute -left-8 -top-8 z-20 w-16 -rotate-12 text-pink-deep" />
        <Sparkle className="absolute -right-4 top-10 z-20 w-6 text-butter animate-twinkle" />
        <Polaroid
          src={hero.photo}
          alt={`${birthday.name} on her birthday`}
          caption={hero.polaroidCaption}
          rotate={-3}
          tape="sky"
          tapePattern="stripes"
          className="w-full"
        />
        <WashiTape color="pink" pattern="gingham" className="-bottom-2 -right-6 h-7 w-24 rotate-[-25deg]" />
        <HeartFilled className="absolute -bottom-4 left-4 z-20 w-8 rotate-12 text-pink animate-float" />
      </div>

      <h1 className="relative z-10 mt-12 font-hand text-4xl leading-tight tracking-wide text-ink animate-fade-in [animation-delay:.2s] sm:text-5xl">
        {hero.title}
      </h1>
      <p className="relative z-10 mt-3 font-script text-3xl text-pink-deep animate-fade-in [animation-delay:.3s]">
        {hero.subtitle}
      </p>

      <a
        href="#letter"
        className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-pink px-7 py-3 font-hand text-xl tracking-wide text-paper shadow-paper transition-all hover:-translate-y-0.5 hover:bg-pink-deep active:translate-y-0 animate-fade-in [animation-delay:.4s]"
      >
        {hero.button}
      </a>
    </section>
  );
}
