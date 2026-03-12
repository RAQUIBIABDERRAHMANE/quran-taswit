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
        midnight: {
          900: "#050d1a",
          800: "#0a1628",
          700: "#0f1f36",
          600: "#162a45",
        },
        gold: {
          50: "#fef9ec",
          100: "#fdf0c8",
          200: "#fbe08d",
          300: "#f8cb4e",
          400: "#f5b726",
          500: "#d4a853",
          600: "#b8860b",
          700: "#96650a",
          800: "#7a4f10",
          900: "#654114",
        },
        emerald: {
          50: "#effefb",
          400: "#2dd4a8",
          500: "#0d9488",
          600: "#0a7c6e",
          700: "#0c6358",
        },
      },
      fontFamily: {
        display: ["Amiri", "serif"],
        body: ["Tajawal", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "star-twinkle": "star-twinkle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
