import Link from 'next/link'
import styled from 'styled-components'
import useTheme from '../hooks/useTheme'
import { Sun } from '../icons/sun'
import { Moon } from '../icons/moon'
import { useEffect, useState } from 'react'
import { Close } from '../icons/close'
import { Menu } from '../icons/menu'

const DesktopNavWrapper = styled('nav')`
  background: ${({ theme }) =>
    theme.isDark ? theme.colors['rich-black-fogra'] : theme.colors['white']};
  color: ${({ theme }) =>
    theme.isDark ? theme.colors['lightest-gray'] : theme.colors['gray']};

  transition: all ease-out 0.3s;

  left: ${({ visible }) => (visible ? '0px' : '-250px')};
`

const MobileNavWrapper = styled('nav')`
  background: ${({ theme }) =>
    theme.isDark ? theme.colors['rich-black-fogra'] : theme.colors['white']};
  color: ${({ theme }) =>
    theme.isDark ? theme.colors['lightest-gray'] : theme.colors['gray']};

  transition: all ease-out 0.3s;

  left: ${({ visible }) => (visible ? '0px' : '-500px')};
`

const MobileNav = ({ visible, onClose }) => {
  return (
    <MobileNavWrapper
      visible={visible}
      className="fixed top-0 bottom-0 py-5 h-screen"
      style={{ width: '100%', zIndex: 99 }}
    >
      <button
        onClick={onClose}
        className="absolute"
        style={{ top: 30, right: 30 }}
      >
        <Close />
      </button>
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col">
          <Link href="/" as="/">
            <a className="text-lg">About</a>
          </Link>
          <Link href="/posts" as="/posts">
            <a className="mt-3 text-lg">Blog</a>
          </Link>
        </div>
      </div>
    </MobileNavWrapper>
  )
}

const DesktopNav = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <DesktopNavWrapper
      visible={true}
      className="fixed top-0 bottom-0 py-5 pl-10 pr-5 h-screen"
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
          <Link href="/posts" as="/posts">
            <a className="mt-3">Blog</a>
          </Link>
        </div>
      </div>
    </DesktopNavWrapper>
  )
}

const Nav = () => {
  const { toggleTheme, theme } = useTheme()

  const [mobileNavIsVisible, setMobileNavIsVisible] = useState(false)
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(min-width: 640px)').matches) {
      setIsMobileDevice(false)
    } else {
      setIsMobileDevice(true)
    }
  }, [])

  return (
    <>
      {isMobileDevice ? (
        <MobileNav
          visible={mobileNavIsVisible}
          onClose={() => setMobileNavIsVisible(false)}
        />
      ) : (
        <DesktopNav />
      )}
      {isMobileDevice && (
        <MobileNavWrapper className="px-5 py-5">
          <div className="w-11/12 mx-auto md:w-750 flex">
            <button
              onClick={() => toggleTheme()}
              style={{ marginRight: 'auto' }}
            >
              {theme === 'light' ? <Sun /> : <Moon />}
            </button>
            <button
              onClick={() => {
                setMobileNavIsVisible(true)
              }}
            >
              <Menu className="block" />
            </button>
          </div>
        </MobileNavWrapper>
      )}
    </>
  )
}

export default Nav
