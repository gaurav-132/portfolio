/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // Include HTML files for class extraction
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14131a',
        highlight: '#2bd576',
        card: '#1c1b23',
        textPrimary: '#8b8a91'
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Define a custom font family
      },
      fontSize: {
        '2xl': '1.75rem', // Define a custom text size
      },
      // ... other customizations you might need
    },
  },
  plugins: [
    // Add custom plugins if needed
    // require('@tailwindcss/forms'), // Example of adding a plugin
  ],
};
