/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    //Color Palette
    colors: {
      Primary :'#6B3CC9',
      Secondary : '#F28D35',
      Analogous_1 :'#6A44F2',
      Analogous_2 :'#1CBDDD',
      Triadic: '#52378C',
      Dark_1: '#78BF91',
      Dark_2:'#4DCA79',
      Text: '#2F2F2F',
      TextLight: '#545A75',
      TextSubtle: '#9C9991',
      Accent_1: '#E2F2FE',
      Accent_2: '#FFF8E0',
      Error: '#FF0335',
      Success: '#5EB30B', 
      Text_white: '#ffffff'
    },
    //Fonts
    fontFamily:{
      Poppins: ["Poppins", "Latin"],
      Inter: ["Inter", "Sans"],
      Lato: ["Lato", "Sans"]
    }
  },
  plugins: [],
}

