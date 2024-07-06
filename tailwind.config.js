/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       Rampart: ["Dancing Script", "cursive"],
       Courgette:["Courgette", "cursive"],
       Bolder: ["Anton", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(255, 128, 0, 1) 0%, rgba(63, 81, 181, 1) 100%)',
        'gradient-left-right': 'linear-gradient(90deg, rgba(255, 128, 0, 1) 0%, rgba(63, 81, 181, 1) 100%)',
      },
    },
  },
  plugins: [],
}
