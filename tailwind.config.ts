import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        onyx: "#1A1614",
        cognac: "#4A3F38",
        brass: "#B8944E",
        greige: "#B5A898",
        mist: "#E8E2DA",
        ivory: "#F7F4F0",
        forest: "#3D4840",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      spacing: {
        section: "7rem",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
    },
  },
};

export default config;
