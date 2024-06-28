import Breadcrumb from '@/components/Common/Breadcrumb'
import CallToAction from '@/components/Common/Cta'
import GridItem from '@/components/Blog/GridItem'
import EmptyBlog from '@/components/Blog/Empty'
import { unstable_noStore } from 'next/cache'
import { fetchData } from '@/utils/blog'
import CategoryItem from '@/components/Blog/CategoryItem'
import Search from '@/components/Blog/Search'
import Pagination from '@/components/Blog/Pagination'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | UDB Expert Cloud Solutions',
  description:
    'Unlock the Power of the Cloud: Your One-Stop Solution for Comprehensive Cloud Computing Services',
}

const PER_PAGE = 6

const BlogLayout = async ({ searchParams }) => {
  unstable_noStore()

  let paginationMeta = {
    totalPages: 1,
    perPage: PER_PAGE,
    currentPage: 1,
  }

  //TODO: NOTE Reference to how these links are formed https://docs.strapi.io/dev-docs/api/rest/interactive-query-builder
  const categoryParam = searchParams?.category
  const categoryFilter = categoryParam ? `&filters[category][slug][$eq]=${categoryParam}` : ''

  const searchParam = searchParams?.search
  const searchFilter = searchParam
    ? `&filters[$or][0][title][$containsi]=${searchParam}&filters[$or][1][description][$containsi]=${searchParam}`
    : ''

  const paginationParam = searchParams?.page || 1
  const paginationFilter = `&pagination[pageSize]=${PER_PAGE}&pagination[page]=${paginationParam}`

  const postUrl = `${process.env.API_URL}/posts?populate=*${categoryFilter}${searchFilter}${paginationFilter}`
  const categoryUrl = `${process.env.API_URL}/categories?populate=posts`

  const allData = await Promise.allSettled([fetchData(postUrl), fetchData(categoryUrl)])
  const postResponse = allData[0].status === 'fulfilled' ? allData[0].value : null
  const categoryResponse = allData[1].status === 'fulfilled' ? allData[1].value : null

  const postData = postResponse ? postResponse.data : null
  const categoryData = categoryResponse ? categoryResponse.data : null

  paginationMeta = postResponse
    ? {
        totalPages: postResponse.meta.pagination.pageCount,
        perPage: PER_PAGE,
        currentPage: postResponse.meta.pagination.page,
      }
    : paginationMeta
  return (
    <>
      <Breadcrumb title="Our Blog" text="Blog" />
      <div className="rainbow-blog-area rainbow-section-gapBottom-big bg-color-1">
        <div className="container">
          <div className="row row--30">
            <div className="col-md-8 order-2 order-md-0">
              {postData && postData?.length ? (
                <div className="row row--15">
                  {postData.map((post) => (
                    <div className="col-lg-6 col-sm-6 col-12 mb--30" key={post.id}>
                      <GridItem post={post} />
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyBlog hasParams={searchFilter || categoryFilter} />
              )}
            </div>
            <div className="col-md-4 mb--30 mt_sm--0">
              <aside className="blog-sidebar">
                <Pagination
                  meta={paginationMeta}
                  searchText={searchParam}
                  categoryText={categoryParam}
                />
                <Search searchText={searchParam} />
                {categoryData ? (
                  <div className="rbt-single-widget widget_categories mt--30 d-none d-md-block">
                    <h3 className="title d-flex justify-content-between">
                      Categories
                      {categoryParam ? (
                        <Link
                          className="b1 btn-link "
                          href="/blog"
                          aria-label="View all categories"
                          title="View all categories"
                        >
                          <span className="color-secondary">
                            <i className="icon fa fa-close"></i>
                          </span>
                        </Link>
                      ) : null}
                    </h3>

                    <div className="inner ">
                      <ul className="category-list ">
                        {categoryData.map((data, index) =>
                          data.attributes.posts.data && data.attributes.posts.data.length ? (
                            <CategoryItem
                              key={index}
                              category={data.attributes}
                              active={categoryParam === data.attributes.slug}
                            />
                          ) : null
                        )}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </aside>
            </div>
          </div>
        </div>
      </div>

      {!postData?.length && (
        <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big bg-color-1">
          <div className="container">
            <CallToAction />
          </div>
        </div>
      )}
    </>
  )
}

export default BlogLayout
