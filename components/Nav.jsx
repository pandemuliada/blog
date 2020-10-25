import Link from 'next/link'
import styled from 'styled-components'
import useTheme from '../hooks/useTheme'
import { Sun } from '../icons/sun'
import { Moon } from '../icons/moon'

const NavWrapper = styled('nav')`
  background: ${({ theme }) =>
    theme.isDark ? theme.colors['rich-black-fogra'] : theme.colors['white']};
  color: ${({ theme }) =>
    theme.isDark ? theme.colors['lightest-gray'] : theme.colors['gray']};

  transition: all ease-out 0.3s;
`

const Nav = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <NavWrapper
      className="hidden md:block fixed top-0 bottom-0 py-5 pl-10 pr-5 h-screen"
      style={{ width: 250 }}
    >
      <div className="flex items-center h-full">
        <div className="flex flex-col">
          <button onClick={() => toggleTheme()} style={{ marginBottom: 20 }}>
            {theme === 'light' ? <Sun /> : <Moon />}
          </button>
          <Link href="/" as="/">
            <a>About</a>
          </Link>
          <Link href="/now" as="/now">
            <a className="mt-3">Now</a>
          </Link>
          <Link href="/posts" as="/posts">
            <a className="mt-3">Blog</a>
          </Link>
          <Link href="/tag/[tag]" as="/tag/technical">
            <a className="mt-3 ml-3">Technical</a>
          </Link>
        </div>
      </div>
    </NavWrapper>
  )
}

export default Nav
