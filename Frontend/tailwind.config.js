/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1200px',
        '2xl': '1440px'
      }
    },
    extend: {
      colors: {
        primaryBlue: '#1562AC',
        primaryBlack: '#000000',
        primaryWhite: '#FFFFFF'
      },
      // fontSize: {
      //   'sm': '14px',
      //   'md': '18px',
      //   'lg': '24px',
      // },
    },
  },
  plugins: [],
}
