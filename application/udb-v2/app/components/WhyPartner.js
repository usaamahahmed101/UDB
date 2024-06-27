'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'

import Sal from 'sal.js'

import ConvinceData from '../data/convince.json'

const WhyPartner = () => {
  useEffect(() => {
    Sal()
  }, [])
  return (
    <>
      {ConvinceData &&
        ConvinceData.why.map((data, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 sal-animate"
            data-sal="slide-up"
            data-sal-duration="700"
            key={index}
          >
            <div className="service service__style--1 udb-style text-center">
              <div className="icon">
                <Image src={data.img} width={91} height={90} alt="Servece Image" />
              </div>
              <div className="content">
                <h4 className="title w-600">{data.title}</h4>
                <p className="description b1 mb--0">{data.desc}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default WhyPartner
