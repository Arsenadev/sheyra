import { AmbientDoodles, Butterfly, Flower, HeartFilled, SmileyFace, Sparkle, Star } from "@/components/Doodles";
import { Polaroid } from "@/components/Polaroid";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { birthday, memories } from "@/data/birthday";

/** Per-card scrapbook layout: rotation, tape, size & a little sticker. */
const layout = [
  { rotate: -4, tape: "pink", pattern: "gingham", span: "col-span-7", offset: "mt-0", sticker: Star, stickerCls: "-left-3 -top-3 text-butter" },
  { rotate: 3, tape: "sky", pattern: "stripes", span: "col-span-5", offset: "mt-10", sticker: HeartFilled, stickerCls: "-right-2 -top-3 text-pink" },
  { rotate: 2, tape: "sage", pattern: "dots", span: "col-span-5", offset: "-mt-2", sticker: Butterfly, stickerCls: "-left-4 bottom-8 text-lavender" },
  { rotate: -3, tape: "peach", pattern: "plain", span: "col-span-7", offset: "mt-6", sticker: SmileyFace, stickerCls: "-right-2 -bottom-3 text-ink-soft" },
  { rotate: -2, tape: "lavender", pattern: "gingham", span: "col-span-6", offset: "mt-0", sticker: Sparkle, stickerCls: "-right-3 -top-3 text-peach" },
  { rotate: 4, tape: "kraft", pattern: "stripes", span: "col-span-6", offset: "mt-8", sticker: Flower, stickerCls: "-left-4 -bottom-4 text-pink-deep" },
] as const;

export function Memories() {
  return (
    <section id="memories" className="relative overflow-hidden px-5 py-20">
      <AmbientDoodles variant="c" />
      <div className="relative z-10 mx-auto max-w-md">
        <Reveal>
          <SectionTitle title={memories.title} subtitle={memories.subtitle} />
        </Reveal>

        <ul className="grid grid-cols-12 gap-x-4 gap-y-8">
          {memories.items.map((m, i) => {
            const L = layout[i % layout.length] ?? layout[0];
            const Sticker = L.sticker;
            return (
              <Reveal as="li" key={i} delay={i * 80} className={`${L.span} ${L.offset} relative`}>
                <Polaroid
                  src={m.photo}
                  alt={`${birthday.name} — memory ${i + 1}`}
                  caption={m.caption}
                  rotate={L.rotate}
                  tape={L.tape}
                  tapePattern={L.pattern}
                  className="w-full"
                />
                <Sticker className={`pointer-events-none absolute z-20 w-8 ${L.stickerCls}`} />
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
