import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Pagination} from '../Pagination/Pagination'
import axios from 'axios'
import {Article} from '../../constants/Article.model'
import {Loader} from '../Loader/Loader'

export const Content = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [articles, setArticles] = useState<Article[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(5)

  const getArticles = async () => {
    const {data} = await axios.get('/api/articles')
    setArticles(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getArticles()
  }, [])

  // get current article
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <>
      {isLoading ? (
        <Loader size={20} />
      ) : (
        <div className="flex flex-col w-2/3 px-2">
          {currentArticles.map(article => {
            const updated_at = new Date(article.updated_at)
            return (
              <div key={article.id} className="flex flex-col text-justify break-words my-2">
                <Link to={"/article/" + article.id}><h1 className="text-4xl">{article.title}</h1></Link>
                <div className="text-sm opacity-40">{updated_at.toDateString()}</div>
                <p className="text-lg">
                  {article.description.length <= 600 ? article.description : article.description.substring(0, 600) + '...'}
                </p>
              </div>
            )
          })}
          <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate} />
        </div>
      )}
    </>
  )
}
