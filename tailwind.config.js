/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {

      fontFamily: {nunito: "Nunito" },
    },
    fontSize:{
      sm: "14px", md:"18px", lg:"24px", xl:"32px", base:"16px"
    }
  },
  plugins: [],
}
