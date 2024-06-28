'use client'
import Link from 'next/link'
import React from 'react'

const CategoryItem = ({ category, active }) => {
  const link = active ? '' : `/blog?category=${category.slug}`
  const activeClass = active ? 'active' : ''
  return (
    <li className={activeClass}>
      <Link href={link}>
        <span className="left-content">{category.title}</span>
        <span className="count-text">{category.posts.data.length}</span>
      </Link>
    </li>
  )
}

export default CategoryItem
