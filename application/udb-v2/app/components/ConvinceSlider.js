'use client'

import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'

import ConvinceData from '@/data/convince.json'

import bg from '@/public/images/icons/folder-bg.png'
import bgHover from '@/public/images/icons/folder-bg-hover.png'

const ConvinceSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Slider
              {...settings}
              className="service-wrapper rainbow-service-slider-actvation slick-grid-15 rainbow-slick-dot rainbow-gradient-arrows"
            >
              {ConvinceData &&
                ConvinceData.slider.map((data, index) => (
                  <div className="slide-single-layout" key={index}>
                    <div className="rainbow-box-card card-style-default convice-slider has-bg-shaped">
                      <div className="inner">
                        <div className="icon bg-gradient-1 d-flex justify-content-center align-items-center">
                          <i className={`fa fa-${data.iconName}`}></i>
                        </div>
                        <div className="description centered-shape">
                          <h5 className="title">{data.title}</h5>
                          <p className="desc">{data.desc}</p>
                        </div>
                      </div>
                      <div className="bg-shaped">
                        <Image src={bg} width={415} height={344} alt="" className="bg" />
                        <Image src={bgHover} width={415} height={344} alt="" className="bg-hover" />
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConvinceSlider
