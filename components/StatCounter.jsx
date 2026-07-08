"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({ target, suffix = "", decimals = 0, label, mono }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const start = performance.now();
    let raf;

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return (
    <div ref={ref} className="py-8 px-4 sm:px-6">
      <p className="font-display text-3xl sm:text-4xl font-semibold text-ink tick">
        {value.toFixed(decimals)}
        {suffix}
      </p>
      <p className="mt-2 text-xs text-muted leading-snug">{label}</p>
      <p className="mt-3 font-mono text-[10px] text-signal/70">/{mono}</p>
    </div>
  );
}
