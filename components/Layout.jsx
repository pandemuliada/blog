import Head from './Head'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children, useContainer, ...rest }) => {
  return (
    <>
      <Head
        title={rest.title || ''}
        ogTitle={rest.ogTitle || ''}
        description={rest.description || process.env.SITE_SHORT_DESCRIPTION}
        {...rest}
      />
      <Nav />
      <div className={useContainer && 'w-10/12 mx-auto md:container'}>
        {children}
        {useContainer ? (
          <Footer />
        ) : (
          <div className="w-10/12 mx-auto md:container">
            <Footer />
          </div>
        )}
      </div>
    </>
  )
}

export default Layout
