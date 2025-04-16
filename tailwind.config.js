/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',  // Include your app directory if using Next.js 13 or higher
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
