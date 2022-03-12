const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem'

    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      emerald: colors.emerald,
      green: colors.green,
      sky: colors.sky,
      cyan: colors.cyan,
      red: colors.red,
      rose: colors.rose,
      indigo: colors.indigo,
      yellow: colors.yellow,
      purple: colors.purple,
      amber: colors.amber,
      orange: colors.orange,
      stone: colors.stone
    },
    extend: {
      spacing: {
        text: '740px'
      }
    }
  },
  plugins: []
}
