/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        'primary': '#3238f2',
      },
      fontFamily: {
        'acme': ['Acme' , 'sans-serif'],
        'playfair-display': ['Playfair Display', 'serif'],
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

