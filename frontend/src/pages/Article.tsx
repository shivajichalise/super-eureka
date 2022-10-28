import {Navbar} from "../components/Navbar/Navbar"
import {SingleArticle} from "../components/SingleArticle/SingleArticle"
import {useParams} from "react-router-dom"

export const Article = () => {
  const {id} = useParams()

  if (id === undefined) {
    return null
  } else {
    return (
      <>
        <Navbar />
        <SingleArticle id={parseInt(id)} />

      </>
    )

  }
}
