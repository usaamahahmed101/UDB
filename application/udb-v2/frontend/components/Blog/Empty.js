import Link from 'next/link'
const EmptyBlog = ({ hasParams }) => {
  return (
    <div className="container">
      <h4 className="subtitle theme-gradient"> We're writing something awesome</h4>

      {hasParams ? (
        <>
          <h4 className="title"> No blog post found with your search params</h4>
          <Link href="/blog" className="rainbow-gradient-btn without-shape">
            <span>
              Clear Filters <i className="fa fa-filter-circle-xmark"> </i>
            </span>
          </Link>
        </>
      ) : (
        <h4 className="title"> No blog posts yet.</h4>
      )}
    </div>
  )
}

export default EmptyBlog
