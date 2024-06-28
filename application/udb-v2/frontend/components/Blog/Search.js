'use client'

import { useEffect, useRef } from 'react'
import { searchBlog } from '@/actions/search'
import Link from 'next/link'

const Search = ({ searchText }) => {
  const searchForm = useRef(null)

  useEffect(() => {
    if (!searchText) {
      searchForm.current.reset()
    }
  }, [searchText])

  return (
    <div className="rbt-single-widget widget_search ">
      <div className="inner">
        <form className="blog-search" action={searchBlog} ref={searchForm}>
          <input
            type="text"
            placeholder="Search ..."
            name="search"
            aria-required
            autoComplete="off"
          />
          <div className="btn-group d-flex align-items-center justify-content-between">
            {searchText && (
              <Link className="clear-search-button" href="/blog" aria-label="Clear Search">
                <i className="fa fa-close "></i>
              </Link>
            )}
            <button className="search-button" type="submit" aria-label="Search">
              <i className="fa fa-filter "></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Search
