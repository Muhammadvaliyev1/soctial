/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins']
      },
      screens: {
        's': '500px',
      },
      maxWidth: {
        '8xl': '1440px',
        '6xs': '1100px',
      },
      borderRadius: {
        '3.5xl': '40px',
        '4xl': '130px'
      },
      colors: {
        brend: {
          'white': '#F2FFFC',
          'black': '#03090C',
          'blue': '#1D5BD8',
          'blue-100': '#389AD1',
          'ellips': '#F2FFFC',
          'liner-0': '#3A242C',
          'liner-50': '#72A6F4',
          'liner-100': '#20B45B',
          'cyan': '#DEF4E9',
          'cyan-100': '#A4FFE4',
          'cyan-200': '#F9FAFE',
          'cyan-300': '#E8FBFF',
          'cyan-400': '#D9E8FF',
          'cyan-500': '#DAFBEC',
          'darkcyan': '#305F50',
          'green': '#0D2B24',
          'green-100': '#069D6E',
          'green-200': '#DDFEF6',
          'green-300': '#C1FFE9',
          'darkgreen': '#082E1B',
          'bgreen': '#3B6A5B',
          'gray': '#101520',
          'gray-100': '#4B5563',
          'gray-200': '#232736',
          'gray-300': '#33454F',
          'gray-400': '#9CA5AF',
          'white-100': '#EDEEF3',
          'white-200': '#E6F0FF',
          'orange': '#EA9F0C',
          'pink-100': '#FFF9E4',
          'pink-200': '#FFF0C9',
          'pink-300': '#FFF0C9',
          'purple-100': '#F7F0FF',
          'purple-200': '#E9DEFF',
          'purple-250': '#CFB2FE',
          'purple-300': '#591DD8',
          'purple-350': '#E3ADFC',
          'purple-400': '#591DD8',
          'purple-500': '#4B408C',
          'purple-600': '#302336',
          'purple-700': '#573F62',
          'purple-800': '#39345C',
        },
      },
      backgroundImage: {
        'imgLight': "url('./public/img/hero-light-bg.webp')",
        'imgDark': "url('./public/img/hero-bg.webp')"
      }
    },
  },
  plugins: [],
}

