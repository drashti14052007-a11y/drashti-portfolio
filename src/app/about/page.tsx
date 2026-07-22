import type { Metadata } from "next";
import Image from "next/image";
import { GhostLink } from "@/components/GhostButton";
import { OutlinedCard, Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Drashti Patel — Food Processing Technology student building AI decision-support for food R&D.",
};

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl text-lab-ink sm:text-5xl">
            Building toward Executive-level food R&D
          </h1>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-card border border-lab-line">
              <Image
                src="/images/portrait.png"
                alt="Professional portrait of Drashti Patel"
                width={720}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="mt-4 overflow-hidden rounded-card border border-lab-line">
              <Image
                src="/images/lab-coat.png"
                alt="Drashti Patel wearing a lab coat"
                width={720}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal>
              <h2 className="font-display text-2xl text-lab-ink">Who I am</h2>
              <p className="mt-4 leading-relaxed text-lab-muted">
                I am a second-year B.Tech student in Food Processing Technology
                at {site.education.school}, affiliated with{" "}
                {site.education.university}. My primary career focus is Research
                & Development in the food industry—product development, process
                optimization, food safety, and innovation.
              </p>
              <p className="mt-4 leading-relaxed text-lab-muted">
                Alongside my core field, I develop frontend and UI/UX skills so I
                can build usable digital tools for food-domain problems. Frontend
                is not a separate career track—it is how I make scientific
                decision-support accessible.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl text-lab-ink">
                Academic journey
              </h2>
              <OutlinedCard className="mt-4" hover={false}>
                <p className="text-sm text-lab-ink">
                  {site.education.degree}
                </p>
                <p className="mt-1 text-sm text-lab-muted">
                  {site.education.school} · {site.education.university}
                </p>
                <p className="mt-1 text-sm text-lab-muted">
                  {site.education.year} · {site.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-lab-muted">
                  I enjoy laboratory coursework spanning formulation, process
                  optimization, quality analysis, food chemistry, microbiology,
                  preservation, safety, and sensory evaluation—and I extend that
                  learning through independent research-oriented projects.
                </p>
              </OutlinedCard>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl text-lab-ink">How I think</h2>
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
              <p className="mt-4 text-sm text-lab-muted">
                I am actively expanding industrial/lab exposure and deepening
                machine learning and food-process modelling toward
                production-ready reliability.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl text-lab-ink">
                Focus domains
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-lab-muted">
                Food formulation, sensory science, product development, process
                optimization, food safety, and nutrition-driven innovation—
                with particular interest in confectionery/chocolate, dairy,
                bakery, ingredients/nutrition science, and regulatory research
                environments such as Barry Callebaut, Lindt, Nestlé R&D,
                Mondelez, PepsiCo, Amul, Britannia, Kerry, DSM-Firmenich, CFTRI,
                FSSAI, and NIFTEM.
              </p>
              <GhostLink href="/contact" className="mt-6">
                Open to mentorship & internships
              </GhostLink>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
