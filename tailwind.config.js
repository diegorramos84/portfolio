/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          666: '#FF0066',
        },
        black: {
          666: '#212529'
        }
      }
    }
  },
  plugins: [],
}
