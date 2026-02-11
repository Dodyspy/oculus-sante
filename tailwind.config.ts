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
          50: "#faf6f0",
          100: "#f0e6d4",
          200: "#e2cba8",
          300: "#d4af7c",
          400: "#c49a5c",
          500: "#b8860b",
          600: "#a0750a",
          700: "#7d5c08",
          800: "#5a4206",
          900: "#3d2d04",
        },
        sage: {
          50: "#f2f7f2",
          100: "#e0ede0",
          200: "#c1dbc1",
          300: "#9ec49e",
          400: "#7aad7a",
          500: "#5a965a",
          600: "#4a7d4a",
          700: "#3d663d",
          800: "#334f33",
          900: "#2a3f2a",
        },
        gold: {
          50: "#fefdf5",
          100: "#fcf8e3",
          200: "#f9efc7",
          300: "#f0d98a",
          400: "#e6c34d",
          500: "#d4a828",
          600: "#b8911f",
          700: "#967618",
          800: "#745b12",
          900: "#52400d",
        },
        cream: {
          50: "#fefdfb",
          100: "#fdf9f3",
          200: "#faf3e7",
          300: "#f5e8d4",
          400: "#eddcc0",
          500: "#e5d0ac",
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
