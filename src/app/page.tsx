import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { GhostLink } from "@/components/GhostButton";
import { HeroStats } from "@/components/HeroStats";
import { Reveal } from "@/components/Reveal";
import {
  BlueprintGrid,
  DnaCurve,
  HeroScienceVisual,
  MoleculeSketch,
} from "@/components/ScientificDecor";
import { labCapabilities, site } from "@/lib/site";
import { projectImages } from "@/lib/content";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.find((p) => p.featured)!;
  const supporting = projects.filter((p) => !p.featured);

  return (
    <div>
      {/* Hero — editorial two-column, preserved lab atmosphere + branding */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden px-6 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-lab-atmosphere.png"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-95"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/30 to-white/80" />
          <BlueprintGrid className="opacity-60" />
          <DnaCurve className="absolute -right-4 top-24 h-[55%] w-auto opacity-80 sm:right-8" />
          <MoleculeSketch className="absolute bottom-24 left-4 h-28 w-auto opacity-40 sm:left-10" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-content flex-1 flex-col justify-center gap-12 py-10 lg:gap-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <Reveal>
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-lab-muted sm:text-xs">
                  Food Processing Technology · R&D
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-5 font-lexend font-bold uppercase leading-[0.9] tracking-[-0.02em] text-lab-ink drop-shadow-[0_2px_22px_rgba(255,255,255,0.95)]">
                  <span className="block text-[clamp(3.2rem,10vw,7.5rem)]">
                    Drashti
                  </span>
                  <span className="block text-[clamp(3.2rem,10vw,7.5rem)]">
                    Patel
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-7 max-w-lg text-base leading-relaxed text-lab-ink/80 sm:mt-8 sm:text-lg">
                  {site.oneLiner}
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <GhostLink href="/work">
                    Explore my work <ArrowRight size={16} />
                  </GhostLink>
                  <GhostLink href={site.links.notestackLive} external>
                    Live NoteStack
                  </GhostLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="hidden sm:block">
              <HeroScienceVisual />
            </Reveal>
          </div>

          <HeroStats />
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative overflow-hidden bg-[#EAF4FA] px-6 py-24">
        <BlueprintGrid className="opacity-40" />
        <div className="relative mx-auto max-w-content">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Domain craft
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-5xl">
              Food science & lab capabilities
            </h2>
            <p className="mt-4 max-w-2xl text-lab-muted">
              Domain foundations first—the craft behind every decision-support
              tool I build.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {labCapabilities.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.05}>
                <div className="shimmer-card h-full transition duration-200 ease-outCubic">
                  <h3 className="font-display text-xl text-lab-ink sm:text-2xl">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5 text-sm text-lab-muted">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-lab-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#F4F7F8] px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-content items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Why I build
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-5xl">
              Decision-support for real R&D bottlenecks
            </h2>
            <p className="mt-6 max-w-lg text-lab-muted leading-relaxed">
              Formulation and thermal processing are scientifically sound—but
              often slow, expensive, or overly conservative. I build tools that
              help food scientists make better decisions earlier, without
              replacing their expertise.
            </p>
            <GhostLink href="/about" className="mt-10">
              Read my story <ArrowRight size={16} />
            </GhostLink>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden sm:max-w-lg">
              <Image
                src="/images/lab-coat.jpg"
                alt="Drashti Patel in a lab coat"
                fill
                className="object-cover object-[center_10%]"
                sizes="(max-width: 1024px) 90vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7F8] via-transparent to-[#F4F7F8]/50" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#F4F7F8]/40 via-transparent to-[#F4F7F8]/85" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7F8] via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Selected work */}
      <section className="bg-[#EAF4FA] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Selected work
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-5xl">
              Research that ships
            </h2>
            <p className="mt-4 max-w-2xl text-lab-muted">
              Flagship proof first—then complementary R&D and systems work.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <div className="shimmer-card overflow-hidden p-0">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="relative min-h-[240px] overflow-hidden bg-white/50 lg:min-h-full">
                  <Image
                    src={projectImages[featured.slug]}
                    alt={`${featured.name} preview`}
                    fill
                    className="object-cover transition duration-500 ease-outCubic hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-pill border border-sky-300/60 bg-sky-50 px-2.5 py-1 text-xs text-sky-700">
                      Featured
                    </span>
                    <span className="text-xs text-lab-muted">{featured.status}</span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl text-lab-ink sm:text-4xl">
                    {featured.name}
                  </h3>
                  <p className="mt-4 max-w-xl text-lab-muted">{featured.tagline}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featured.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-pill border border-lab-line bg-white/70 px-3 py-1 text-xs text-lab-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <GhostLink href={`/work/${featured.slug}`}>
                      Case study
                    </GhostLink>
                    {featured.liveUrl && (
                      <GhostLink href={featured.liveUrl} external>
                        Live demo
                      </GhostLink>
                    )}
                    {featured.githubUrl && (
                      <GhostLink href={featured.githubUrl} external>
                        GitHub
                      </GhostLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {supporting.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <div className="shimmer-card group h-full overflow-hidden p-0">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={projectImages[project.slug]}
                      alt={`${project.name} preview`}
                      fill
                      className="object-cover transition duration-500 ease-outCubic group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
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
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#E8F3F8] px-6 py-28">
        <MoleculeSketch className="pointer-events-none absolute -left-6 top-10 h-40 w-auto opacity-30" />
        <Reveal className="relative mx-auto max-w-content text-center">
          <h2 className="font-display text-3xl text-lab-ink sm:text-5xl">
            Open to R&D internships & research mentorship
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lab-muted">
            {site.education.school} · {site.location}
          </p>
          <div className="mt-10 flex justify-center">
            <GhostLink href="/contact">
              Let&apos;s collaborate <ArrowRight size={16} />
            </GhostLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
