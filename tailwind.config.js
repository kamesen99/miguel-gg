/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        grow: {
          "0%": {transform: "scale(0)"},
          "100%": {transform: "scale(1)"}
        },
        shrink: {
          "0%": {transform: "scale(1)"},
          "100%": {transform: "scale(0)"}
        }
      },
      animation: {
        grow: "grow 200ms ease-in-out",
        shrink: "shrink 200ms ease-in-out"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "dark", "cmyk"],
  },
}
