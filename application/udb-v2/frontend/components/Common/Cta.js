'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sal from 'sal.js'
import bgShape from '@/public/images/cta/overlay-shape.png'

const Cta = () => {
  useEffect(() => {
    Sal()
  }, [])
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="udb-cta">
            <div className="inner">
              <div className="content-left">
                <div
                  className="section-title text-left"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="150"
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">
                      Get Started Today <strong>For Free!!</strong>{' '}
                    </span>
                  </h4>
                  <h2 className="title w-600 mb--20">Ready to soar the clouds?</h2>
                  <p className="description b1">
                    Unlock the full potential of your business with expert cloud solutions.
                    <br /> Contact me now to transform your cloud experience
                  </p>
                  <Link className="btn-default" href="consultation">
                    Schedule a 30mins Call
                  </Link>
                </div>
              </div>
              <div className="bg-shape-one">
                <Image src={bgShape} width={639} height={404} alt="Bg shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cta
