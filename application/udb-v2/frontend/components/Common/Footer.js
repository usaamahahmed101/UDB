import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="footer-area footer-style-one ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="footer-left">
                <ul className="ft-menu link-hover">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/about#career-section">Career</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/consultation" className="theme-gradient">
                      Request Consultation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 d-none d-md-block">
              <div className="footer-right text-center text-lg-end">
                <p className="footer-text ">
                  Transforming Cloud Visions into Reality since{' '}
                  <span className="theme-gradient"> 2020</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
