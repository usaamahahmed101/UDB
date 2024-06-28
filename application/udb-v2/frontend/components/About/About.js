'use client'
import { useEffect } from 'react'

import CareerCta from '@/components/Careers/Careers'
import WhyPartner from '@/components/WhyPartner'
import Image from 'next/image'
import shapeOne from '@/public/images/bg/icon-shape/icon-1.svg'
import shapeTwo from '@/public/images/bg/icon-shape/icon-4.svg'
import bgShapeOne from '@/public/images/bg/bg-shape-four.png'
import bgShapeTwo from '@/public/images/bg/bg-shape-five.png'

import SplitImg from '@/public/images/bg/showcase-grid.png'
import SplitLogo from '@/public/images/logo/centerpiece.png'
import ceoImg from '@/public/images/usaamah-placeholder.jpeg'
import Sal from 'sal.js'

const AboutPage = () => {
  useEffect(() => {
    Sal()
  }, [])

  return (
    <>
      <div
        className="slider-area variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner text-center mt--140 ">
                <h1 className="title display-one">Pioneering Your Cloud Journey</h1>
                <p className="description about-us">
                  We specialize in cloud solutions, offering expertise in migration, infrastructure
                  management, security, DevOps, and cost optimization. Partner with us to transform
                  your cloud vision into reality.
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
                </div>
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
      {/*  */}
      <div className="bg-color-1 rainbow-section-gap-big pb--0">
        <div className="container">
          <div className="row row--15 mt_dec--30">
            <div className="col-md-4 col-sm-2 col-12 mt--30">
              <div className="team">
                <div className="thumbnail gradient-border border-gradient p-1">
                  <Image src={ceoImg} width={415} height={352} alt="UDB CEO | Usaamah Ahmad" />
                </div>

                <div className="content d-sm-none d-md-block">
                  <h4 className="title">Usaamah Ahmed</h4>
                  <p className="designation">CEO | Founder</p>
                </div>
                <ul className="social-icon ">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/usaamah-ahmed101/"
                      title="CEO\'s LinkedIn Link"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-lg-none mt--10 ps-1">
                <a
                  href="https://www.linkedin.com/in/usaamah-ahmed101/"
                  title="CEO\'s LinkedIn Link"
                >
                  <i className="fab fa-linkedin-in h5"></i>
                </a>
              </div>
            </div>

            <div className="col-md-8 col-sm-10 col-12 mt--30">
              <h4 className="subtitle">
                <span className="theme-gradient">
                  Charting the Cloud Frontier
                  <i className="fa fa-wand-sparkles fa-light ms-2"> </i>
                </span>
              </h4>
              <h2 className="title mb--20 balance-text">
                Empowering Businesses through Cloud Innovation
              </h2>
              <p className="description b1">
                At UDB, As dedicated experts, our mission is to empower your business through
                cutting-edge cloud solutions. With a deep commitment to innovation and excellence, I
                lead our team in transforming your cloud vision into reality. Let’s embark on this
                journey together and achieve new heights of success.”
              </p>
              <h6
                className="color-heading"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                {' '}
                - Usaamah Ahmed | CEO & Creative Director
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Why */}
      <div className="skill-showcase-area rainbow-section-gapTop-big">
        <div className="container">
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
          <div className="container rainbow-section-gap">
            <div className="row row--15 service-wrapper">
              <WhyPartner />
            </div>
          </div>
        </div>
      </div>

      <div className="skill-showcase-area">
        <div className="container">
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

      <div className="rainbow-rn-cta rainbow-section-gap " id="career-section">
        <div className="container">
          <CareerCta />
        </div>
      </div>
    </>
  )
}

export default AboutPage
