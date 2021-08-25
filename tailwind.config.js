module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      title: {
        default: '#7C868D',
        background: '#FFFFFF',
      }
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
