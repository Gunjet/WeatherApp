/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './app/**/*.{js,ts,jsx,tsx}', 
    './components/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'bright': '#FF8E27',
        'clear': '#777CCE',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'], 
      },
      fontWeight: {
        'extrabold': 800,
      },
    },
  },
  plugins: [],
};
