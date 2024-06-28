'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAppContext } from '@/context/Context'
import { usePathname } from 'next/navigation'

import logoLight from '../../public/images/logo/logo.png'
import Nav from './Nav'

const PopupMobileMenu = () => {
  const pathname = usePathname()
  const { activeMobileMenu, setActiveMobileMenu } = useAppContext()

  const handleResize = () => {
    if (window.innerWidth > 992) {
      setActiveMobileMenu(true)
    }
  }

  // watch for route change and hide menu
  useEffect(() => {
    if (activeMobileMenu === false) {
      setActiveMobileMenu(true)
    }
  }, [pathname])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [activeMobileMenu])

  return (
    <>
      <div className={`popup-mobile-menu ${activeMobileMenu ? '' : 'active'}`}>
        <div className="bg" onClick={() => setActiveMobileMenu(!activeMobileMenu)}></div>
        <div className="inner-popup">
          <div className="header-top">
            <div className="logo">
              <Link href="/">
                <Image
                  className="app-logo"
                  src={logoLight}
                  width={180}
                  height={60}
                  alt="Logo"
                  loading="eager"
                />
              </Link>
            </div>
            <div className="close-menu">
              <button
                className="close-button"
                onClick={() => setActiveMobileMenu(!activeMobileMenu)}
              >
                <i className="fa-sharp fa-regular fa-x"></i>
              </button>
            </div>
          </div>
          <div className="content ps-3">
            <Nav />
            <Link className="rainbow-gradient-btn mt--10" href="/consulation">
              <span>Request Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupMobileMenu
