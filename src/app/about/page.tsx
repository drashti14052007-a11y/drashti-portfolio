import type { Metadata } from "next";
import Image from "next/image";
import {
  Beaker,
  Flask,
  Leaf,
  Lightbulb,
  Microscope,
  ShieldCheck,
  Target,
} from "@/components/Icons";
import { GhostLink } from "@/components/GhostButton";
import { OutlinedCard, Reveal } from "@/components/Reveal";
import {
  BlueprintGrid,
  DnaCurve,
  FlaskIllustration,
} from "@/components/ScientificDecor";
import {
  academicJourney,
  coreStrengths,
  researchInterests,
  toolStack,
} from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Drashti Patel — Food Processing Technology student building AI decision-support for food R&D.",
};

const strengthIcons = [
  Flask,
  Microscope,
  Beaker,
  ShieldCheck,
  Lightbulb,
  Target,
];

const panelFacts = [
  "Food Processing Technology Student",
  "Research & Development",
  "Current Focus · Decision-support",
  "Available for Internships",
] as const;

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden px-6 pb-28 pt-32">
      <BlueprintGrid className="opacity-50" />
      <DnaCurve className="pointer-events-none absolute right-0 top-40 hidden h-[420px] w-auto opacity-70 lg:block" />

      <div className="relative mx-auto max-w-content">
        {/* Hero */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-card border border-lab-line bg-white shadow-lift">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src="/images/portfolio.jpeg"
                  alt="Portrait of Drashti Patel"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 480px"
                />
              </div>
              <div className="border-t border-lab-line bg-lab-bg/40 p-5 sm:p-6">
                <div className="flex flex-wrap gap-2 text-lab-teal">
                  <Flask size={16} />
                  <Microscope size={16} />
                  <Beaker size={16} />
                  <Leaf size={16} />
                </div>
                <ul className="mt-4 space-y-2.5">
                  {panelFacts.map((fact) => (
                    <li
                      key={fact}
                      className="flex items-start gap-2 text-sm text-lab-ink"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lab-teal" />
                      {fact}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-lab-muted">
                  {site.location}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10 pt-2">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
                About
              </p>
              <h1 className="mt-3 font-display text-4xl text-lab-ink sm:text-5xl lg:text-6xl">
                Building toward Executive-level food R&D
              </h1>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-2xl text-lab-ink sm:text-3xl">
                Who I Am
              </h2>
              <div className="mt-5 space-y-5 text-lab-muted leading-relaxed">
                <p>
                  Second-year B.Tech student in Food Processing Technology at{" "}
                  {site.education.school}, affiliated with{" "}
                  {site.education.university}.
                </p>
                <p>
                  Primary focus: Research & Development—product development,
                  process optimization, food safety, and innovation.
                </p>
                <p>
                  Frontend and UI/UX are how I make scientific decision-support
                  accessible—not a separate career track.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl text-lab-ink">How I think</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-lab-muted">
                <li>
                  Translate food science into practical tools (NoteStack,
                  HeatGuard).
                </li>
                <li>
                  Work at the intersection of Food Processing Technology,
                  software, and AI.
                </li>
                <li>
                  Design for end users—scientific complexity should feel clear.
                </li>
                <li>
                  Learn independently and communicate through structured
                  documentation.
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Academic Journey */}
        <section className="mt-24 sm:mt-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Academic journey
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-4xl">
              From institute to research horizon
            </h2>
          </Reveal>

          <div className="relative mt-12">
            <div className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-lab-line md:block" />
            <ol className="grid gap-6 md:grid-cols-5">
              {academicJourney.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.05}>
                  <li className="relative text-left">
                    <span className="relative z-10 mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-lab-teal/40 bg-white text-xs font-medium text-lab-teal shadow-lift">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[0.7rem] uppercase tracking-[0.16em] text-lab-muted">
                      {step.meta}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-lab-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-lab-muted">{step.detail}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="mt-24 sm:mt-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Core strengths
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-4xl">
              How I approach food R&D
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreStrengths.map((item, i) => {
              const Icon = strengthIcons[i]!;
              return (
                <Reveal key={item.title} delay={i * 0.04}>
                  <OutlinedCard className="h-full">
                    <Icon size={20} className="text-lab-teal" />
                    <h3 className="mt-4 font-display text-xl text-lab-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-lab-muted">
                      {item.description}
                    </p>
                  </OutlinedCard>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Research Interests */}
        <section className="mt-24 sm:mt-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Research interests
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-4xl">
              Where curiosity concentrates
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {researchInterests.map((interest, i) => (
              <Reveal key={interest} delay={i * 0.03}>
                <div className="rounded-card border border-lab-line bg-white px-4 py-5 text-center transition duration-200 ease-outCubic hover:-translate-y-1 hover:border-lab-teal/45 hover:shadow-lift">
                  <p className="font-display text-lg text-lab-ink">{interest}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section className="mt-24 sm:mt-28">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Tools
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-4xl">
              Technologies I use
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {toolStack.map((tool, i) => (
              <Reveal key={tool} delay={i * 0.03}>
                <div className="flex min-h-[88px] items-center justify-center rounded-card border border-lab-line bg-lab-teal-soft/25 px-4 py-5 text-sm font-medium text-lab-ink transition duration-200 ease-outCubic hover:border-lab-teal/40 hover:bg-white hover:shadow-lift">
                  {tool}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="relative mt-24 py-16 text-center sm:mt-28 sm:py-20">
          <FlaskIllustration className="pointer-events-none absolute left-1/2 top-0 h-28 w-auto -translate-x-1/2 opacity-25" />
          <Reveal>
            <div className="mx-auto h-px w-24 bg-lab-line" />
            <blockquote className="mx-auto mt-10 max-w-3xl font-display text-2xl leading-snug text-lab-ink sm:text-4xl">
              “I believe technology should help scientists make better
              decisions—not replace them.”
            </blockquote>
            <div className="mx-auto mt-10 h-px w-24 bg-lab-line" />
            <GhostLink href="/contact" className="mt-10">
              Open to mentorship & internships
            </GhostLink>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
