"use client";

import { useEffect, useRef, useState } from "react";

const TABS = [
  {
    id: "prakriti",
    label: "Prakriti.AI",
    sub: "waste_classifier.py",
    kind: "bars",
    data: [
      { label: "Plastic", value: 93 },
      { label: "Organic", value: 91 },
      { label: "E-waste", value: 89 },
      { label: "Metal", value: 92 },
      { label: "Glass", value: 90 },
    ],
    footer: "58+ categories · RepVGG + EfficientNet-B4",
    accent: "#34D399",
  },
  {
    id: "netsec",
    label: "NetSec ETL",
    sub: "anomaly_monitor.py",
    kind: "wave",
    footer: "Real-time anomaly classification",
    accent: "#F5A94C",
  },
];

function BarViz({ tab, active }) {
  return (
    <div className="space-y-3">
      {tab.data.map((d, i) => (
        <div key={d.label}>
          <div className="flex items-center justify-between font-mono text-[11px] text-muted mb-1">
            <span>{d.label}</span>
            <span className="text-ink tick">{active ? d.value : 0}%</span>
          </div>
          <div className="h-2 rounded-full bg-surface2 overflow-hidden">
            <div
              className="h-full rounded-full transition-all ease-out"
              style={{
                width: active ? `${d.value}%` : "0%",
                backgroundColor: tab.accent,
                transitionDuration: "900ms",
                transitionDelay: `${i * 90}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function WaveViz({ tab, active }) {
  // A traffic line with one clear anomaly spike, drawn via stroke-dashoffset animation.
  const path =
    "M0,60 L20,58 L40,62 L60,55 L80,60 L100,57 L120,20 L140,90 L160,58 L180,60 L200,56 L220,61 L240,58 L260,59 L280,57 L300,60 L320,58 L340,61 L360,59 L380,60 L400,58";
  return (
    <div>
      <svg viewBox="0 0 400 110" className="w-full h-auto">
        <line x1="0" y1="90" x2="400" y2="90" stroke="#232838" strokeWidth="1" />
        <path
          d={path}
          fill="none"
          stroke={tab.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
          style={{
            strokeDasharray: 1,
            strokeDashoffset: active ? 0 : 1,
            transition: "stroke-dashoffset 1.4s ease-out",
          }}
        />
        <circle cx="120" cy="20" r={active ? 5 : 0} fill={tab.accent} style={{ transition: "r 300ms ease 1.2s" }} />
        <text
          x="128"
          y="18"
          className="font-mono"
          fontSize="9"
          fill={tab.accent}
          opacity={active ? 1 : 0}
          style={{ transition: "opacity 300ms ease 1.3s" }}
        >
          anomaly · 98.5%
        </text>
      </svg>
    </div>
  );
}

export default function ProjectSignal() {
  const [tabIndex, setTabIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [tick, setTick] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // retrigger the animation each time the tab changes
  useEffect(() => {
    setTick((t) => t + 1);
  }, [tabIndex]);

  const tab = TABS[tabIndex];

  return (
    <div ref={ref} className="relative">
      <div className="flex items-center gap-1 mb-5">
        {TABS.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setTabIndex(i)}
            className={`font-mono text-[11px] px-3 py-1.5 rounded-full border transition-colors ${
              i === tabIndex
                ? "border-signal text-ink bg-surface2"
                : "border-border text-muted hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <p className="font-mono text-[11px] text-muted mb-4">
        {tab.sub} — <span className="text-ink">live from my project</span>
      </p>

      <div key={`${tab.id}-${tick}`}>
        {tab.kind === "bars" ? (
          <BarViz tab={tab} active={visible} />
        ) : (
          <WaveViz tab={tab} active={visible} />
        )}
      </div>

      <p className="mt-5 font-mono text-[10px]" style={{ color: tab.accent }}>
        /{tab.footer}
      </p>
    </div>
  );
}
