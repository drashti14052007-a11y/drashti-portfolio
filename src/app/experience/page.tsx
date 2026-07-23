import type { Metadata } from "next";
import { OutlinedCard, Reveal } from "@/components/Reveal";
import { GhostLink } from "@/components/GhostButton";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internships, hackathons, and SSIP innovation experience — Drashti Patel.",
};

const internships = [
  {
    org: "CodeAlpha",
    role: "Frontend Development Intern",
    time: "June 2026 – July 2026 · 1 month",
    points: [
      "Built responsive interfaces with HTML, CSS, and JavaScript",
      "Practiced deployment workflows and clean UI organization",
      "Applied usability lessons later in NoteStack and HeatGuard",
    ],
  },
  {
    org: "CodSoft",
    role: "UI/UX Design Intern",
    time: "1 month · task-based",
    points: [
      "Designed AuthFlow, Luxe, and Noir Bistro in Figma",
      "Built interactive prototypes and visual systems",
      "Shifted product thinking from features-first to user-first",
    ],
  },
];

const hackathons = [
  {
    name: "Cursor Ahmedabad Hackathon 2026",
    detail:
      "Team Artificial Alliance — selected among the youngest teams from 1,000+ registrations; collaborated on an AI-powered solution.",
  },
  {
    name: "CVM University Hackathon 2026",
    detail:
      "University-level innovation hackathon at A.D. Patel Institute of Technology.",
  },
  {
    name: "HBTM × IIIT Pune Hackathon",
    detail: "Selected for upcoming interdisciplinary technology collaboration.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="px-6 pb-24 pt-32">
      <div className="mx-auto max-w-content">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
            Experience
          </p>
          <h1 className="mt-3 font-display text-4xl text-lab-ink sm:text-5xl">
            Craft that serves science
          </h1>
          <p className="mt-4 max-w-2xl text-lab-muted">
            Internships and hackathons that strengthen how I design usable tools
            for food R&D—not a separate frontend identity.
          </p>
        </Reveal>

        <section className="mt-14">
          <Reveal>
            <h2 className="font-display text-2xl text-lab-ink">Internships</h2>
          </Reveal>
          <div className="mt-6 space-y-4">
            {internships.map((item, i) => (
              <Reveal key={item.org} delay={i * 0.05}>
                <OutlinedCard>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="font-display text-xl text-lab-ink">
                      {item.org}
                    </h3>
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
          <Reveal className="mt-4">
            <OutlinedCard hover={false} className="bg-lab-teal-soft/30">
              <p className="text-sm text-lab-ink">
                <strong>Transfer:</strong> internship craft → clearer scientific
                interfaces. The goal is always the same: make complex R&D
                systems feel simple enough to use.
              </p>
            </OutlinedCard>
          </Reveal>
        </section>

        <section className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl text-lab-ink">Hackathons</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {hackathons.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.05}>
                <OutlinedCard className="h-full">
                  <h3 className="font-display text-lg text-lab-ink">{h.name}</h3>
                  <p className="mt-3 text-sm text-lab-muted">{h.detail}</p>
                </OutlinedCard>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl text-lab-ink">
              SSIP · TrackBot
            </h2>
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
        </section>
      </div>
    </div>
  );
}
