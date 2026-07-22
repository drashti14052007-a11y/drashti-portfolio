import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lab: {
          bg: "#F7F8F8",
          surface: "#FFFFFF",
          ink: "#1E2430",
          muted: "#5C6570",
          line: "#D7DCE2",
          teal: "#2F6F73",
          "teal-soft": "#E7F2F2",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      borderRadius: {
        pill: "999px",
        card: "10px",
      },
      boxShadow: {
        lift: "0 12px 30px rgba(30, 36, 48, 0.08)",
        dock: "0 8px 32px rgba(30, 36, 48, 0.12)",
      },
      transitionTimingFunction: {
        outCubic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
