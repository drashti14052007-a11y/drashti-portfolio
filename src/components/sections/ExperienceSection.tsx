import { GhostLink } from "@/components/GhostButton";
import { Reveal } from "@/components/Reveal";
import {
  BlueprintGrid,
  FlaskIllustration,
  MicroscopeSketch,
} from "@/components/ScientificDecor";

const timeline = [
  {
    org: "CodeAlpha",
    role: "Frontend Development Intern",
    time: "June 2026 – July 2026 · 1 month",
    contributions: [
      "Built responsive interfaces with HTML, CSS, and JavaScript",
      "Practiced deployment workflows and clean UI organization",
      "Applied usability lessons later in NoteStack and HeatGuard",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Deployment"],
    learning:
      "Clear structure and deployment discipline make scientific tools feel usable.",
  },
  {
    org: "CodSoft",
    role: "UI/UX Design Intern",
    time: "1 month · task-based",
    contributions: [
      "Designed AuthFlow, Luxe, and Noir Bistro in Figma",
      "Built interactive prototypes and visual systems",
      "Shifted product thinking from features-first to user-first",
    ],
    tech: ["Figma", "Prototyping", "Visual systems"],
    learning:
      "User-first craft transfers directly into decision-support clarity.",
  },
  {
    org: "Cursor Ahmedabad Hackathon 2026",
    role: "Team Artificial Alliance",
    time: "2026",
    contributions: [
      "Selected among the youngest teams from 1,000+ registrations",
      "Collaborated on an AI-powered solution under time pressure",
    ],
    tech: ["AI", "Team collaboration"],
    learning: "Speed and clarity matter when research becomes a prototype.",
  },
  {
    org: "CVM University Hackathon 2026",
    role: "Participant",
    time: "2026 · ADIT",
    contributions: [
      "University-level innovation hackathon at A.D. Patel Institute of Technology",
    ],
    tech: ["Innovation", "Rapid prototyping"],
    learning: "Campus research culture sharpens interdisciplinary reflexes.",
  },
  {
    org: "HBTM × IIIT Pune Hackathon",
    role: "Selected collaborator",
    time: "Upcoming",
    contributions: [
      "Selected for upcoming interdisciplinary technology collaboration",
    ],
    tech: ["Interdisciplinary R&D"],
    learning: "Cross-institute work expands the research network.",
  },
  {
    org: "SSIP · TrackBot",
    role: "Software & systems contributor",
    time: "Under university review",
    contributions: [
      "System architecture, firmware/software, and navigation logic",
      "Dashboard integration and research documentation",
      "₹35,000 SSIP innovation funding under review",
    ],
    tech: ["ESP32-S3", "FastAPI", "RFID", "A*"],
    learning:
      "Industry 4.0 automation skills transfer into smart food-plant thinking.",
  },
] as const;

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden px-6 pb-28 pt-32"
    >
      <BlueprintGrid className="opacity-40" />
      <div className="relative mx-auto max-w-content">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
            Experience
          </p>
          <h1 className="mt-3 font-display text-4xl text-lab-ink sm:text-5xl lg:text-6xl">
            Craft that serves science
          </h1>
          <p className="mt-5 max-w-2xl text-lab-muted">
            A research timeline of internships, hackathons, and innovation
            work—strengthening how I design usable tools for food R&D.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="relative">
            <div className="absolute bottom-0 left-[11px] top-2 w-px bg-lab-line" />
            <ol className="space-y-8">
              {timeline.map((item, i) => (
                <Reveal key={`${item.org}-${item.role}`} delay={i * 0.04}>
                  <li className="relative grid grid-cols-[24px_1fr] gap-5">
                    <span className="relative z-10 mt-2 h-6 w-6 rounded-full border-2 border-lab-teal bg-white shadow-lift" />
                    <article className="rounded-card border border-lab-line bg-white p-6 transition duration-200 ease-outCubic hover:-translate-y-0.5 hover:border-lab-teal/40 hover:shadow-lift sm:p-7">
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h2 className="font-display text-2xl text-lab-ink">
                          {item.org}
                        </h2>
                        <p className="text-xs text-lab-muted">{item.time}</p>
                      </div>
                      <p className="mt-1 text-sm text-lab-teal">{item.role}</p>
                      <ul className="mt-4 space-y-2 text-sm text-lab-muted">
                        {item.contributions.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lab-teal" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-pill border border-lab-line px-2.5 py-1 text-[0.7rem] text-lab-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 border-t border-lab-line pt-4 text-sm text-lab-ink">
                        <span className="text-lab-muted">Key learning — </span>
                        {item.learning}
                      </p>
                    </article>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <aside className="relative hidden lg:block">
            <div className="sticky top-28 space-y-10 rounded-card border border-lab-line bg-[#EAF4FA]/70 p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-lab-muted">
                Laboratory mindset
              </p>
              <h2 className="font-display text-3xl text-lab-ink">
                Observe. Model. Decide.
              </h2>
              <p className="text-sm leading-relaxed text-lab-muted">
                Internship craft and hackathon speed exist to serve clearer
                scientific interfaces—not a separate frontend identity.
              </p>
              <div className="flex items-end justify-between pt-4">
                <MicroscopeSketch className="h-40 w-auto opacity-80" />
                <FlaskIllustration className="h-36 w-auto opacity-70" />
              </div>
              <GhostLink href="/work/trackbot" className="mt-2">
                Read TrackBot case study
              </GhostLink>
            </div>
          </aside>
        </div>

        <Reveal className="mt-12 rounded-card border border-lab-teal/25 bg-lab-teal-soft/30 p-6 sm:p-8 lg:hidden">
          <p className="text-sm text-lab-ink">
            <strong>Transfer:</strong> internship craft → clearer scientific
            interfaces. The goal is always the same: make complex R&D systems
            feel simple enough to use.
          </p>
          <GhostLink href="/work/trackbot" className="mt-5">
            Read TrackBot case study
          </GhostLink>
        </Reveal>
      </div>
    </section>
  );
}
