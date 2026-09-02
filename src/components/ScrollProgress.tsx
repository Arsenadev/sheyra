import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setP(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
      <div
        className="h-full origin-left rounded-r-full bg-[linear-gradient(90deg,var(--color-pink),var(--color-peach),var(--color-lavender))] transition-transform duration-150"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}
