import '../styles/tailwind.css'
import '../styles/custom.css'
import AppProvider from '../providers'

export default ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
