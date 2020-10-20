import styled from 'styled-components'
import Head from '../components/Head'
import Nav from '../components/Nav'

const LayoutContainer = styled.div`
  background: ${({ theme }) =>
    theme.isDark ? theme.colors['rich-black-fogra'] : theme.colors['white']};
  transition: all ease-out 0.3s;
`

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
      <LayoutContainer>
        <div
          className={
            container && 'container mx-auto px-6 md:px-0 md:w-750 min-h-screen'
          }
        >
          {children}
        </div>
      </LayoutContainer>
    </>
  )
}

export default Layout
