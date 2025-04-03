/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        brand: {
          // Mint green - primary color
          primary: {
            lightest: '#E6F7F4',  // Updated primary-lightest
            light: '#e6f3ef',     // mint-100
            medium: '#99cebe',    // mint-300
            DEFAULT: '#00865d',   // mint-500
            dark: '#007954',      // mint-600
            darkest: '#005038',   // mint-800
          },
          // Button green color
          button: '#0FD18B',
          // Secondary colors
          secondary: {
            lightest: '#f7f7f9',
            light: '#dfe0e5',
            medium: '#9a9dac',
            DEFAULT: '#555871',
            dark: '#3e4054',
            darkest: '#292b38',
          },
          // Accent colors
          accent: {
            lightest: '#fff8e6',
            light: '#ffe9b3',
            medium: '#ffd166',
            DEFAULT: '#ffc233',
            dark: '#e6a400',
            darkest: '#b38000',
          },
        },
        // Legacy - keeping mint for backward compatibility
        mint: {
          50: '#f2f9f7',
          100: '#e6f3ef',
          200: '#bfe1d6',
          300: '#99cebe',
          400: '#4daa8e',
          500: '#00865d',
          600: '#007954',
          700: '#006446',
          800: '#005038',
          900: '#00422e',
        },
      },
    },
  },
  plugins: [],
}
