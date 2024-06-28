import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { blogPostImagePath, formatDate } from '@/utils/blog'

const BlogGridItem = ({ post }) => {
  const { attributes: data } = post
  const image = blogPostImagePath(data.image, 'small')
  const lastUpdated = formatDate(data.lastUpdated)
  const singlePostUrl = `/blog/${data.slug}`
  const category = data.category.data.attributes

  return (
    <div className="rainbow-card">
      <div className="inner">
        <div className="thumbnail">
          <Link className="image" href={singlePostUrl}>
            <Image src={image.src} width={220} height={220} alt={image.alt || data.title} />
          </Link>
        </div>
        <div className="content">
          <ul className="rainbow-meta-list">
            <li>
              <i className="fa-regular fa-calendar icon-left"></i> {lastUpdated}
            </li>
            <li className="separator"></li>
            <li className="catagory-meta" title="Post Category" aria-label="Post Category">
              <Link href={`/blog?category=${category.slug}`}>{category.title}</Link>
            </li>
          </ul>
          <h4 className="title">
            <Link href={singlePostUrl}>{data.title}</Link>
          </h4>
          <p className="description w-100">{data.description}</p>
          <a className="btn-read-more " href={singlePostUrl}>
            <span>
              Read More <i className="fa-sharp fa-regular fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default BlogGridItem
