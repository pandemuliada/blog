module.exports = {
  purge: ['./pages/**/*.jsx', './components/**/*.jsx'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: '#132743',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',

      gray: '#4a5568',
      'darker-gray': '#2d3748',
      'darkest-gray': '#1a202c',
    },
    fontSize: {
      xl: '3rem',
      lg: '2rem',
      md: '1.3rem',
      normal: '16px',
    },
    fontWeight: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    boxShadow: {
      default: '0 5px 10px rgba(224, 220, 220, 0.25)',
    },
    extend: {
      lineHeight: {
        relaxed: 1.75,
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {},
}
