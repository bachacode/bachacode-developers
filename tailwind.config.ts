import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5C10",
        accent: "#1B4965",
        secondary: "#FFB703",
        background: "#FFFFFF",
        text: "#333333",
        "orange-primary": {
          "50": "#fff5ed",
          "100": "#ffe9d4",
          "200": "#ffcfa8",
          "300": "#ffad70",
          "400": "#ff7f37",
          "500": "#ff5c10",
          "600": "#f04106",
          "700": "#c72d07",
          "800": "#9e250e",
          "900": "#7f220f",
          "950": "#450d05",
        },
        "teal-blue-accent": {
          "50": "#f2f9fd",
          "100": "#e4f1fa",
          "200": "#c3e2f4",
          "300": "#8fccea",
          "400": "#53b1dd",
          "500": "#2d97ca",
          "600": "#1e79ab",
          "700": "#19628b",
          "800": "#195373",
          "900": "#1b4965",
          "950": "#112c40",
        },
        "selective-yellow-secondary": {
          "50": "#fffeea",
          "100": "#fff9c5",
          "200": "#fff485",
          "300": "#ffe746",
          "400": "#ffd71b",
          "500": "#ffb703",
          "600": "#e28b00",
          "700": "#bb6202",
          "800": "#984b08",
          "900": "#7c3e0b",
          "950": "#481f00",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
