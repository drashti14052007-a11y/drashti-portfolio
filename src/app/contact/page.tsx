import type { Metadata } from "next";
import { GhostLink } from "@/components/GhostButton";
import { Reveal } from "@/components/Reveal";
import { IntentPicker } from "@/components/Wow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Drashti Patel — open to R&D internships and research mentorship.",
};

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-content text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
            Contact
          </p>
          <h1 className="mt-3 font-display text-4xl text-lab-ink sm:text-5xl">
            Open to R&D internships & research mentorship
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lab-muted">
            If you lead food R&D, research, or innovation teams—or can mentor a
            Food Processing Technology student building decision-support
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
            <GhostLink href={site.links.resume} magnetic={false} className="w-full">
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
            Resume, Instagram, and X are placeholders until final links are added.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
