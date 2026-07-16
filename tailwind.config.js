/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        background: "#FFFFFF",
        surface: "#F7F7F7",
        accent: "#2563EB", // Updated to your new premium blue
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 40px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}