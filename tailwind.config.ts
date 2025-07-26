import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}", // Include styles directory
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["system-ui"],
        gilmer: ["var(--font-gilmer)"],
        clash: ["var(--font-clash-display)"],
        clashlight: ["var(--font-clash-display-light)"],
        aeonik: ["var(--font-aeonikpro)"],
      },
      animation: {
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fadeA":
          "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fadeA": {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
