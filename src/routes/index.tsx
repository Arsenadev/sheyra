import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { MusicPlayer } from "@/components/MusicPlayer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { birthday } from "@/data/birthday";
import { getRemaining, isUnlocked, type Remaining } from "@/lib/countdown";
import { Finale } from "@/sections/Finale";
import { Hero } from "@/sections/Hero";
import { Letter } from "@/sections/Letter";
import { LockScreen } from "@/sections/LockScreen";
import { Memories } from "@/sections/Memories";
import { UnlockAnimation } from "@/sections/UnlockAnimation";
import { Wishes } from "@/sections/Wishes";

const title = `Happy 17th Birthday, ${birthday.name} ♡`;
const description = `A little birthday surprise for ${birthday.name}, unlocking ${birthday.dateLabel} at ${birthday.timeLabel}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Phase = "locked" | "unlocking" | "open";

function Index() {
  // Start locked with an empty countdown so server + first client render match,
  // then resolve real state from the actual clock after hydration.
  const [phase, setPhase] = useState<Phase>("locked");
  const [remaining, setRemaining] = useState<Remaining | null>(null);
  const [justUnlocked, setJustUnlocked] = useState(false);

  useEffect(() => {
    if (isUnlocked()) {
      setPhase("open");
      return;
    }
    setRemaining(getRemaining());
    const id = setInterval(() => {
      const r = getRemaining();
      setRemaining(r);
      if (r.total <= 0) {
        clearInterval(id);
        setJustUnlocked(true);
        setPhase("unlocking");
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const finishUnlock = useCallback(() => {
    setPhase("open");
    window.scrollTo({ top: 0 });
  }, []);

  if (phase === "locked") return <LockScreen remaining={remaining} />;

  return (
    <>
      {phase === "unlocking" && <UnlockAnimation onDone={finishUnlock} />}
      <ScrollProgress />
      <div className="animate-fade-in">
        <Hero />
        <Letter />
        <Memories />
        <Wishes />
        <Finale />
      </div>
      <MusicPlayer autoTry={justUnlocked} />
    </>
  );
}
