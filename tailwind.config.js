/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        card: '#1E293B',
        primary: '#3B82F6',
        accent: '#06B6D4',
        'text-main': '#F8FAFC',
        'text-muted': '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
