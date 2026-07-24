import { ContactForm } from "@/components/ContactForm";
import { GhostLink } from "@/components/GhostButton";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "@/components/Icons";
import { Reveal } from "@/components/Reveal";
import {
  BlueprintGrid,
  FlaskIllustration,
  MoleculeSketch,
} from "@/components/ScientificDecor";
import { collaborationOptions } from "@/lib/content";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-6 pb-28 pt-32"
    >
      <BlueprintGrid className="opacity-45" />
      <MoleculeSketch className="pointer-events-none absolute -right-8 top-28 hidden h-48 w-auto opacity-30 lg:block" />

      <div className="relative mx-auto max-w-content">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
            Contact
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl text-lab-ink sm:text-5xl lg:text-6xl">
            Let&apos;s Build Better Food Systems Together
          </h1>
          <p className="mt-5 max-w-2xl text-lab-muted">
            If you lead food R&D, research, or innovation teams—or can mentor a
            Food Processing Technology student building decision-support
            tools—I would be glad to connect.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="space-y-8">
            <Reveal>
              <h2 className="font-display text-2xl text-lab-ink">
                Collaboration options
              </h2>
              <ul className="mt-5 space-y-3">
                {collaborationOptions.map((option) => (
                  <li
                    key={option.title}
                    className="rounded-card border border-lab-line bg-white/80 px-5 py-4 transition duration-200 ease-outCubic hover:border-lab-teal/40 hover:shadow-lift"
                  >
                    <p className="font-medium text-lab-ink">{option.title}</p>
                    <p className="mt-1 text-sm text-lab-muted">
                      {option.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="rounded-card border border-lab-line bg-[#EAF4FA]/70 p-6">
                <h3 className="font-display text-xl text-lab-ink">Connect</h3>
                <ul className="mt-5 space-y-3 text-sm">
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center gap-2 text-lab-ink transition hover:text-lab-teal"
                    >
                      <Mail size={16} className="text-lab-teal" />
                      {site.email}
                    </a>
                  </li>
                  <li className="inline-flex items-center gap-2 text-lab-muted">
                    <MapPin size={16} className="text-lab-teal" />
                    {site.location}
                  </li>
                  <li>
                    <a
                      href={site.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-lab-ink transition hover:text-lab-teal"
                    >
                      <Linkedin size={16} className="text-lab-teal" />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-lab-ink transition hover:text-lab-teal"
                    >
                      <Github size={16} className="text-lab-teal" />
                      GitHub
                    </a>
                  </li>
                </ul>
                <div className="mt-5 flex flex-wrap gap-3">
                  <GhostLink href={site.links.resume} magnetic={false}>
                    Resume
                  </GhostLink>
                  <GhostLink href={site.links.instagram} magnetic={false}>
                    Instagram
                  </GhostLink>
                  <GhostLink href={site.links.x} magnetic={false}>
                    X
                  </GhostLink>
                </div>
                <p className="mt-3 text-xs text-lab-muted">
                  Resume, Instagram, and X are placeholders until final links
                  are added.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="relative">
            <FlaskIllustration className="pointer-events-none absolute -right-4 -top-6 h-28 w-auto opacity-30" />
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
