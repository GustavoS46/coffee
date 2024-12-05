/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1430px",
    },
    fontFamily: {
      primary: "var(--font-cormorant_upright)",
      secondary: "var(--font-open_sans)",
    },
  extend: {
    colors: {
      primary: {
        DEFAULT: "#100E0E",
      },
      secondary: {
        DEFAULT: "#787F8A",
      },
      accent: {
        DEFAULT: "#C7A17A",
        hover: "#A08161",
      },
    },
    backgroundImage: {
      hero_overlay: "url('/assets/hero/hero-overlay.png')",
      opening_hours: "url('/assets/opening-hours/bg.png')",
      footer: "url('/assets/footer/bg.png')",
      },
    },
  },
  plugins: [],
};
