import {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {MdDashboard, MdDelete} from 'react-icons/md'
import {FaUsers, FaSignOutAlt, FaUserCircle} from 'react-icons/fa'
import {BsFillFileEarmarkPostFill as PostIcon, BsSunglasses} from 'react-icons/bs'
import {BiSearchAlt, BiEdit} from 'react-icons/bi'
import {Button} from '../Button/Button'
import {Article} from '../../constants/Article.model'
import {Pagination} from '../Pagination/Pagination'
import axios from 'axios'
import {useAuth} from '../../utils/useAuth'
import {http} from '../../utils/http'
import {logout} from '../../utils/auth'

export const Profile = () => {

  const auth = useAuth()
  const navigate = useNavigate()

  const [articles, setArticles] = useState<Article[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [articlesPerPage] = useState(5)

  const getArticles = async () => {
    const {data} = await axios.get('/api/articles')
    setArticles(
      data.filter((obj: Article) => {
        return obj.user_id === auth.user?.id
      })
    )
  }

  // get current article
  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const logoutHandler = async () => {
    await http().post('/api/logout').then(response => {
      if (response.data.error) {
        console.log(response.data.error)
      } else {
        auth.logout()
        logout()
        navigate('/', {replace: true})
        // const {user} = response.data
      }
    })
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <div className="relative p-7">
      <div className="flex justify-between">
        <div className="flex flex-col w-1/5  p-3">
          <div className="pt-2">
            <Link to="/" className="w-full text-2xl">Super Eureka</Link>
          </div>

          <div className="mt-10">
            <ul className="flex flex-col spae-y-3 text-lg text-lightGray font-light">

              <li className="flex rounded-md space-x-2 hover:text-white p-2 hover:bg-lightGreen cursor-pointer">
                <FaUserCircle className="mt-1" /> <span> {auth.user?.username} </span>
              </li>

              <li className="flex rounded-md space-x-2 hover:text-white p-2 hover:bg-lightGreen cursor-pointer">
                <MdDashboard className="mt-1" /> <span> Overview </span>
              </li>

              <li className="flex rounded-md space-x-2 hover:text-white p-2 hover:bg-lightGreen cursor-pointer">
                <PostIcon className="mt-1" />  <span> Articles </span>
              </li>

              <li className="flex rounded-md space-x-2 hover:text-white p-2 hover:bg-lightGreen cursor-pointer">
                <FaUsers className="mt-1" /> <span> Users </span>
              </li>

              <li className="flex rounded-md space-x-2 hover:text-white p-2 hover:bg-lightGreen cursor-pointer" onClick={logoutHandler}>
                <FaSignOutAlt className="mt-1" /> <span> Logout </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-5 border-l border-veryLightGray">

          {/* Header */}
          <div className="flex justify-between">
            <div className="flex-flex-col justify-around">
              <h1 className="font-bold text-lg tracking-wide">Articles</h1>
              <p className="text-lightGray text-xs">Below listed articles are yours</p>
            </div>
            <div>
              <Button value="Create" hidden={false} />
            </div>
          </div>

          {/*Sub header*/}
          <div className="flex justify-end border-y border-veryLightGray mt-3 p-3 space-x-2">
            <BiSearchAlt className="mt-1 text-lightGray" size={20} />
            <input type="text" placeholder="Article" name="article" className="border border-solid border-lightGreen outline-green rounded-lg px-2 py-1 text-sm transition
          ease-in-out" />

          </div>

          {/*Articles list*/}
          <table className="w-full table-fixed">
            <thead>
              <tr className="text-sm text-lightGray border-b border-veryLightGray">
                <td className="p-2">Title</td>
                <td className="p-2">Created at</td>
                <td className="p-2">Updated at</td>
                <td className="p-2">Options</td>
              </tr>
            </thead>
            <tbody>
              {currentArticles.map(article => {
                const created_at = new Date(article.created_at)
                const updated_at = new Date(article.updated_at)
                return (
                  <tr key={article.id} className="rounded-lg hover:bg-lightGreen">
                    <td className="p-2 text-lg break-word">{article.title}</td>
                    <td className="p-2 text-sm text-lightGray">{created_at.toDateString()}</td>
                    <td className="p-2 text-sm text-lightGray">{updated_at.toDateString()}</td>
                    <td className="p-2">
                      <div className="flex text-md space-x-2 items-center">
                        <div className="bg-blue-600 p-1 rounded-md">
                          <BsSunglasses size={17} className="text-gray" />
                        </div>
                        <div className="bg-green p-1 rounded-md">
                          <BiEdit size={17} className="text-gray" />
                        </div>
                        <div className="bg-red-600 p-1 rounded-md">
                          <MdDelete size={17} className="text-gray" />
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <Pagination articlesPerPage={articlesPerPage} totalArticles={articles.length} paginate={paginate} />
        </div>
      </div>
    </div>
  )
}
