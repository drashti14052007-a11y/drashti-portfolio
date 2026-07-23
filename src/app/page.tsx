import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { GhostLink } from "@/components/GhostButton";
import { HashScroll } from "@/components/HashScroll";
import { OutlinedCard, Reveal } from "@/components/Reveal";
import { IntentPicker } from "@/components/Wow";
import { hackathons, internships } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { labCapabilities, site } from "@/lib/site";

export default function HomePage() {
  const featured = projects.find((p) => p.featured)!;
  const supporting = projects.filter((p) => !p.featured);

  return (
    <div>
      <HashScroll />

      {/* HOME */}
      <section
        id="home"
        className="scroll-mt-24"
      >
        <div className="relative flex min-h-[100svh] flex-col overflow-hidden px-6 pt-28 sm:pt-32">
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
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center py-8 text-center sm:py-12">
            <Reveal>
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-lab-muted sm:text-xs">
                Food Processing Technology · R&D
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-5 w-full font-lexend font-bold uppercase leading-[0.9] tracking-[-0.02em] text-lab-ink drop-shadow-[0_2px_22px_rgba(255,255,255,0.95)]">
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
                <GhostLink href="#work">
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
        </div>

        {/* Capabilities stay inside #home so nav underline stays on Home */}
        <div
          aria-labelledby="capabilities-heading"
          className="bg-[#EAF4FA] px-6 py-20"
        >
          <div className="mx-auto max-w-content">
            <Reveal>
              <h2
                id="capabilities-heading"
                className="font-display text-3xl text-lab-ink sm:text-4xl"
              >
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
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#F4F7F8] px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-content">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
                About
              </p>
              <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-4xl">
                Building toward Executive-level food R&D
              </h2>
              <p className="mt-5 max-w-lg text-lab-muted leading-relaxed">
                I am a second-year B.Tech student in Food Processing Technology
                at {site.education.school}, affiliated with{" "}
                {site.education.university}. My primary career focus is Research
                & Development—product development, process optimization, food
                safety, and innovation.
              </p>
              <p className="mt-4 max-w-lg text-lab-muted leading-relaxed">
                Frontend and UI/UX are not a separate career track—they are how
                I make scientific decision-support accessible for real R&D
                bottlenecks.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden sm:max-w-lg">
                <Image
                  src="/images/lab-coat.jpg"
                  alt="Drashti Patel in a lab coat"
                  fill
                  className="object-cover object-[center_10%]"
                  sizes="(max-width: 1024px) 90vw, 520px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F4F7F8] via-transparent to-[#F4F7F8]/50" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#F4F7F8]/40 via-transparent to-[#F4F7F8]/85" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F4F7F8] via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-2xl text-lab-ink">How I think</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-lab-muted">
                <li>
                  I translate food science concepts into practical digital tools
                  (NoteStack, HeatGuard).
                </li>
                <li>
                  I solve interdisciplinary problems at the intersection of Food
                  Processing Technology, software, and AI.
                </li>
                <li>
                  I design for end users—scientific complexity should feel
                  clear, not intimidating.
                </li>
                <li>
                  I learn independently and communicate technical work through
                  structured documentation and visuals.
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.06}>
              <h3 className="font-display text-2xl text-lab-ink">
                Focus domains
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-lab-muted">
                Food formulation, sensory science, product development, process
                optimization, food safety, and nutrition-driven innovation—with
                particular interest in confectionery/chocolate, dairy, bakery,
                ingredients/nutrition science, and regulatory research
                environments.
              </p>
              <OutlinedCard hover={false} className="mt-6">
                <p className="text-sm text-lab-ink">{site.education.degree}</p>
                <p className="mt-1 text-sm text-lab-muted">
                  {site.education.school} · {site.education.university}
                </p>
                <p className="mt-1 text-sm text-lab-muted">
                  {site.education.year} · {site.location}
                </p>
              </OutlinedCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="scroll-mt-24 bg-[#EAF4FA] px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Work
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-4xl">
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
                    <span className="text-xs text-lab-muted">
                      {featured.status}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl text-lab-ink">
                    {featured.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-lab-muted">
                    {featured.tagline}
                  </p>
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

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="scroll-mt-24 bg-lab-bg px-6 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Experience
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-4xl">
              Craft that serves science
            </h2>
            <p className="mt-4 max-w-2xl text-lab-muted">
              Internships and hackathons that strengthen how I design usable
              tools for food R&D—not a separate frontend identity.
            </p>
          </Reveal>

          <div className="mt-12">
            <Reveal>
              <h3 className="font-display text-2xl text-lab-ink">Internships</h3>
            </Reveal>
            <div className="mt-6 space-y-4">
              {internships.map((item, i) => (
                <Reveal key={item.org} delay={i * 0.05}>
                  <OutlinedCard>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h4 className="font-display text-xl text-lab-ink">
                        {item.org}
                      </h4>
                      <p className="text-xs text-lab-muted">{item.time}</p>
                    </div>
                    <p className="mt-1 text-sm text-lab-teal">{item.role}</p>
                    <ul className="mt-4 space-y-2 text-sm text-lab-muted">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 rounded-full bg-lab-teal" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </OutlinedCard>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <Reveal>
              <h3 className="font-display text-2xl text-lab-ink">Hackathons</h3>
            </Reveal>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {hackathons.map((h, i) => (
                <Reveal key={h.name} delay={i * 0.05}>
                  <OutlinedCard className="h-full">
                    <h4 className="font-display text-lg text-lab-ink">
                      {h.name}
                    </h4>
                    <p className="mt-3 text-sm text-lab-muted">{h.detail}</p>
                  </OutlinedCard>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-14">
            <h3 className="font-display text-2xl text-lab-ink">SSIP · TrackBot</h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-lab-muted">
              Contributed to system architecture, firmware/software, navigation
              logic, dashboard integration, and research documentation for a
              low-cost warehouse AGV—currently under university review for
              ₹35,000 SSIP innovation funding.
            </p>
            <GhostLink href="/work/trackbot" className="mt-6">
              Read TrackBot case study
            </GhostLink>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 bg-[#E8F3F8] px-6 py-24 sm:py-28"
      >
        <div className="mx-auto max-w-content text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl text-lab-ink sm:text-5xl">
              Open to R&D internships & research mentorship
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lab-muted">
              If you lead food R&D, research, or innovation teams—or can mentor
              a Food Processing Technology student building decision-support
              tools—I would be glad to connect.
            </p>
            <p className="mt-3 text-sm text-lab-muted">{site.location}</p>
          </Reveal>

          <Reveal className="mt-12">
            <IntentPicker />
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-lg space-y-3 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="block rounded-card border border-lab-line bg-white px-4 py-3 text-lab-ink transition hover:border-lab-teal"
            >
              {site.email}
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block rounded-card border border-lab-line bg-white px-4 py-3 text-lab-ink transition hover:border-lab-teal"
            >
              LinkedIn
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="block rounded-card border border-lab-line bg-white px-4 py-3 text-lab-ink transition hover:border-lab-teal"
            >
              GitHub
            </a>
            <div className="grid gap-3 sm:grid-cols-3">
              <GhostLink
                href={site.links.resume}
                magnetic={false}
                className="w-full"
              >
                Resume
              </GhostLink>
              <GhostLink
                href={site.links.instagram}
                magnetic={false}
                className="w-full"
              >
                Instagram
              </GhostLink>
              <GhostLink href={site.links.x} magnetic={false} className="w-full">
                X
              </GhostLink>
            </div>
            <p className="pt-2 text-xs text-lab-muted">
              Resume, Instagram, and X are placeholders until final links are
              added.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
