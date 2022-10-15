import {Article} from "./Article.model"

export type ArticleFormProps = {
  action: string
  state: boolean
  toggleModalHandler: () => void
  article: Article | null
}
