'use client'

import React from 'react'
import Link from 'next/link'

const ErrorPage = () => {
  return (
    <div className="text-center full-height row align-items-center justify-content-center not-found-page">
      <div className="container">
        <h1 className="theme-gradient text-large" style={{ fontSize: '10em' }}>
          404!
        </h1>
        <h3>
          Lost in the Clouds? That's alright, that's what we are here for! <br /> Let’s Redirect
          You!
        </h3>
        <Link className="rainbow-gradient-btn without-shape mt--20" href="/">
          <span>
            Yes Please! <i className="fa fa-cloud"></i>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
