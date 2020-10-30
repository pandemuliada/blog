import { useEffect, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { GlobalStyles, darkTheme, lightTheme } from '../theme'
import { ThemeContext } from '../contexts'

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light')

  function setThemeMode(mode) {
    setTheme(mode)
    window.localStorage.setItem('THEME', mode)
  }

  function toggleTheme() {
    if (theme === 'light') {
      setThemeMode('dark')
    } else {
      setThemeMode('light')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('THEME')

    if (localTheme) {
      setThemeMode(localTheme)
    } else {
      setThemeMode('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setThemeMode, toggleTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        {props.children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
