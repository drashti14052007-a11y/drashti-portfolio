export type Project = {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  featured?: boolean;
  domain: string[];
  problem: string;
  approach: string;
  method: string[];
  build: string[];
  results: string[];
  limitations: string[];
  next: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "notestack",
    name: "NoteStack",
    tagline:
      "ML-powered reverse sensory formulation engine for Indian food product development.",
    status: "Live",
    featured: true,
    domain: ["Food R&D", "ML", "FSSAI", "Full-stack"],
    problem:
      "Traditional formulation is iterative, costly, and slow—especially for teams with limited R&D budgets. Technologists adjust ingredients, run trial batches, and evaluate sensory outcomes until the target emerges.",
    approach:
      "NoteStack inverts the workflow. Instead of ingredients → taste, users set a target sensory profile and the system estimates ingredient ratios most likely to produce it—with confidence scoring, FSSAI compliance checks, and downloadable reports. Built as decision-support for scientists, not a replacement.",
    method: [
      "Four category models: Dairy, Chocolate & Confectionery, Spices & Condiments, Savory Snacks",
      "Random Forest MultiOutputRegressor models (R² 0.93–0.98) trained on food-science-grounded synthetic datasets",
      "SciPy SLSQP inverse optimization with five parallel trials",
      "Confidence from mean absolute residual between predicted and target scores",
      "Rule-based FSSAI compliance engine with regulation citations",
    ],
    build: [
      "FastAPI backend with Pydantic validation and REST endpoints",
      "SQLAlchemy + SQLite formulation history",
      "Server-side PDF reports via fpdf2",
      "Vanilla HTML/CSS/JS frontend with Chart.js radar visualization",
      "58 automated tests across compliance, optimizer, and API layers",
      "Deployed: GitHub Pages + Render",
    ],
    results: [
      "4 trained models with R² ≥ 0.93 on held-out sets",
      "4,000 synthetic training rows with interaction terms and threshold effects",
      "58 tests passing",
      "Live end-to-end formulation → compliance → PDF workflow",
    ],
    limitations: [
      "Models use synthetic data—not yet validated against sensory panel experiments",
      "Render free-tier cold starts can delay first requests",
      "History endpoint has no multi-user authentication",
    ],
    next: [
      "Production-grade full-stack redesign with auth and workspaces",
      "Real sensory-panel calibration and stronger uncertainty estimates",
      "Expand into cost, nutrition, shelf-life, and broader R&D lifecycle support",
    ],
    tech: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "SciPy",
      "SQLAlchemy",
      "Chart.js",
      "GitHub Pages",
      "Render",
    ],
    liveUrl:
      "https://drashti14052007-a11y.github.io/NoteStack/frontend/index.html",
    githubUrl: "https://github.com/drashti14052007-a11y/NoteStack",
    metrics: [
      { label: "Model R²", value: "0.93–0.98" },
      { label: "Categories", value: "4" },
      { label: "Tests", value: "58" },
      { label: "Training rows", value: "4,000" },
    ],
  },
  {
    slug: "heatguard",
    name: "HeatGuard",
    tagline:
      "Scientific decision-support for microbial kill kinetics and thermal process optimization.",
    status: "Live",
    domain: ["Food Safety", "Process", "Optimization"],
    problem:
      "Pasteurization is often designed conservatively. Higher temperatures or longer times reduce microbial risk but can waste energy, raise cost, and degrade flavor, texture, and nutrition.",
    approach:
      "HeatGuard helps technologists evaluate lethality, estimate energy and cost implications, check FSSAI-aligned safety expectations, and identify scientifically optimized processing conditions—turning formulas into usable decisions.",
    method: [
      "First-order microbial kill kinetics",
      "D-value and Z-value calculations",
      "Pasteurization Units (PU) and process lethality modeling",
      "SciPy numerical optimization for minimum safe conditions",
      "State-aware energy cost estimates and PDF reporting",
    ],
    build: [
      "Streamlit interactive dashboard",
      "Plotly kill-curve visualizations",
      "Modular scientific models separated from UI",
      "FPDF2 automated process reports",
      "Deployed on Streamlit Community Cloud",
    ],
    results: [
      "Fully deployed scientific web application",
      "Supports multiple products, pathogens, and energy-cost contexts",
      "Balances microbial safety, quality, and process efficiency",
    ],
    limitations: [
      "Streamlit prototype UX—scientific engine is the primary strength",
      "Broader real-world validation datasets remain future work",
      "Product coverage can be expanded further",
    ],
    next: [
      "Richer product support and processing models",
      "UI/UX upgrade toward instrument-grade clarity",
      "Validation with broader industrial datasets",
    ],
    tech: [
      "Python",
      "Streamlit",
      "NumPy",
      "SciPy",
      "Pandas",
      "Plotly",
      "FPDF2",
    ],
    liveUrl: "https://heatguard-vhp7yzz8xzjzc3jxbqbdwt.streamlit.app/",
    githubUrl: "https://github.com/drashti14052007-a11y/heatguard",
    metrics: [
      { label: "Focus", value: "Thermal safety" },
      { label: "Core", value: "D/Z/PU" },
      { label: "Output", value: "PDF + charts" },
      { label: "Status", value: "Deployed" },
    ],
  },
  {
    slug: "trackbot",
    name: "TrackBot",
    tagline:
      "Low-cost autonomous warehouse AGV prototype—Industry 4.0 skills for modern food manufacturing.",
    status: "Prototype · SSIP under review",
    domain: ["Automation", "Embedded", "Industry 4.0"],
    problem:
      "Commercial AGV systems are expensive for SMEs and educational settings that still need reliable material handling automation.",
    approach:
      "TrackBot explores an affordable ESP32-S3-based AGV with RFID localization, A* planning, and a real-time web dashboard—developed as a multidisciplinary SSIP innovation project.",
    method: [
      "Single ESP32-S3 architecture for cost-sensitive automation",
      "RFID localization and A* path planning",
      "Hardware–software integration with dashboard telemetry",
      "Research paper documenting full system architecture",
    ],
    build: [
      "Firmware and embedded software contributions",
      "System architecture and technical planning",
      "Navigation logic and dashboard integration planning",
      "FastAPI/web dashboard concepts with WebSockets and SQLite",
      "Cross-domain documentation and research writing",
    ],
    results: [
      "Cleared departmental evaluation",
      "Under university review for ₹35,000 SSIP innovation funding",
      "Research paper completed; prototype build/testing in progress",
    ],
    limitations: [
      "Hardware prototype still under development",
      "GitHub to be published after prototype completion",
      "Not a food-product project—positioned as transferable manufacturing capability",
    ],
    next: [
      "Complete prototype demonstration",
      "Publish repository and visuals",
      "Connect automation thinking to smart food-plant futures",
    ],
    tech: [
      "ESP32-S3",
      "C/C++",
      "RFID",
      "A*",
      "FastAPI",
      "WebSockets",
      "SQLite",
    ],
    metrics: [
      { label: "Funding", value: "SSIP review" },
      { label: "Amount", value: "₹35,000" },
      { label: "Role", value: "Software + systems" },
      { label: "Stage", value: "Prototype" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
