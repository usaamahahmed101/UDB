'use client'

import Image from 'next/image'
import React from 'react'
import { useEffect, useRef } from 'react'

import ServicesData from '../data/services.json'

const ServicesTab = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    //scroll to third element
    const thirdItem = container.querySelector('.nav-item:nth-child(2)')
    if (thirdItem) {
      const scrollLeft = thirdItem.offsetLeft - (container.offsetWidth - thirdItem.offsetWidth) / 2
      container.scrollLeft = scrollLeft
    }

    const items = container.querySelectorAll('.nav-item')
    const firstItemOffsetTop = items[0].offsetTop

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.offsetTop > firstItemOffsetTop) {
          entry.target.querySelector('.nav-link').classList.add('secondRowItem')
          observer.unobserve(entry.target) // Stop observing once identified
        }
      })
    })

    items.forEach((item) => observer.observe(item))

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect()
    }
  }, [])
  return (
    <>
      <div className="row row--30 align-items-center">
        <div className="col-lg-12">
          <div className="rainbow-default-tab style-three generator-tab-defalt">
            <ul className="nav nav-tabs tab-button" role="tablist" ref={containerRef}>
              {ServicesData &&
                ServicesData.services.map((data, index) => (
                  <li className="nav-item tabs__tab " role="presentation" key={index}>
                    <button
                      className={`nav-link rainbow-gradient-btn without-shape-circle ${
                        data.isSelect ? 'active' : ''
                      }`}
                      id={`${data.id}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${data.id}`}
                      type="button"
                      role="tab"
                      aria-controls={data.id}
                      aria-selected="false"
                    >
                      <span className="generator-icon">
                        <i className={`fa theme-gradient fa-${data.iconName}`}></i>
                        {data.text}
                      </span>
                      <span className="border-bottom-style"></span>
                    </button>
                  </li>
                ))}
            </ul>

            <div className="rainbow-tab-content tab-content">
              {ServicesData &&
                ServicesData.services.map((tab, index) => (
                  <div
                    className={`tab-pane fade ${tab.isSelect ? 'show active' : ''}`}
                    id={tab.id}
                    role="tabpanel"
                    aria-labelledby={`${tab.id}-tab`}
                    key={index}
                  >
                    <div className="inner">
                      <div className="row">
                        <div className="col-xl-8">
                          <div className="section-title">
                            <h2 className="title">{tab.title}</h2>
                            <div className="features-section">
                              <ul className="list-style--1">
                                {tab.subItem.map((item, i) => (
                                  <li key={i}>
                                    <i className="fa-regular fa-circle-check"></i>
                                    {item.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-4 d-none d-xl-block">
                          <div className="export-img">
                            <div className="inner-without-padding">
                              <div className="export-img img-bg-shape">
                                <Image src={tab.img} width={569} height={483} alt="Service Image" />
                                <div className="image-shape"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesTab
