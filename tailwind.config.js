/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Includes all page components
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Includes all components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Includes files in the app directory
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Includes all other files in the src directory
    
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom background color
        foreground: "var(--foreground)", // Custom foreground color
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'], // Add Cinzel font globally
        cormorant: ['Cormorant', 'serif'], // Add Cormorant font globally
      },
      clipPath: {
        wavy: "polygon(50% 0%, 90% 10%, 100% 50%, 90% 90%, 50% 100%, 10% 90%, 0% 50%, 10% 10%)",
      },
    },
  },
  plugins: [],
};
