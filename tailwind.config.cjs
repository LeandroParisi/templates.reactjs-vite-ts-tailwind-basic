const colors = require('./src/assets/style/colors.json')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    keyframes: {
      'fade-out': {
        from: { opacity: 1 },
        to: { opacity: 0 }
      },
      'fade-in': {
        from: { opacity: 0 },
        to: { opacity: 1 }
      }
    },
    animation: {
      'fade-out': 'fade-out 250ms ease-in-out',
      'fade-in': 'fade-in 250ms ease-in-out'
    },
    extend: {
      colors: {
        'brand-primary': colors.PRIMARY,
        'brand-secondary': colors.SECONDARY,
        'brand-tertiary': colors.TERTIARY,
        'brand-light_green': colors.LIGHT_GREEN_1,
        'brand-green': colors.GREEN,
        'brand-dark_green_1': colors.DARK_GREEN_1,
        'brand-pale_purple': colors.PALE_PURPLE,
        'brand-light_purple_1': colors.LIGHT_PURPLE_1,
        'brand-purple': colors.PURPLE,
        'brand-dark_purple_1': colors.DARK_PURPLE_1,
        'brand-dark_purple_2': colors.DARK_PURPLE_2,
        'brand-blue': colors.BLUE,
        'brand-dark_blue_1': colors.DARK_BLUE_1,
        'brand-dark_blue_2': colors.DARK_BLUE_2,
        'brand-black': colors.BLACK,
        'brand-white': colors.WHITE,
        'brand-dark_white_1': colors.DARK_WHITE_1,
        'brand-error': colors.ERROR_1
      }
    }
  },
  plugins: []
}
