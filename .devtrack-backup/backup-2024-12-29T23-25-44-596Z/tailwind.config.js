/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "xp":["VT323"],
        "xp2":["Bentham"]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'Blue': '#394dcd',
        'Green': '#208c71',
        'Red': '#e35f5f',
        'silver': '#6c6c6c',
        'yellow': '#dfe300',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [],
}