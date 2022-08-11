/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#417D9F",
        gray: {
          light: "#F5F5F5",
          dark: "#C9C9C9",
        },
        orange: "#E8AA56",
      },
      fontFamily: {
        sans: ["Inter var"],
      },
    },
  },
  plugins: [],
};
