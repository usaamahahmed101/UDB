'use client'

import React from 'react'
import Image from 'next/image'
import { blogPostImagePath, formatDate } from '@/utils/blog'
import Link from 'next/link'

const SinglePostDetails = ({ post }) => {
  const lastUpdated = formatDate(post.lastUpdated)
  const image = blogPostImagePath(post.image, 'medium')
  const category = post.category.data.attributes

  return (
    <>
      <div className="rainbow-blog-section rainbow-section-gapBottom bg-color-1">
        {post && (
          <div className="container">
            <div className="row row--30 justify-content-center">
              <div className="col-lg-10">
                <div className="rainbow-blog-details-area">
                  <div className="container content">
                    <div className="row align-items-baseline">
                      <div className="col-12 col-md-8">
                        <h2 className="title">{post.title}</h2>
                      </div>
                      <div className="col-12 col-md-4">
                        <ul className="rainbow-meta-list mb--40 justify-content-md-end ">
                          <li className="h5">
                            <i className=" fa-regular fa-calendar me-2 "></i>
                            {lastUpdated}
                          </li>
                          <li className="separator"></li>
                          <li
                            className="catagory-meta"
                            title="Post Category"
                            aria-label="Post Category"
                          >
                            <Link href={`/blog?category=${category.slug}`}>{category.title}</Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Image
                      className="w-100 radius"
                      src={image.src}
                      width={790}
                      height={445}
                      alt={image.alt || post.title}
                    />
                  </div>
                  <div className="blog-details-content pt--40 ">
                    <div className="container">
                      <div className="content">
                        <div dangerouslySetInnerHTML={{ __html: post.body }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SinglePostDetails
