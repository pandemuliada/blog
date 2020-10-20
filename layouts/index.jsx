import Head from '../components/Head'
import Nav from '../components/Nav'

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
      <div className="bg-alice-blue bg-opacity-25">
        <div
          className={
            container && 'container mx-auto px-6 md:px-0 md:w-750 min-h-screen'
          }
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Layout
