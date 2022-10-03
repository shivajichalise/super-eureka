import {Link} from 'react-router-dom'
import {MdDashboard} from 'react-icons/md'
import {FaUsers, FaSignOutAlt} from 'react-icons/fa'
import {BsFillFileEarmarkPostFill as PostIcon} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {Button} from '../Button/Button'

export const Profile = () => {
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
                <MdDashboard className="mt-1" /> <span> Overview </span>
              </li>

              <li className="flex rounded-md space-x-2 hover:text-white p-2 hover:bg-lightGreen cursor-pointer">
                <PostIcon className="mt-1" />  <span> Articles </span>
              </li>

              <li className="flex rounded-md space-x-2 hover:text-white p-2 hover:bg-lightGreen cursor-pointer">
                <FaUsers className="mt-1" /> <span> Users </span>
              </li>

              <li className="flex rounded-md space-x-2 hover:text-white p-2 hover:bg-lightGreen cursor-pointer">
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

        </div>
      </div>
    </div>
  )
}
