const { default: ThemeProvider } = require('./ThemeProvider')

const AppProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default AppProvider
