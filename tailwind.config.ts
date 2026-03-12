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
        background: "#050505",
        foreground: "#ffffff",
        accent: "#00ffcc",
        "accent-green": "#00ff41",
        "card-border": "#1a1a2e",
        "card-bg": "#0f0f1a",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "blink": "blink 1s step-end infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(0, 255, 204, 0.3)" },
          "100%": { boxShadow: "0 0 20px rgba(0, 255, 204, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
