'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import WhyPartner from '@/components/WhyPartner'

import shapeOne from '@/public/images/bg/icon-shape/icon-1.svg'
import shapeThree from '@/public/images/bg/icon-shape/icon-2.svg'
import shapeTwo from '@/public/images/bg/icon-shape/icon-3.svg'
import shapeFour from '@/public/images/bg/icon-shape/icon-4.svg'
import bgShapeOne from '@/public/images/bg/bg-shape-four.png'
import bgShapeTwo from '@/public/images/bg/bg-shape-five.png'
import Sal from 'sal.js'

const Consultation = () => {
  useEffect(() => {
    Sal()
  }, [])
  return (
    <>
      <div
        className="slider-area variation-default slider-bg-image bg-banner1 slider-bg-shape full-page"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--140">
                <h1 className="title display-one">
                  And So It <span className="theme-gradient">Begins!</span>
                </h1>
                <p className="description about-us">
                  On this 30 mins free call, we'll find your perfect cloud solution for seamless
                  integration and secure optimized performance.
                </p>

                <div className="inner-shape">
                  <Image
                    src={shapeOne}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-one"
                  />
                  <Image
                    src={shapeTwo}
                    width={60}
                    height={57}
                    alt="Icon Shape"
                    className="iconshape iconshape-two"
                  />
                  <Image
                    src={shapeThree}
                    width={42}
                    height={31}
                    alt="Icon Shape"
                    className="iconshape iconshape-three"
                  />
                  <Image
                    src={shapeFour}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-four"
                  />
                </div>
              </div>
              <div className=" mb--100 text-center">
                <a
                  className="rainbow-gradient-btn without-shape btn-large"
                  href="https://calendly.com/usaamahahmed101/1-1_consultation"
                >
                  <span>
                    Schedule 1 on 1 Call
                    <i className="fa-regular fa-calendar-circle-plus ms-3"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-shape">
          <Image
            className="bg-shape-one"
            width={640}
            height={949}
            src={bgShapeOne}
            alt="Bg Shape"
          />
          <Image
            className="bg-shape-two"
            src={bgShapeTwo}
            width={626}
            height={1004}
            alt="Bg Shape"
          />
        </div>
      </div>

      <div className="skill-showcase-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">Why Partner with Us? </span>
                </h4>
                <h2 className="title mb--20">
                  Empowering Businesses through
                  <br /> Cloud Innovation
                </h2>
              </div>
            </div>
          </div>
          <div className="container rainbow-section-gap">
            <div className="row row--15 service-wrapper">
              <WhyPartner />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Consultation
