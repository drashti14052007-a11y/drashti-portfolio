export const homeStats = [
  { label: "Projects", value: "03" },
  { label: "Internships", value: "02" },
  { label: "Research focus", value: "R&D" },
  { label: "Technologies", value: "12+" },
  { label: "Current focus", value: "FPT" },
] as const;

export const academicJourney = [
  {
    title: "B.Tech",
    detail: "Food Processing Technology",
    meta: "Degree program",
  },
  {
    title: "ADIT",
    detail: "A.D. Patel Institute of Technology",
    meta: "Institute",
  },
  {
    title: "CVM University",
    detail: "Affiliated university",
    meta: "University",
  },
  {
    title: "Year 2",
    detail: "Second year · Class of 2029",
    meta: "Current year",
  },
  {
    title: "2029",
    detail: "Expected graduation",
    meta: "Horizon",
  },
] as const;

export const coreStrengths = [
  {
    title: "Lab-first Thinking",
    description:
      "I start from laboratory reality—formulation, process, and safety—before shaping a digital tool.",
  },
  {
    title: "Research Driven",
    description:
      "Every project is framed as a research question with method, limits, and next experiments.",
  },
  {
    title: "Product Development",
    description:
      "I care about sensory targets, ingredient choices, and how prototypes become usable products.",
  },
  {
    title: "Scientific Validation",
    description:
      "Confidence scores, compliance checks, and honest limitations keep decision-support trustworthy.",
  },
  {
    title: "Problem Solving",
    description:
      "I translate slow, costly R&D bottlenecks into clearer workflows scientists can actually use.",
  },
  {
    title: "Decision Support",
    description:
      "Tools should help experts decide earlier—never pretend to replace scientific judgment.",
  },
] as const;

export const researchInterests = [
  "Food Safety",
  "Food Chemistry",
  "Shelf-life",
  "Product Formulation",
  "Thermal Processing",
  "Microbiology",
  "Sensory Science",
  "Quality Assurance",
] as const;

export const toolStack = [
  "Python",
  "Pandas",
  "Plotly",
  "Figma",
  "GitHub",
  "VS Code",
  "Excel",
  "Canva",
] as const;

export const collaborationOptions = [
  {
    title: "Research Mentorship",
    description: "Guidance on food R&D methods, modelling, and scientific communication.",
  },
  {
    title: "R&D Internship",
    description: "Hands-on product development, process, safety, or innovation projects.",
  },
  {
    title: "Product Development",
    description: "Formulation, sensory targets, and nutrition-driven innovation work.",
  },
  {
    title: "Innovation Projects",
    description: "Decision-support tools at the intersection of food science and software.",
  },
  {
    title: "Academic Collaboration",
    description: "Joint studies, hackathons, and research documentation partnerships.",
  },
] as const;

export const projectImages: Record<string, string> = {
  notestack: "/images/notestack-mockup.png",
  heatguard: "/images/heatguard-mockup.png",
  trackbot: "/images/trackbot-mockup.png",
};
