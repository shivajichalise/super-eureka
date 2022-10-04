type PaginationProps = {
  articlesPerPage: number,
  totalArticles: number,
  paginate: (pageNumber: number) => void
}

export const Pagination = (props: PaginationProps) => {

  const {articlesPerPage, totalArticles, paginate} = props

  let pageNumbers: number[] = []

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="container flex mx-auto mt-5">
      <ul className="flex space-x-1">
        {pageNumbers.map((pageNumber) => {
          return (
            <li key={pageNumber}  >
              <button
                className="rounded-md px-4 py-2 text-gray bg-green transition duration-300 ease-in-out hover:bg-lightGreen" onClick={() => paginate(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
