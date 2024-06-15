/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '4rem',
      },
    },
    colors: {
      'black': '#333',
      'grey': '#BDBDBD',
      'white': '#fff',
      'grey-200': '#F2F2F2',
      'grey-300': '#F9F9F9',
      'grey-400': '#FBFBFB',
      'grey-500': 'rgb(200 200 200 / 0.5)'
    },
    extend: {},
  },
  plugins: [],
}