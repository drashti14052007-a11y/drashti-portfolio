import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { GhostLink } from "@/components/GhostButton";
import { OutlinedCard, Reveal } from "@/components/Reveal";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected R&D projects by Drashti Patel — NoteStack, HeatGuard, and TrackBot.",
};

export default function WorkPage() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
            Work
          </p>
          <h1 className="mt-3 font-display text-4xl text-lab-ink sm:text-5xl">
            Selected R&D work
          </h1>
          <p className="mt-4 max-w-2xl text-lab-muted">
            Case studies in food decision-support and transferable systems
            engineering—led by NoteStack.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <OutlinedCard className="overflow-hidden p-0">
            <div className="p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-lab-teal">
                Flagship · {featured.status}
              </p>
              <h2 className="mt-3 font-display text-3xl text-lab-ink">
                {featured.name}
              </h2>
              <p className="mt-3 max-w-2xl text-lab-muted">{featured.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.domain.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-pill border border-lab-line px-3 py-1 text-xs text-lab-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <GhostLink href={`/work/${featured.slug}`}>
                  Read case study <ArrowRight size={16} />
                </GhostLink>
                {featured.liveUrl && (
                  <GhostLink href={featured.liveUrl} external>
                    Live demo
                  </GhostLink>
                )}
              </div>
            </div>
          </OutlinedCard>
        </Reveal>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <OutlinedCard className="h-full">
                <p className="text-xs text-lab-muted">{project.status}</p>
                <h2 className="mt-2 font-display text-2xl text-lab-ink">
                  {project.name}
                </h2>
                <p className="mt-3 text-sm text-lab-muted">{project.tagline}</p>
                <Link
                  href={`/work/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-lab-teal"
                >
                  View case study <ArrowRight size={14} />
                </Link>
              </OutlinedCard>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
