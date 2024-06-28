'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import MenuData from '../../data/header.json'

const Nav = () => {
  const pathname = usePathname()

  const isActive = (href) =>
    href.includes('blog') && pathname.includes(href) ? true : pathname === href ? true : false

  return (
    <ul className="mainmenu">
      {MenuData &&
        MenuData.nav.map((data, index) => (
          <li key={index}>
            <Link href={data.link} className={isActive(data.link) ? 'active' : ''}>
              {data.text}
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default Nav
