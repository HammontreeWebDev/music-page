/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "music-canvas": "#140818",
        "music-wine": "#1A0A1E",
        amethyst: "#9B5DE5",
        bubblegum: "#F15BB5",
        "golden-hour": "#FFB347",
        "lemon-zest": "#FEE440",
        "cream-spot": "#FFF5E6",
      },
      fontFamily: {
        "music-display": ["var(--font-music-display)"],
        "music-body": ["var(--font-music-body)"],
      },
      screens: {
        xs: "418px",
      },
    },
  },
  plugins: [],
};
