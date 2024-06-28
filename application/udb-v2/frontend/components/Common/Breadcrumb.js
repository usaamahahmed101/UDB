import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({ title, text, isBlog = false }) => {
  return (
    <>
      <div className="breadcrumb-area pt--150 pb--100 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h3 className="title h3">{title}</h3>
                <ul className="page-list bullet">
                  <li className="rainbow-breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  {isBlog && (
                    <li className="rainbow-breadcrumb-item">
                      <Link href="/blog">Blog</Link>
                    </li>
                  )}
                  <li className="rainbow-breadcrumb-item active">{text}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrumb
