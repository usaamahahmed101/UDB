'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

import { useAppContext } from '@/context/Context'

import logo from '@/public/images/logo/logo.png'
import Nav from './Nav'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { activeMobileMenu, setActiveMobileMenu } = useAppContext()
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      if (scrolled > 200) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [router, pathname])
  return (
    <>
      <header
        className={`rainbow-header header-default header-transparent header-sticky ${
          isSticky ? 'sticky' : ''
        }`}
      >
        <div className="container position-relative">
          <div className="row align-items-center  row--0">
            <div className="col-lg-2 col-md-2 col-4">
              <div className="logo">
                <Link href="/">
                  <Image
                    className="app-logo"
                    src={logo}
                    width={150}
                    height={60}
                    alt="UDB Logo"
                    loading="eager"
                  />
                </Link>
              </div>
            </div>

            <div className="col-lg-10 col-md-10 col-8">
              <div className="d-flex justify-content-end justify-content-lg-between align-content-end">
                <nav className="mainmenu-nav d-none d-md-flex justify-content-center">
                  <Nav />
                </nav>
                <div className="d-flex justify-content-end ">
                  <div className="header-btn d-none d-lg-block">
                    <Link className="rainbow-gradient-btn" href="/consultation">
                      <span>Request Consultation</span>
                    </Link>
                  </div>
                  <div className="mobile-menu-bar ml--5 d-flex justify-content-center d-md-none">
                    <div className="hamburger">
                      <button
                        className="hamburger-button"
                        onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                      >
                        <i className="fa-sharp fa-regular fa-bars"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
