/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        // Ocean Color Palette
        // veryDarkBlue: '#150734',
        // darkBlue: '#0F2557',
        // darkBlueLight: '#28559A',
        // skyBlue: '#3778C2',
        // skyBlueLight: '#4B9FE1',
        // skyBlueSupLight: '#63BCE5',
        // veryLightBlue: '#7ED5EA'

        white: '#FFFFFF',
        black: '#151015',
        gray: '#F5F5F5',
        lightGreen: '#8DB48E',
        green: '#4D724D'
      }
    },
  },
  plugins: [],
}
