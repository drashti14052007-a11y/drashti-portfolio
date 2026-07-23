export const site = {
  name: "Drashti Patel",
  title: "Drashti Patel — Food Processing Technology · R&D",
  description:
    "Food Processing Technology student building AI decision-support tools for formulation and process safety. Open to R&D internships and research mentorship.",
  oneLiner:
    "Food Processing Technology student building AI decision-support for formulation and process safety.",
  email: "drashti14052007@gmail.com",
  location: "Anand, Gujarat",
  education: {
    degree: "B.Tech Food Processing Technology",
    school: "A.D. Patel Institute of Technology (ADIT)",
    university: "CVM University",
    year: "Second year · Class of 2029",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/drashti-patel-540b242bb/",
    github: "https://github.com/drashti14052007-a11y",
    resume: "#resume",
    instagram: "#instagram",
    x: "#x",
    notestackLive:
      "https://drashti14052007-a11y.github.io/NoteStack/frontend/index.html",
    notestackGithub: "https://github.com/drashti14052007-a11y/NoteStack",
    heatguardLive:
      "https://heatguard-vhp7yzz8xzjzc3jxbqbdwt.streamlit.app/",
    heatguardGithub: "https://github.com/drashti14052007-a11y/heatguard",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export const labCapabilities = [
  {
    title: "Product & Formulation",
    items: [
      "Food product development",
      "Formulation design",
      "Sensory evaluation",
      "Nutrition-driven innovation",
    ],
  },
  {
    title: "Science & Safety",
    items: [
      "Food chemistry",
      "Food microbiology",
      "Food safety & QA",
      "FSSAI regulatory awareness",
    ],
  },
  {
    title: "Process Engineering",
    items: [
      "Thermal processing",
      "Pasteurization fundamentals",
      "D-value & Z-value analysis",
      "Process optimization",
    ],
  },
  {
    title: "Lab Practice",
    items: [
      "Food analysis",
      "Laboratory practices",
      "Quality testing",
      "Technical report writing",
    ],
  },
] as const;
