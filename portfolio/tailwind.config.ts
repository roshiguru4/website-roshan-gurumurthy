import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#111111",
        text: "#ededed",
        muted: "#555555",
        "link-under": "#444444",
        border: "#2a2a2a",
      },
    },
  },
  plugins: [],
};
export default config;
