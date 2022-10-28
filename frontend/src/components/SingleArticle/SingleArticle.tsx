import {useEffect, useState} from 'react'
import {http} from '../../utils/http'
import {Article} from '../../constants/Article.model'

type SingleArticleProps = {
  id: number
}

export const SingleArticle = (props: SingleArticleProps) => {

  const [article, setArticle] = useState<Article | null>(null)

  const getArticleById = async (id: number) => {

    await http().get('/api/articles/' + id).then(response => {
      if (response.data.error) {
        console.log(response.data.error)
      } else {
        setArticle(response.data)
      }
    })
  }

  useEffect(() => {
    getArticleById(props.id)
  }, [props.id])

  return (
    <div className="container p-7 mx-auto flex flex-col justify-between mb-10">
      <h1 className="text-4xl">{article?.title}</h1>
      <p className="text-lg mt-5 indent-10 break-words">
        {article?.description}
      </p>
    </div>
  )
}
