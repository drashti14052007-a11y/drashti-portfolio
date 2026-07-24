import { cn } from "@/lib/cn";

/** Subtle scientific line decorations — Quiet Lab ink/teal, decorative only. */
export function BlueprintGrid({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
    >
      <defs>
        <pattern id="lab-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path
            d="M48 0H0V48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lab-grid)" className="text-lab-ink/[0.04]" />
    </svg>
  );
}

export function MoleculeSketch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={cn("text-lab-teal", className)}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="70" cy="80" r="10" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <circle cx="130" cy="50" r="8" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <circle cx="160" cy="110" r="12" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
      <circle cx="100" cy="150" r="9" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <circle cx="180" cy="170" r="7" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <path
        d="M70 80L130 50L160 110L100 150L70 80M160 110L180 170"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.28"
      />
    </svg>
  );
}

export function FlaskIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 260"
      className={cn("text-lab-teal", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M78 28h44M85 28v62c0 8-18 28-28 52-6 14-6 34 8 46 12 10 50 10 62 0 14-12 14-32 8-46-10-24-28-44-28-52V28"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.45"
        strokeLinejoin="round"
      />
      <path
        d="M70 168c18 10 42 10 60 0"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.3"
      />
      <circle cx="92" cy="188" r="3" fill="currentColor" opacity="0.25" />
      <circle cx="118" cy="198" r="2.5" fill="currentColor" opacity="0.2" />
      <circle cx="108" cy="176" r="2" fill="currentColor" opacity="0.22" />
    </svg>
  );
}

export function PetriDish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={cn("text-lab-teal", className)}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="110" cy="110" r="78" stroke="currentColor" strokeWidth="1.4" opacity="0.35" />
      <circle cx="110" cy="110" r="62" stroke="currentColor" strokeWidth="1" opacity="0.22" />
      <circle cx="88" cy="96" r="14" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <circle cx="128" cy="120" r="10" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      <circle cx="108" cy="138" r="8" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      <path
        d="M70 150c18-22 54-28 78-8"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.2"
      />
    </svg>
  );
}

export function DnaCurve({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 280"
      className={cn("text-lab-ink", className)}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M30 10c40 30 40 50 0 80s-40 50 0 80 40 50 0 80"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.12"
      />
      <path
        d="M90 10c-40 30-40 50 0 80s40 50 0 80-40 50 0 80"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.12"
      />
      {[40, 80, 120, 160, 200, 240].map((y) => (
        <line
          key={y}
          x1="30"
          x2="90"
          y1={y}
          y2={y}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.1"
        />
      ))}
    </svg>
  );
}

export function MicroscopeSketch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 220"
      className={cn("text-lab-teal", className)}
      fill="none"
      aria-hidden="true"
    >
      <rect x="70" y="20" width="28" height="48" rx="4" stroke="currentColor" strokeWidth="1.3" opacity="0.4" />
      <path d="M84 68v42" stroke="currentColor" strokeWidth="1.3" opacity="0.4" />
      <path d="M84 110c28 0 48 16 48 40v18H40v-18c0-24 20-40 44-40Z" stroke="currentColor" strokeWidth="1.3" opacity="0.4" />
      <path d="M36 180h108" stroke="currentColor" strokeWidth="1.3" opacity="0.35" />
      <circle cx="98" cy="42" r="6" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
    </svg>
  );
}

export function HeroScienceVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-md",
        className,
      )}
    >
      <div className="absolute inset-6 rounded-full border border-lab-line/70 bg-white/40 backdrop-blur-[2px]" />
      <div className="absolute inset-[18%] rounded-full border border-lab-teal/20" />
      <PetriDish className="absolute inset-[12%] h-auto w-auto opacity-90" />
      <FlaskIllustration className="absolute bottom-[8%] right-[6%] h-[42%] w-auto opacity-80" />
      <MoleculeSketch className="absolute left-[4%] top-[8%] h-[38%] w-auto opacity-70" />
    </div>
  );
}
