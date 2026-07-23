import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { GhostLink } from "@/components/GhostButton";
import { Reveal } from "@/components/Reveal";
import { labCapabilities, site } from "@/lib/site";
import { projects } from "@/lib/projects";

export default function HomePage() {
  const featured = projects.find((p) => p.featured)!;
  const supporting = projects.filter((p) => !p.featured);

  return (
    <div>
      {/* 1 — Hero Mix 3: oversized CAPS name + academics inside slide */}
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden px-6 pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-lab-atmosphere.png"
            alt=""
            fill
            priority
            className="object-cover object-center opacity-[0.92]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/25 to-white/75" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center py-8 text-center sm:py-12">
          <Reveal>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-lab-muted sm:text-xs">
              Food Processing Technology · R&D
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-5 w-full font-display font-medium uppercase leading-[0.88] tracking-[-0.03em] text-lab-ink drop-shadow-[0_2px_22px_rgba(255,255,255,0.95)]">
              <span className="block text-[clamp(3.8rem,16vw,10.5rem)]">
                Drashti
              </span>
              <span className="mt-0 block text-[clamp(3.8rem,16vw,10.5rem)]">
                Patel
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-lab-ink/80 sm:mt-9 sm:text-lg">
              {site.oneLiner}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9">
              <GhostLink href="/work">
                Explore my work <ArrowRight size={16} />
              </GhostLink>
              <GhostLink href={site.links.notestackLive} external>
                Live NoteStack
              </GhostLink>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mx-auto mt-10 max-w-4xl border-t border-lab-line/80 pt-5 sm:mt-12 sm:pt-6">
              <p className="flex flex-col items-center gap-2 text-center text-[0.8rem] leading-relaxed text-lab-muted sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-3 sm:text-sm">
                <span className="text-lab-ink">{site.education.degree}</span>
                <span className="hidden sm:inline">·</span>
                <span>{site.education.school}</span>
                <span className="hidden sm:inline">·</span>
                <span>{site.education.university}</span>
                <span className="hidden sm:inline">·</span>
                <span>{site.education.year}</span>
                <span className="hidden sm:inline">·</span>
                <span>{site.location}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#EAF4FA] px-6 py-20">
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
                <div className="shimmer-card h-full transition duration-200 ease-outCubic">
                  <h3 className="font-display text-xl text-lab-ink">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-lab-muted">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-sky-500" />
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

      {/* 3 — Story: larger lab-coat face + sharp front portrait */}
      <section className="bg-[#F4F7F8] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Why I build
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-4xl">
              Decision-support for real R&D bottlenecks
            </h2>
            <p className="mt-5 max-w-lg text-lab-muted leading-relaxed">
              Formulation and thermal processing are scientifically sound—but
              often slow, expensive, or overly conservative. I build tools that
              help food scientists make better decisions earlier, without
              replacing their expertise.
            </p>
            <GhostLink href="/about" className="mt-8">
              Read my story <ArrowRight size={16} />
            </GhostLink>
          </Reveal>

          <div className="relative mx-auto h-[30rem] w-full max-w-lg sm:h-[36rem]">
            <Reveal
              delay={0.05}
              className="absolute inset-y-0 left-0 w-[92%] overflow-hidden"
            >
              <Image
                src="/images/lab-coat.jpg"
                alt="Drashti Patel in a lab coat"
                fill
                className="object-cover object-[center_12%] opacity-70 saturate-[0.85]"
                sizes="(max-width: 1024px) 90vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7F8] via-transparent to-[#F4F7F8]/80" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#F4F7F8]/70 via-transparent to-[#F4F7F8]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7F8] via-transparent to-transparent" />
            </Reveal>

            <Reveal
              delay={0.18}
              className="absolute bottom-0 right-0 z-10 h-[72%] w-[58%] overflow-hidden rounded-card border border-white bg-white shadow-[0_20px_55px_rgba(30,36,48,0.16)] ring-1 ring-lab-line/40 sm:w-[55%]"
            >
              <Image
                src="/images/portfolio.jpeg"
                alt="Drashti Patel professional portrait"
                fill
                className="object-cover object-[center_12%]"
                sizes="(max-width: 1024px) 55vw, 300px"
                priority
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 — Projects Option A: light blue + shimmer */}
      <section className="bg-[#EAF4FA] px-6 py-20 sm:py-24">
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
            <div className="shimmer-card overflow-hidden p-0">
              <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-pill border border-sky-300/60 bg-sky-50 px-2.5 py-1 text-xs text-sky-700">
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
                <div className="border-t border-lab-line bg-white/70 p-8 lg:border-l lg:border-t-0">
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
            </div>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {supporting.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <div className="shimmer-card h-full">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Last — CTA Option B light blue */}
      <section className="bg-[#E8F3F8] px-6 py-24 sm:py-28">
        <Reveal className="mx-auto max-w-content text-center">
          <h2 className="font-display text-3xl text-lab-ink sm:text-5xl">
            Open to R&D internships & research mentorship
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lab-muted">
            {site.education.school} · {site.location}
          </p>
          <div className="mt-10 flex justify-center">
            <GhostLink href="/contact">
              Get in touch <ArrowRight size={16} />
            </GhostLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
