import { Heart } from "./Doodles";

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="mb-8 text-center">
      <div className="flex items-center justify-center gap-3">
        <Heart className="w-4 text-pink" />
        <h2 className="font-hand text-3xl tracking-wide text-ink sm:text-4xl">{title}</h2>
        <Heart className="w-4 text-pink" />
      </div>
      {subtitle && <p className="mt-1.5 font-script text-xl text-sky">{subtitle}</p>}
    </header>
  );
}
