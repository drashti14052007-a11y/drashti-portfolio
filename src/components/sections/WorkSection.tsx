import Image from "next/image";
import { ArrowRight } from "@/components/Icons";
import { GhostLink } from "@/components/GhostButton";
import { Reveal } from "@/components/Reveal";
import { BlueprintGrid } from "@/components/ScientificDecor";
import { projectImages } from "@/lib/content";
import { projects } from "@/lib/projects";

export function WorkSection() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="work"
      className="relative scroll-mt-24 overflow-hidden px-6 pb-28 pt-32"
    >
      <BlueprintGrid className="opacity-40" />
      <div className="relative mx-auto max-w-content">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
            Work
          </p>
          <h1 className="mt-3 font-display text-4xl text-lab-ink sm:text-5xl lg:text-6xl">
            Selected R&D work
          </h1>
          <p className="mt-5 max-w-2xl text-lab-muted">
            Case studies in food decision-support and transferable systems
            engineering—led by NoteStack.
          </p>
        </Reveal>

        {/* Featured full-width research card */}
        <Reveal className="mt-14">
          <article className="group overflow-hidden rounded-card border border-lab-line bg-white shadow-lift transition duration-300 ease-outCubic hover:-translate-y-1 hover:shadow-card-hover">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[280px] overflow-hidden bg-[#EAF4FA] lg:min-h-[420px]">
                <Image
                  src={projectImages[featured.slug]}
                  alt={`${featured.name} preview`}
                  fill
                  priority
                  className="object-cover transition duration-700 ease-outCubic group-hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-pill border border-sky-300/60 bg-sky-50 px-2.5 py-1 text-xs text-sky-700">
                    Featured
                  </span>
                  <span className="rounded-pill border border-lab-line px-2.5 py-1 text-xs text-lab-muted">
                    {featured.status}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-3xl text-lab-ink sm:text-4xl">
                  {featured.name}
                </h2>
                <p className="mt-4 text-lab-muted">{featured.tagline}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.domain.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill border border-lab-line bg-lab-bg/50 px-3 py-1 text-xs text-lab-muted transition group-hover:border-lab-teal/35"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {featured.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="rounded-pill border border-lab-teal/25 bg-lab-teal-soft/40 px-3 py-1 text-xs text-lab-teal"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <GhostLink href={`/work/${featured.slug}`}>
                    Case Study <ArrowRight size={16} />
                  </GhostLink>
                  {featured.githubUrl && (
                    <GhostLink href={featured.githubUrl} external>
                      GitHub
                    </GhostLink>
                  )}
                  {featured.liveUrl && (
                    <GhostLink href={featured.liveUrl} external>
                      Live Demo
                    </GhostLink>
                  )}
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Supporting premium cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-card border border-lab-line bg-white transition duration-300 ease-outCubic hover:-translate-y-1 hover:border-lab-teal/40 hover:shadow-lift">
                <div className="relative h-52 overflow-hidden bg-[#EAF4FA]">
                  <Image
                    src={projectImages[project.slug]}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover transition duration-700 ease-outCubic group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.14em] text-lab-muted">
                    {project.status}
                  </p>
                  <h2 className="mt-2 font-display text-2xl text-lab-ink">
                    {project.name}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-lab-muted">
                    {project.tagline}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.domain.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-pill border border-lab-line px-2.5 py-1 text-[0.7rem] text-lab-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-pill border border-lab-teal/20 bg-lab-teal-soft/30 px-2.5 py-1 text-[0.7rem] text-lab-teal"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <GhostLink href={`/work/${project.slug}`} magnetic={false}>
                      Case Study
                    </GhostLink>
                    {project.githubUrl && (
                      <GhostLink href={project.githubUrl} external magnetic={false}>
                        GitHub
                      </GhostLink>
                    )}
                    {project.liveUrl && (
                      <GhostLink href={project.liveUrl} external magnetic={false}>
                        Live Demo
                      </GhostLink>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
