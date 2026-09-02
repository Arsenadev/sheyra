import { useEffect, useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";
import { birthday } from "@/data/birthday";
import { cn } from "@/lib/utils";

/**
 * Floating music toggle. Never autoplays with sound — the user taps to start.
 * Replace the file at public/music/seventeen.mp3 (or change birthday.musicSrc).
 */
export function MusicPlayer({ autoTry = false }: { autoTry?: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const a = audioRef.current;
    if (!a || !autoTry) return;
    // Try once; browsers usually block this until a user gesture. That's fine.
    a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [autoTry]);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      try {
        await a.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={birthday.musicSrc}
        loop
        preload="none"
        onError={() => setAvailable(false)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? "Pause music" : "Play music"}
        title={available ? `${birthday.musicTitle}` : "Add public/music/seventeen.mp3"}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-paper/95 py-2 pl-2 pr-3.5 shadow-paper ring-1 ring-pink-soft backdrop-blur transition-transform hover:scale-105 active:scale-95"
      >
        <span
          className={cn(
            "grid h-9 w-9 place-items-center rounded-full bg-pink-soft text-pink-deep",
            playing && "animate-[spin_4s_linear_infinite]",
          )}
        >
          <Music className="h-4 w-4" />
        </span>
        <span className="flex flex-col items-start leading-none">
          <span className="font-hand text-sm text-ink">{birthday.musicTitle}</span>
          <span className="mt-0.5 flex items-center gap-1 font-body text-[10px] font-semibold text-ink-soft">
            {playing ? <Pause className="h-2.5 w-2.5" /> : <Play className="h-2.5 w-2.5" />}
            {playing ? "playing" : available ? "tap to play" : "no audio yet"}
          </span>
        </span>
      </button>
    </>
  );
}
