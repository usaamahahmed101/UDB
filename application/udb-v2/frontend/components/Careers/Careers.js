'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sal from 'sal.js'

import ShapeImg from '@/public/images/cta/overlay-shape.png'

const CareerCta = () => {
  useEffect(() => {
    Sal()
  }, [])

  return (
    <div>
      <div className="row row--0 align-items-center content-wrapper">
        <div className="col-lg-8">
          <div className="inner">
            <div className="content text-left">
              <h4
                className="title sal-animate color-white"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="200"
              >
                Ready for a next step in your career?
              </h4>
              <p
                className="sal-animate color-white"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="300"
              >
                Discover your potential with us. Explore future opportunities and see how you can
                make an impact with our team.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="right-content">
            <div
              className="call-to-btn text-start text-lg-end sal-animate "
              data-sal="slide-up"
              data-sal-duration="400"
              data-sal-delay="400"
            >
              <Link className="btn-default" href="#">
                View Careers at UDB
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-shape">
          <Image src={ShapeImg} width={353} height={203} alt="BG Shape" />
        </div>
      </div>
    </div>
  )
}

export default CareerCta
