import {useState, useEffect} from 'react'
import axios from 'axios'

type Article = {
  id: number,
  title: string,
  text: string,
  created_at: string,
  updated_at: string
}

export const Content = () => {
  const [articles, setArticles] = useState<Article[]>([])

  const getArticles = async () => {
    const {data} = await axios.get('/api/articles')
    setArticles(data)
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <div className="flex flex-col w-2/3 px-2">
      {articles.map(article => {
        const updated_at = new Date(article.updated_at)
        return (
          <div key={article.id} className="flex flex-col text-justify break-words my-2">
            <h1 className="text-4xl">{article.title}</h1>
            <div className="text-sm opacity-40">{updated_at.toDateString()}</div>
            <p className="text-lg">
              {article.text.length <= 600 ? article.text : article.text.substring(0, 600) + '...'}
            </p>
          </div>
        )
      })}
    </div>
  )
}
