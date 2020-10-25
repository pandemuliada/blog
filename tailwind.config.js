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
      mono: ['Fira Code', 'consolas', 'monospace'],
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',

      'blue-jeans': '#05a7c7',

      'rich-black-fogra': '#131821',

      cultured: '#dfe6e9',
      'lightest-gray': '#a0aec0',
      'lighter-gray': '#718096',
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
        relaxed: 1.85,
        loose: 2,
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {},
}
