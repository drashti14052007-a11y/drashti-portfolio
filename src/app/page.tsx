import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GhostLink } from "@/components/GhostButton";
import { OutlinedCard, Reveal } from "@/components/Reveal";
import { labCapabilities, site } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.find((p) => p.featured)!;
  const supporting = projects.filter((p) => !p.featured);

  return (
    <div>
      <section className="relative overflow-hidden px-6 pb-20 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(47,111,115,0.06),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(30,36,48,0.04),transparent_35%)]" />
        <div className="relative mx-auto max-w-content">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-lab-muted">
              Food Processing Technology · R&D
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-lab-ink sm:text-6xl md:text-7xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-lab-muted sm:text-xl">
              {site.oneLiner}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GhostLink href="/work">
                Explore my work <ArrowRight size={16} />
              </GhostLink>
              <GhostLink href={site.links.notestackLive} external>
                Live NoteStack
              </GhostLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-lab-line bg-white px-6 py-8">
        <Reveal className="mx-auto flex max-w-content flex-col gap-2 text-sm text-lab-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8 sm:gap-y-2">
          <span className="text-lab-ink">{site.education.degree}</span>
          <span>{site.education.school}</span>
          <span>{site.education.university}</span>
          <span>{site.education.year}</span>
          <span>{site.location}</span>
        </Reveal>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-3xl text-lab-ink sm:text-4xl">
              Food science & lab capabilities
            </h2>
            <p className="mt-3 max-w-2xl text-lab-muted">
              Domain foundations first—the craft behind every decision-support
              tool I build.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {labCapabilities.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.05}>
                <OutlinedCard>
                  <h3 className="font-display text-xl text-lab-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-lab-muted">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-lab-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </OutlinedCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Why I build
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-4xl">
              Decision-support for real R&D bottlenecks
            </h2>
            <p className="mt-5 text-lab-muted leading-relaxed">
              Formulation and thermal processing are scientifically sound—but
              often slow, expensive, or overly conservative. I build tools that
              help food scientists make better decisions earlier, without
              replacing their expertise.
            </p>
            <GhostLink href="/about" className="mt-8">
              Read my story <ArrowRight size={16} />
            </GhostLink>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-card border border-lab-line bg-lab-bg">
              <Image
                src="/images/lab-coat.png"
                alt="Drashti Patel in a white lab coat"
                width={720}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-3xl text-lab-ink sm:text-4xl">
              Selected work
            </h2>
            <p className="mt-3 text-lab-muted">
              Flagship proof first—then complementary R&D and systems work.
            </p>
          </Reveal>

          <Reveal className="mt-10">
            <OutlinedCard className="p-0 overflow-hidden">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-pill border border-lab-teal/30 bg-lab-teal-soft px-2.5 py-1 text-xs text-lab-teal">
                      Featured
                    </span>
                    <span className="text-xs text-lab-muted">{featured.status}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl text-lab-ink">
                    {featured.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-lab-muted">{featured.tagline}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <GhostLink href={`/work/${featured.slug}`}>
                      View case study
                    </GhostLink>
                    {featured.liveUrl && (
                      <GhostLink href={featured.liveUrl} external>
                        Live demo
                      </GhostLink>
                    )}
                  </div>
                </div>
                <div className="border-t border-lab-line bg-lab-bg p-8 lg:border-l lg:border-t-0">
                  <p className="text-xs uppercase tracking-[0.16em] text-lab-muted">
                    Snapshot
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-lab-ink">
                    {featured.metrics?.map((m) => (
                      <li
                        key={m.label}
                        className="flex items-center justify-between border-b border-lab-line pb-2"
                      >
                        <span className="text-lab-muted">{m.label}</span>
                        <span className="font-mono">{m.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </OutlinedCard>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {supporting.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <OutlinedCard className="h-full">
                  <p className="text-xs text-lab-muted">{project.status}</p>
                  <h3 className="mt-2 font-display text-2xl text-lab-ink">
                    {project.name}
                  </h3>
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
      </section>

      <section className="border-t border-lab-line bg-white px-6 py-16">
        <Reveal className="mx-auto max-w-content text-center">
          <h2 className="font-display text-3xl text-lab-ink">
            Open to R&D internships & research mentorship
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lab-muted">
            {site.education.school} · {site.location}
          </p>
          <div className="mt-8 flex justify-center">
            <GhostLink href="/contact">
              Get in touch <ArrowRight size={16} />
            </GhostLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
