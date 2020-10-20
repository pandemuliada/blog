import GlobalStyles from './global'
import { theme } from '../tailwind.config'

const lightTheme = {
  colors: {
    ...theme.colors,
  },
}

const darkTheme = {
  colors: {
    ...theme.colors,
  },
}

export { darkTheme, lightTheme, GlobalStyles }
