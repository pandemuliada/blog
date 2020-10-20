import { useContext } from 'react'
import { ThemeContext } from '../contexts'

function useTheme() {
  const { theme, ...rest } = useContext(ThemeContext)
  return { theme, ...rest }
}

export default useTheme
