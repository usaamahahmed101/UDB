import React from 'react'
import Link from 'next/link'

import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
      <div className="main-content">
        <div className="rainbow-contact-area">
          <div className="container">
            <div className="row mt--40 row--15">
              <div className="col-lg-8">
                <div className="contact-details-box">
                  <h4 className="subtitle theme-gradient">Send Us A Line</h4>
                  <h3 className="title">We'll get back to you as soon as possible</h3>
                  <ContactForm />
                </div>
              </div>
              <div className="col-lg-4 mt_md--30 mt_sm--30">
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Location</h4>
                    <p className="b2">Not sure if you want to include this</p>
                  </div>
                </div>
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-headphones"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Contact Number</h4>
                    <p className="b2">
                      <Link href="tel:+444555666777">+444 555 666 777</Link>
                    </p>
                  </div>
                </div>
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-envelope"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Email Address</h4>
                    <p className="b2">
                      <Link href="mailto:admin@gmail.com">admin@gmail.com</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
