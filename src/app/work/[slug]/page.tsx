import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "@/components/Icons";
import { GhostLink } from "@/components/GhostButton";
import { OutlinedCard, Reveal } from "@/components/Reveal";
import {
  ApiStatusPill,
  ComplianceBadge,
  ConfidenceMeter,
  CountUp,
  HonestyNote,
  InversionDiagram,
  KillCurve,
  SensoryRadar,
} from "@/components/Wow";
import { getProject, projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-lab-muted hover:text-lab-teal"
          >
            <ArrowLeft size={14} /> All work
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-lab-muted">
            Case study · {project.status}
          </p>
          <h1 className="mt-3 font-display text-4xl text-lab-ink sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-lab-muted">
            {project.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveUrl && (
              <GhostLink href={project.liveUrl} external>
                Live demo <ExternalLink size={14} />
              </GhostLink>
            )}
            {project.githubUrl && (
              <GhostLink href={project.githubUrl} external>
                GitHub <ExternalLink size={14} />
              </GhostLink>
            )}
          </div>
          {slug === "notestack" && (
            <div className="mt-4">
              <ApiStatusPill />
            </div>
          )}
        </Reveal>

        {project.metrics && (
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {project.metrics.map((m) => (
              <OutlinedCard key={m.label} className="text-center" hover={false}>
                <p className="text-xs uppercase tracking-[0.14em] text-lab-muted">
                  {m.label}
                </p>
                <p className="mt-2 text-xl text-lab-ink">
                  <CountUp value={m.value} />
                </p>
              </OutlinedCard>
            ))}
          </div>
        )}

        <div className="mt-14 space-y-12">
          <Section title="Problem">{project.problem}</Section>
          <Section title="Approach">{project.approach}</Section>

          {slug === "notestack" && (
            <Reveal className="space-y-4">
              <h2 className="font-display text-2xl text-lab-ink">
                The inversion
              </h2>
              <InversionDiagram />
              <div className="grid gap-4 lg:grid-cols-3">
                <SensoryRadar />
                <ConfidenceMeter />
                <ComplianceBadge />
              </div>
              <HonestyNote />
            </Reveal>
          )}

          {slug === "heatguard" && (
            <Reveal className="grid gap-4 lg:grid-cols-2">
              <KillCurve />
              <OutlinedCard hover={false}>
                <p className="text-xs uppercase tracking-[0.16em] text-lab-muted">
                  Energy vs over-processing
                </p>
                <p className="mt-4 font-display text-3xl text-lab-ink">
                  Safer ≠ always hotter/longer
                </p>
                <p className="mt-3 text-sm text-lab-muted">
                  HeatGuard searches for minimum scientifically safe conditions
                  while estimating energy and cost implications—so quality and
                  efficiency stay in the conversation.
                </p>
              </OutlinedCard>
            </Reveal>
          )}

          <ListSection title="Method / science" items={project.method} />
          <ListSection title="Build" items={project.build} />
          <ListSection title="Results" items={project.results} />
          <ListSection title="Limitations" items={project.limitations} />
          <ListSection title="Next" items={project.next} />

          <Reveal>
            <h2 className="font-display text-2xl text-lab-ink">Tech stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-pill border border-lab-line px-3 py-1 text-xs text-lab-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-lab-line pt-10">
          <p className="text-sm text-lab-muted">Next project</p>
          <Link
            href={`/work/${next.slug}`}
            className="mt-2 inline-flex items-center gap-2 font-display text-2xl text-lab-ink hover:text-lab-teal"
          >
            {next.name} <ArrowRight size={18} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: string }) {
  return (
    <Reveal>
      <h2 className="font-display text-2xl text-lab-ink">{title}</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-lab-muted">{children}</p>
    </Reveal>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <h2 className="font-display text-2xl text-lab-ink">{title}</h2>
      <ul className="mt-4 max-w-3xl space-y-2 text-lab-muted">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lab-teal" />
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
