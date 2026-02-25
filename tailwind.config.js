/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary: "#111111",
        secondary:"#666666",
        accent: "#FF4C3B",
        background:"#FFFFFF",
        border:"#EEEEEE"
      }
    },
  },
  plugins: [],
}

