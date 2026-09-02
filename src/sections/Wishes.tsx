import { AmbientDoodles } from "@/components/Doodles";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { WishCard } from "@/components/WishCard";
import { wishes } from "@/data/birthday";

export function Wishes() {
  return (
    <section id="wishes" className="relative overflow-hidden bg-[linear-gradient(180deg,transparent,var(--color-pink-soft)_30%,var(--color-peach-soft)_70%,transparent)] px-5 py-20">
      <AmbientDoodles variant="b" />
      <div className="relative z-10 mx-auto max-w-md">
        <Reveal>
          <SectionTitle title={wishes.title} subtitle={wishes.subtitle} />
        </Reveal>
        <ul className="space-y-6">
          {wishes.items.map((w, i) => (
            <Reveal as="li" key={i} delay={i * 70}>
              <WishCard icon={w.icon} text={w.text} index={i} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
