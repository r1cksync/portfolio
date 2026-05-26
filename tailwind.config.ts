import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#030306",
        carbon: "#07070c",
        graphite: "#0d0d14",
        slate1: "#15151f",
        slate2: "#1f1f2b",
        line: "#1d1d28",
        lineBright: "#2e2e40",
        cream: "#fafafa",
        bone: "#e8e8ee",
        ash: "#8a8a9e",
        ashDim: "#4a4a5c",
        pink: {
          DEFAULT: "#ff2d87",
          50: "#fff0f7",
          100: "#ffd6e9",
          200: "#ffadd2",
          300: "#ff7eb6",
          400: "#ff5099",
          500: "#ff2d87",
          600: "#e6126e",
          700: "#bf0c5b",
          800: "#7a0739",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 50s linear infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-pink": "pulse-pink 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "pulse-pink": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 45, 135, 0.55)" },
          "50%": { boxShadow: "0 0 30px 8px rgba(255, 45, 135, 0.0)" },
        },
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
        "noise":
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
};
export default config;
