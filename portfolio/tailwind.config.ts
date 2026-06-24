import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark-first palette. `bg` is the page; `surface` is raised panels.
        bg: "#09090b",
        surface: "#141418",
        line: "#27272d",
        fg: "#ededec",
        muted: "#9b9ba3",
        accent: "#f2581d",
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
