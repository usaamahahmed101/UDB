'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sal from 'sal.js'

import SplitImg from '@/public/images/bg/showcase-grid.png'
import SplitLogo from '@/public/images/logo/centerpiece.png'
import shapeOne from '@/public/images/bg/icon-shape/icon-1.svg'
import shapeThree from '@/public/images/bg/icon-shape/icon-2.svg'
import shapeTwo from '@/public/images/bg/icon-shape/icon-3.svg'
import shapeFour from '@/public/images/bg/icon-shape/icon-4.svg'
import bgShapeOne from '@/public/images/bg/bg-shape-four.png'
import bgShapeTwo from '@/public/images/bg/bg-shape-five.png'

import ServiceTab from '../ServiceTab'
import ConviceSlider from '../ConvinceSlider'
import WhyPartner from '../WhyPartner'
import CallToAction from '../Common/Cta'

const Home = () => {
  useEffect(() => {
    Sal({ once: false, threshold: 0.4 })
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
                <h1 className="title display-one text-balance">
                  Elevate your business with{' '}
                  <span className="header-caption theme-gradient">Scalable</span> Cloud Expertise
                </h1>
                <p className="description">
                  Unlock the Power of the Cloud: Your One-Stop Solution for Comprehensive Cloud
                  Computing Services
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
            </div>
            <div className=" mb--100 text-center ">
              <Link className="rainbow-gradient-btn btn-large " href="/consultation">
                <span>
                  Request Consultation
                  <i className="fa-regular fa-calendar-plus ms-3"></i>
                </span>
              </Link>
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

      <div className="rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center pb--60">
                <h4 className="subtitle">
                  <span className="theme-gradient">Our Cloud Services</span>
                </h4>
                <h2 className="title mb--0">Everything you need to dominate on the clouds</h2>
              </div>
            </div>
          </div>
          <ServiceTab />
        </div>
      </div>

      <div className="rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Why consider the cloud? </span>
                </h4>
                <h2 className="title mb--60 max-width-title balance-text">
                  Cloud Services Opens up New Avenues
                </h2>
              </div>
            </div>
          </div>
        </div>
        <ConviceSlider />
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

          <div className="row mt-50">
            <div className="col-lg-12">
              <div className="collabration-image-section">
                <Image src={SplitImg} width={1305} height={712} alt="proficiencies image" />
                <div className="logo-section">
                  <div className="center-logo">
                    <Image
                      src={SplitLogo}
                      width={200}
                      height={200}
                      alt="udb- Logo"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom">
        <div className="container">
          <CallToAction />
        </div>
      </div>
    </>
  )
}

export default Home
