import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {http} from '../../utils/http'
import {logoutHandler} from '../../utils/auth'
import {isLoggedIn} from '../../utils/auth'
import {FaUserCircle} from 'react-icons/fa'

export const Navbar = () => {

  const [dropdownState, setDropdownState] = useState(false)

  const [user, setUser] = useState(null)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const dropdownToggle = () => {
    setDropdownState(!dropdownState)
  }

  const fetchUser = async () => {
    try {
      const response = await http().get('/api/user')
      const user = response.data
      setUser(user)
    } catch (e) {
      setUser(null)
    }
  }


  useEffect(() => {
    if (isLoggedIn()) {
      fetchUser()
    }
  }, [])

  return (
    <div className="relative container mx-auto p-7">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <h1 className="w-full text-2xl">Super Eureka</h1>
        </div>

        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          <a href="!#" className="hover:text-green">Latest</a>
          <a href="!#" className="hover:text-green">About</a>
          {(user ?
            <div className="relative">
              <button className={(dropdownState ? 'text-green ' : '') + "hover:text-green outline-none focus:outline-none"} onClick={dropdownToggle}>

                <FaUserCircle size={20} />

              </button>
              <div className={(dropdownState ? 'block ' : 'hidden ') + "block lg:absolute bg-white p-2 rounded-md left-0 mt-2"}>
                <ul className="space-y-2 md:w-max">
                  <li>
                    <Link to="/profile" className="flex p-2 hover:bg-gray rounded-md">Profile</Link>
                  </li>
                  <li>
                    <Link to="/" onClick={logoutHandler} className="flex p-2 hover:bg-gray rounded-md">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
            :
            <Link to="/login" className="hover:text-green">Login</Link>
          )}
        </div>

        <Link to="/contact" className="hidden p-2 px-6 text-white bg-green rounded-2xl baseline hover:bg-lightGreen transition ease-in-out duration-200 md:block">Contact</Link>

        {/* Hambuger Icon */}
        <button id="menu-btn" className={(isMenuOpen ? 'open ' : '') + "block hamburger focus:outline-none md:hidden"} onClick={menuHandler}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div id="menu"
          className={(isMenuOpen ? '' : 'hidden ') + "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"}>
          <a href="!#" className="hover:text-green">Latest</a>
          <a href="!#" className="hover:text-green">About</a>
        </div>
      </div>

      {/* Horizontal Dash Line */}
      <div className="my-5">
        <hr />
      </div>
    </div>
  )
}
