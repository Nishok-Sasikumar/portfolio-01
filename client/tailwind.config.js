/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#050505',
        accent: '#0088ff',    // Glowing ethereal blue
        blood: '#e60000',     // Deep red
        text: '#ffffff',
        muted: '#888888',
        border: '#222222',
      },
      fontFamily: {
        heading: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
        gravedigger: ['"Gravedigger"', 'cursive'],
        runethia: ['"Runethia"', 'sans-serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  darkMode: 'class', // we will force dark mode
  plugins: [],
};
