import Head from '@components/Head'
import Nav from '@components/Nav'

const Layout = ({ children, container, ...rest }) => {
  return (
    <>
      <Head
        title={rest.title || ''}
        ogTitle={rest.ogTitle || ''}
        description={rest.description || process.env.SITE_SHORT_DESCRIPTION}
        {...rest}
      />
      <Nav />
      <div className={container && 'container mx-auto px-6 md:px-0 md:w-800'}>
        {children}
      </div>
    </>
  )
}

export default Layout
