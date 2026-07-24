"use client";

import { CountUp } from "@/components/Wow";
import { Reveal } from "@/components/Reveal";
import { homeStats } from "@/lib/content";

export function HeroStats() {
  return (
    <Reveal className="border-t border-lab-line/70 pt-8">
      <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {homeStats.map((stat) => (
          <div key={stat.label} className="text-left sm:text-center lg:text-left">
            <dt className="text-[0.7rem] uppercase tracking-[0.18em] text-lab-muted">
              {stat.label}
            </dt>
            <dd className="mt-2 font-display text-2xl text-lab-ink sm:text-3xl">
              <CountUp value={stat.value} />
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
