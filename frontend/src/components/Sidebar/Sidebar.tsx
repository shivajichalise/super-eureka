import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Article} from '../../constants/Article.model'

export const Sidebar = () => {
  const [latestArticles, setLatestArticles] = useState<Article[]>([])

  const getLatestArticles = async () => {
    const {data} = await axios.get('/api/articles/latest')
    setLatestArticles(data.slice(0, 5))
  }

  useEffect(() => {
    getLatestArticles()
  }, [])

  return (
    <div className="mx-auto w-1/4 text-justify break-words px-2">
      {latestArticles.map(article => {
        const updated_at = new Date(article.updated_at)
        return (
          <div key={article.id} className="flex flex-col text-justify break-words my-2">
            <Link to={"/article/" + article.id}> <h1 className="text-lg">{article.title}</h1></Link>
            <div className="text-sm opacity-40">{updated_at.toDateString()}</div>
            <p className="text-sm">
              {article.description.length <= 600 ? article.description : article.description.substring(0, 600) + '...'}
            </p>
          </div>
        )
      })}
    </div >
  )
}
