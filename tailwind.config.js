/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'left-scroll' : 'left-scroll 15s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'left-scroll': {
          from: { transform: 'translateX(0)'},
          to: { transform: "translateX(-30%)"}
        }
      }
    },
    fontFamily:{
      Noticia  : ['Noticia Text', 'serif'],
      Roboto : ['Roboto Slab' , 'serif'],
      Kanit : ['Kanit' , 'serif'],
      WorkSans : ['Work Sans' , 'serif'],
      Prosto : ['Prosto One' , 'serif'],
      Babas : ['Bebas Neue' , 'serif'],
      Pro : ['Be Vietnam Pro', 'serif'],
      Fahkwang : ['Fahkwang', 'sans-serif'],
      Prosto : ['Prosto One', 'sans-serif'],

    }
  },
  plugins: [],
}
