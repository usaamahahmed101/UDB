'use server'

import { redirect } from 'next/navigation'

export const searchBlog = async (formData) => {
  const search = formData
    .get('search')
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')

  if (!search) {
    return null
  }

  const searchUrl = `/blog?search=${search}`
  return redirect(searchUrl)
}
