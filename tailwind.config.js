module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E72889",
        black: "#000000",
        darkGray: "#151516",
        white: "#FFFFFF",
        gray: "#F8F8F8",
        violet: "#BD4EF4",
      },
    },
    fontFamily: {
      Raleway: ["Raleway", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-writing-mode")({
      variants: ["responsive", "hover"],
    }),
    require("tailwind-scrollbar"),
  ],
};
