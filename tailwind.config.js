/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Noticia  : ['Noticia Text', 'serif'],
      Roboto : ['Roboto Slab' , 'serif'],
      Kanit : ['Kanit' , 'serif'],
      WorkSans : ['Work Sans' , 'serif']
      

    }
  },
  plugins: [],
}
