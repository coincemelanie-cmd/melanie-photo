import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        // Terracotta chaleureux — couleur signature du studio
        brand: {
          50: "#fdf4f1",
          100: "#fbe6df",
          200: "#f6cabc",
          300: "#eea38c",
          400: "#e3775c",
          500: "#d4573a",
          600: "#b8432a",
          700: "#963522",
          800: "#7a2f20",
          900: "#652a1e",
          950: "#37130d",
        },
        // Stone/sable chaud, plus doux que le gris neutre classique
        neutral: {
          25: "#FAF9F7",
          50: "#F5F2EE",
          100: "#EDE8E1",
          200: "#DDD4C9",
          300: "#C4B7A6",
          400: "#A0937F",
          500: "#7D6F5C",
          600: "#5C5043",
          700: "#453B31",
          800: "#2E271F",
          900: "#1F1A14",
          950: "#13100C",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        medium:
          "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)",
        large:
          "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.08)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#2E271F",
            a: {
              color: "#b8432a",
              "&:hover": { color: "#963522" },
            },
            "h1, h2, h3, h4": {
              fontFamily: "var(--font-fraunces)",
              color: "#1F1A14",
              fontWeight: "600",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
