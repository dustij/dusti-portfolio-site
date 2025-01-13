import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

import typographyStyles from "./typography";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  plugins: [typographyPlugin],
  theme: {
    fontSize: {
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    typography: typographyStyles,
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        // Primary
        primary: {
          50: "#f9fce9",
          100: "#eff7d0",
          200: "#e0efa7",
          300: "#cae373",
          400: "#b2d348",
          500: "#a3cb2e",
          600: "#73931d",
          700: "#57701b",
          800: "#47591b",
          900: "#3c4c1b",
          950: "#1f2a09"
        },
      },
    },
  },
} satisfies Config;
