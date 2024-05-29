/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg': 'url("../../assets/bar.png")'
      },
      colors: {
        'b':'#92722f',
        'gold': '#d4a010',
        'bg':'#ddc5b1',
        'bg1':'#f9f2ed',
        'bg2':'#e7d8ce',
      },
    },
  },
  plugins: [],
}
