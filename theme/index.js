import GlobalStyles from './global'
import { theme } from '../tailwind.config'

const lightTheme = {
  colors: {
    ...theme.colors,
  },
  isDark: false,
}

const darkTheme = {
  colors: {
    ...theme.colors,
  },
  isDark: true,
}

export { darkTheme, lightTheme, GlobalStyles }
