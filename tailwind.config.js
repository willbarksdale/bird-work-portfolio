```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a202c', // Dark Gray
        'secondary': '#2d3748', // Lighter Gray
        'accent': '#4299e1', // Blue
        'light': '#f7fafc', // Off-white
        'light-gray': '#a0aec0',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```