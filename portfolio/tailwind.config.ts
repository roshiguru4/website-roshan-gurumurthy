import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark, technical. Single cool-blue accent, used sparingly.
        base: "#0a0a0f", // page background
        surface: "#111116", // cards / panels / row hover
        elevated: "#1e1e24", // chips, hover states
        line: "#2a2a33", // all borders
        primary: "#f0ede8", // warm white text
        muted: "#7a7a8a", // secondary labels, metadata
        accent: "#4f7fff", // links, focus, active
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
