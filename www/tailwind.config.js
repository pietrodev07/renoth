/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["'Baloo Da 2'", "sans-serif"],
      },
    },
  },
  plugins: [require("rippleui")],
};
