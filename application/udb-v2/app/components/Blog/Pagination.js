'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const Pagination = ({ meta, searchText, categoryText }) => {
  const hasNext = meta.currentPage < meta.totalPages
  const hasPrev = meta.currentPage > 1
  const isValidPage = (page) => page > 0 && page <= meta.totalPages
  const isCurrentPage = (page) => page === meta.currentPage

  const buildUrl = (page) => {
    const newPageParams = new URLSearchParams()
    if (searchText) {
      newPageParams.set('search', searchText)
    }
    if (categoryText) {
      newPageParams.set('category', categoryText)
    }
    newPageParams.set('page', page)

    return `?${newPageParams.toString()}`
  }

  const nextUrl = () => {
    if (!hasNext) return
    return buildUrl(meta.currentPage + 1)
  }
  const prevUrl = () => {
    if (!hasPrev) return
    return buildUrl(meta.currentPage - 1)
  }

  const goToUrl = (pageNumber) => {
    if (pageNumber === meta.currentPage || pageNumber > meta.totalPages) return
    return buildUrl(pageNumber)
  }

  const [pages, setPages] = useState([])

  useEffect(() => {
    const pagesArray = []
    if (meta.currentPage === 1) {
      if (isValidPage(meta.currentPage)) pagesArray.push(meta.currentPage)
      if (isValidPage(meta.currentPage + 1)) pagesArray.push(meta.currentPage + 1)
      if (isValidPage(meta.currentPage + 2)) pagesArray.push(meta.currentPage + 2)
      if (isValidPage(meta.currentPage + 3)) pagesArray.push(meta.currentPage + 3)
    } else if (meta.currentPage === meta.totalPages) {
      if (isValidPage(meta.currentPage - 3)) pagesArray.push(meta.currentPage - 3)
      if (isValidPage(meta.currentPage - 2)) pagesArray.push(meta.currentPage - 2)
      if (isValidPage(meta.currentPage - 1)) pagesArray.push(meta.currentPage - 1)
      if (isValidPage(meta.currentPage)) pagesArray.push(meta.currentPage)
    } else {
      if (isValidPage(meta.currentPage - 1)) pagesArray.push(meta.currentPage - 1)
      if (isValidPage(meta.currentPage)) pagesArray.push(meta.currentPage)
      if (isValidPage(meta.currentPage + 1)) pagesArray.push(meta.currentPage + 1)
      if (isValidPage(meta.currentPage + 1)) pagesArray.push(meta.currentPage + 2)
    }
    setPages(pagesArray)
  }, [meta.currentPage, meta.totalPages])

  return (
    <div className="d-lg-block">
      <nav>
        <ul className="rbt-pagination justify-content-between ">
          <Previous prevUrl={prevUrl()} disabled={!hasPrev} />

          {pages.map((pageNumber) => (
            <PaginationItem
              number={pageNumber}
              key={pageNumber}
              isCurrent={isCurrentPage(pageNumber)}
              url={goToUrl(pageNumber)}
            />
          ))}

          <Next nextUrl={nextUrl()} disabled={!hasNext} />
        </ul>
      </nav>
    </div>
  )
}

const PaginationItem = ({ number, isCurrent, url }) => {
  const currentClass = isCurrent ? 'current' : ''
  return (
    <li>
      <Link
        href={url || '#'}
        aria-label={`Number ${number} Page`}
        className={`h6 pagination_number ${currentClass}`}
      >
        <span> {number} </span>
      </Link>
    </li>
  )
}

const Previous = ({ prevUrl, disabled }) => {
  return (
    <li>
      <Link
        href={prevUrl || '#'}
        aria-label="Previous"
        className={`rainbow-gradient-btn prev  ${disabled ? 'disabled' : ''}`}
      >
        <span>
          <i className="fa fa-chevron-right"></i>
          {/* stays as right because it'll get flipped in css */}
        </span>
      </Link>
    </li>
  )
}

const Next = ({ nextUrl, disabled }) => {
  return (
    <li>
      <Link
        href={nextUrl || '#'}
        aria-label="Next"
        className={`rainbow-gradient-btn next  ${disabled ? 'disabled' : ''}`}
      >
        <span>
          <i className="fa fa-chevron-right"></i>
        </span>
      </Link>
    </li>
  )
}

export default Pagination
