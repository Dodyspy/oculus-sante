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
        background: "var(--background)",
        foreground: "var(--foreground)",
        bronze: {
          50: "#fdf9f4",
          100: "#f5ecda",
          200: "#e6d0a8",
          300: "#cfa66a",
          400: "#b8874a",
          500: "#a67608",
          600: "#8a6207",
          700: "#664905",
          800: "#443003",
          900: "#2b1e02",
        },
        sage: {
          50: "#f6faf6",
          100: "#e6f0e6",
          200: "#c8dfc8",
          300: "#8fb88f",
          400: "#6a9e6a",
          500: "#4d844d",
          600: "#3d6a3d",
          700: "#305430",
          800: "#243d24",
          900: "#1a2e1a",
        },
        emerald: {
          50: "#f2fef8",
          100: "#d9fce9",
          200: "#b2f5d6",
          300: "#5ee0ab",
          400: "#28c884",
          500: "#096832",
          600: "#044d24",
          700: "#043d1c",
          800: "#032e14",
          900: "#021f0e",
        },
        gold: {
          50: "#fffef8",
          100: "#fdfae8",
          200: "#fbf2cd",
          300: "#edd07a",
          400: "#deb63d",
          500: "#c49520",
          600: "#a07a18",
          700: "#7a5e11",
          800: "#5a450b",
          900: "#3d2f07",
        },
        cream: {
          50: "#ffffff",
          100: "#fefbf6",
          200: "#f8eedb",
          300: "#e4cfaa",
          400: "#c9a872",
          500: "#b08545",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
