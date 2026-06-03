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
        softgold: "#C9A86A",
        charcoal: "#2b2b2b",
        warmgray: "#7d746b",
        cream: "#FDFCFA",
        gold: "#C9A86A",
        textprimary: "#1F1F1F",
        textsecondary: "#6B6B6B",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.04)",
        elevated: "0 8px 32px rgba(0,0,0,0.05)",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
