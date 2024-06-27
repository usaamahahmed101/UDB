import { redirect } from 'next/navigation'
import Breadcrumb from '@/components/Common/Breadcrumb'
import SinglePostDetails from '@/components/Blog/SinglePostDetails'
import { blogPostImagePath } from '@/utils/blog'
// import { Suspense } from 'react'
import { unstable_noStore } from 'next/cache'

const fetchBlogData = async (slug, redirectIfErr = false) => {
  const url = `${process.env.API_URL}/posts?filters[slug][$eq]=${slug}&populate=*`
  try {
    unstable_noStore()
    const res = await fetch(url)
    const blogData = await res.json()
    return blogData.data[0]
  } catch (err) {
    console.log('Error with fetching blog data ', slug, err)
    redirectIfErr && redirect('/not_found')
  }
}

export async function generateMetadata({ params }) {
  const slug = params.slug
  const { attributes: blogData } = await fetchBlogData(slug, false) // do not redirect if error
  const image = blogPostImagePath(blogData.image, 'medium')
  return {
    title: `${blogData.title} | UDB`,
    description: blogData.description,
    openGraph: {
      images: image.src,
    },
  }
}

const SingleBlog = async ({ slug }) => {
  const { attributes: blogData } = await fetchBlogData(slug, true)
  return blogData ? (
    <>
      <Breadcrumb title={blogData.title} text={blogData.title} isBlog={true} />
      <SinglePostDetails post={blogData} />
    </>
  ) : null
}

const SingleBlogDetailsPage = ({ params }) => {
  const { slug } = params
  return (
    slug && (
      // Suspense doesn't work here because of generateMetadata()
      // https://github.com/vercel/next.js/issues/55524
      // <Suspense fallback="Loading...">
      <SingleBlog slug={slug} />
      // </Suspense>
    )
  )
}
export default SingleBlogDetailsPage
