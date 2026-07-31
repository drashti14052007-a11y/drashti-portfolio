"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(reduce ? value : "");

  useEffect(() => {
    if (reduce) {
      setShown(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(value);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, reduce]);

  return (
    <span ref={ref} className={cn("font-mono tabular-nums", className)}>
      {shown || "—"}
    </span>
  );
}

export function InversionDiagram() {
  const [mode, setMode] = useState<"forward" | "reverse">("reverse");

  return (
    <div className="rounded-card border border-lab-line bg-white p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setMode("forward")}
          className={cn(
            "rounded-pill border px-3 py-1.5 text-sm",
            mode === "forward"
              ? "border-lab-teal bg-lab-teal-soft text-lab-teal"
              : "border-lab-line text-lab-muted",
          )}
        >
          Traditional forward
        </button>
        <button
          type="button"
          onClick={() => setMode("reverse")}
          className={cn(
            "rounded-pill border px-3 py-1.5 text-sm",
            mode === "reverse"
              ? "border-lab-teal bg-lab-teal-soft text-lab-teal"
              : "border-lab-line text-lab-muted",
          )}
        >
          NoteStack reverse
        </button>
      </div>
      <p className="font-display text-2xl text-lab-ink">
        {mode === "forward"
          ? "Ingredients → trial batches → sensory evaluation → revise"
          : "Target sensory profile → optimization → formulation + confidence + FSSAI"}
      </p>
      <p className="mt-3 text-sm text-lab-muted">
        {mode === "forward"
          ? "Scientifically sound, but time-consuming and resource-intensive."
          : "Decision-support that starts from the taste you want—not endless trial loops."}
      </p>
    </div>
  );
}

export function ComplianceBadge() {
  const states = [
    { label: "COMPLIANT", color: "text-lab-teal border-lab-teal bg-lab-teal-soft" },
    { label: "ADVISORY", color: "text-amber-700 border-amber-300 bg-amber-50" },
    { label: "NON-COMPLIANT", color: "text-rose-700 border-rose-300 bg-rose-50" },
  ] as const;
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % states.length), 2200);
    return () => clearInterval(id);
  }, [states.length]);

  return (
    <div className="rounded-card border border-lab-line bg-white p-6">
      <p className="text-xs uppercase tracking-[0.16em] text-lab-muted">
        FSSAI checker states
      </p>
      <div
        className={cn(
          "mt-4 inline-flex rounded-pill border px-4 py-2 font-mono text-sm",
          states[i].color,
        )}
      >
        {states[i].label}
      </div>
      <p className="mt-3 text-sm text-lab-muted">
        Rule-based checks cite specific regulation clauses—not decorative badges.
      </p>
    </div>
  );
}

export function ConfidenceMeter() {
  return (
    <div className="rounded-card border border-lab-line bg-white p-6">
      <p className="text-xs uppercase tracking-[0.16em] text-lab-muted">
        Confidence honesty
      </p>
      <div className="mt-4 space-y-3">
        {[
          { label: "High ≥ 85%", width: "90%", tone: "bg-lab-teal" },
          { label: "Moderate 65–84%", width: "72%", tone: "bg-amber-500" },
          { label: "Low < 65%", width: "48%", tone: "bg-rose-400" },
        ].map((row) => (
          <div key={row.label}>
            <div className="mb-1 flex justify-between text-xs text-lab-muted">
              <span>{row.label}</span>
            </div>
            <div className="h-2 rounded-pill bg-lab-line/70">
              <div
                className={cn("h-2 rounded-pill", row.tone)}
                style={{ width: row.width }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-lab-muted">
        The system signals when a target is contradictory—not a silent wrong answer.
      </p>
    </div>
  );
}

export function SensoryRadar() {
  return (
    <div className="rounded-card border border-lab-line bg-white p-6">
      <p className="text-xs uppercase tracking-[0.16em] text-lab-muted">
        Sensory radar · target vs predicted
      </p>
      <svg viewBox="0 0 220 220" className="mx-auto mt-4 h-52 w-52">
        <polygon
          points="110,30 180,75 160,155 60,155 40,75"
          fill="none"
          stroke="#D7DCE2"
          strokeWidth="1"
        />
        <polygon
          points="110,50 160,85 145,145 75,145 60,85"
          fill="rgba(47,111,115,0.15)"
          stroke="#2F6F73"
          strokeWidth="2"
          className="origin-center animate-[pulse_3s_ease-in-out_infinite]"
        />
        <polygon
          points="110,40 170,80 150,150 70,150 50,80"
          fill="none"
          stroke="#1E2430"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>
      <p className="text-center text-sm text-lab-muted">
        Dashed = target · Teal fill = predicted profile
      </p>
    </div>
  );
}

export function KillCurve() {
  return (
    <div className="rounded-card border border-lab-line bg-white p-6">
      <p className="text-xs uppercase tracking-[0.16em] text-lab-muted">
        Microbial kill curve
      </p>
      <svg viewBox="0 0 320 140" className="mt-4 w-full">
        <line x1="30" y1="120" x2="300" y2="120" stroke="#D7DCE2" />
        <line x1="30" y1="20" x2="30" y2="120" stroke="#D7DCE2" />
        <path
          d="M30 30 C 90 35, 140 55, 180 85 S 250 118, 300 120"
          fill="none"
          stroke="#2F6F73"
          strokeWidth="2.5"
          className="kill-curve-path"
        />
        <text x="34" y="18" fill="#5C6570" fontSize="10">
          log N
        </text>
        <text x="280" y="135" fill="#5C6570" fontSize="10">
          time
        </text>
      </svg>
      <p className="mt-2 text-sm text-lab-muted">
        First-order kinetics visualized for thermal lethality intuition.
      </p>
    </div>
  );
}

export function IntentPicker() {
  const [intent, setIntent] = useState("mentorship");
  const intents = [
    { id: "mentorship", label: "Research mentorship" },
    { id: "internship", label: "R&D internship" },
    { id: "ssip", label: "SSIP / collaboration" },
  ];

  const subject =
    intent === "mentorship"
      ? "Research mentorship inquiry — Drashti Patel"
      : intent === "internship"
        ? "R&D internship inquiry — Drashti Patel"
        : "SSIP / collaboration inquiry — Drashti Patel";

  return (
    <div className="mx-auto max-w-xl">
      <p className="mb-3 text-sm text-lab-muted">What are you reaching out about?</p>
      <div className="flex flex-wrap justify-center gap-2">
        {intents.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIntent(item.id)}
            className={cn(
              "rounded-pill border px-4 py-2 text-sm",
              intent === item.id
                ? "border-lab-teal bg-lab-teal-soft text-lab-teal"
                : "border-lab-line text-lab-muted",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <a
          href={`mailto:drashti14052007@gmail.com?subject=${encodeURIComponent(subject)}`}
          className="inline-flex rounded-pill border border-lab-ink/25 px-5 py-2.5 text-sm transition hover:border-lab-teal hover:text-lab-teal"
        >
          Email with this intent
        </a>
      </div>
    </div>
  );
}

export function ApiStatusPill() {
  return (
    <div className="inline-flex items-center gap-2 rounded-pill border border-lab-line bg-white px-3 py-1.5 text-xs text-lab-muted">
      <span className="h-2 w-2 rounded-full bg-amber-400" />
      Live demo may take 20–50s on first request (Render cold start)
    </div>
  );
}

export function HonestyNote() {
  return (
    <div className="rounded-card border border-dashed border-lab-teal/40 bg-lab-teal-soft/40 p-5 text-sm text-lab-ink">
      <strong className="font-medium">Scientific honesty:</strong> NoteStack
      models are trained on synthetic datasets designed from food-science
      relationships. Predictions are ML estimates—not experimentally validated
      sensory-panel formulations yet.
    </div>
  );
}
