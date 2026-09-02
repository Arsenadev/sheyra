import { AmbientDoodles, HeartFilled, Sprig, Star } from "@/components/Doodles";
import { Polaroid } from "@/components/Polaroid";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { WashiTape } from "@/components/WashiTape";
import { birthday, letter } from "@/data/birthday";

export function Letter() {
  return (
    <section id="letter" className="relative overflow-hidden px-5 py-20">
      <AmbientDoodles variant="b" />
      <div className="relative z-10 mx-auto max-w-md">
        <Reveal>
          <SectionTitle title="A Letter For You" subtitle="tulisan kecil dari aku" />
        </Reveal>

        <Reveal delay={100}>
          <article
            className="relative rounded-md bg-paper px-6 pb-8 pt-10 shadow-polaroid [background-image:repeating-linear-gradient(transparent_0_31px,oklch(0.9_0.02_70)_31px_32px)] [background-position:0_12px]"
            style={{ transform: "rotate(0.6deg)" }}
          >
            <WashiTape color="peach" pattern="dots" className="-top-3 left-6 w-24 -rotate-3" />
            <WashiTape color="sage" pattern="stripes" className="-top-2 right-8 w-16 rotate-6" />

            <Polaroid
              src={letter.photo}
              alt={birthday.name}
              caption={letter.polaroidCaption}
              rotate={5}
              tape="pink"
              className="float-right -mr-3 mb-3 ml-3 w-28 sm:w-32"
            />

            <p className="font-script text-3xl text-pink-deep">{letter.greeting}</p>
            <div className="mt-3 space-y-4 font-hand text-lg leading-8 tracking-wide text-ink">
              {letter.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-6 font-hand text-xl text-ink">{letter.closing}</p>
            <p className="mt-2 text-right font-script text-3xl text-pink-deep">{letter.signature}</p>

            <HeartFilled className="absolute -bottom-3 -left-3 w-8 -rotate-12 text-pink" />
            <Star className="absolute -right-3 bottom-8 w-6 text-butter animate-twinkle" />
            <Sprig className="absolute -bottom-6 right-8 w-7 rotate-[30deg] text-sage" />
          </article>
        </Reveal>
      </div>
    </section>
  );
}
