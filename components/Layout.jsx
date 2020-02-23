import Head from "./Head"

const Layout = ({ children, useContainer, ...rest }) => {
  return (<>
    <Head title={rest.title || process.env.SITE_TITLE} description={rest.description || process.env.SITE_SHORT_DESCRIPTION} {...rest} />
    <div className={useContainer && 'w-10/12 mx-auto md:w-1/4'}>
      {children}
    </div>
  </>)
}

export default Layout