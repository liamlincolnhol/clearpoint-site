/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A5D7A',
        secondary: '#87CEEB',
        background: '#F8F9FA',
        'text-primary': '#2C3E50',
        'text-secondary': '#6C757D',
        accent: '#4A5D7A',
      },
    },
  },
  plugins: [],
}