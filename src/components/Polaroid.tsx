import { useState, type CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { WashiTape } from "./WashiTape";
import { HeartFilled, Sparkle } from "./Doodles";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  tape?: "pink" | "sky" | "sage" | "peach" | "lavender" | "kraft" | "none";
  tapePattern?: "plain" | "stripes" | "gingham" | "dots";
  className?: string;
  imgClassName?: string;
  style?: CSSProperties;
};

export function Polaroid({
  src,
  alt,
  caption,
  rotate = 0,
  tape = "pink",
  tapePattern = "plain",
  className,
  imgClassName,
  style,
}: Props) {
  const [missing, setMissing] = useState(false);

  return (
    <figure
      className={cn(
        "relative inline-block bg-paper p-2.5 pb-3 shadow-polaroid transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:rotate-0",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      {tape !== "none" && (
        <WashiTape
          color={tape}
          pattern={tapePattern}
          className="-top-3 left-1/2 -translate-x-1/2 -rotate-3"
        />
      )}
      <div className={cn("relative aspect-[4/5] w-full overflow-hidden bg-pink-soft", imgClassName)}>
        {missing ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 bg-[linear-gradient(135deg,var(--color-pink-soft),var(--color-lavender-soft),var(--color-sky-soft))] text-center">
            <HeartFilled className="w-7 text-pink" />
            <span className="font-hand text-sm leading-tight text-ink-soft">
              drop a photo here
            </span>
            <span className="max-w-[90%] truncate px-2 font-body text-[10px] text-ink-soft/70">
              {src}
            </span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setMissing(true)}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 flex items-center justify-center gap-1 px-1 text-center font-script text-lg leading-tight text-ink">
          <span>{caption}</span>
          <Sparkle className="w-3 shrink-0 text-butter" />
        </figcaption>
      )}
    </figure>
  );
}
