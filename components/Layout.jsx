import Head from "./Head"
import Footer from "./Footer"

const Layout = ({ children, useContainer, ...rest }) => {
  return (<>
    <Head title={rest.title || ""} ogTitle={rest.ogTitle || ""} description={rest.description || process.env.SITE_SHORT_DESCRIPTION} {...rest} />
    <div className={useContainer && 'w-10/12 mx-auto md:w-1/4 mt-6'}>
      {children}
      <Footer/>
    </div>
  </>)
}

export default Layout