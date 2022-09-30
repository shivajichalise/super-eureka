import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../Button/Button'
import './Navbar.css'
import {http} from '../../utils/http'

export const Navbar = () => {

  const [user, setUser] = useState(null)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const logoutHandler = async () => {
    await http().post('/api/logout').then(response => {
      if (response.data.error) {
        console.log(response.data.error)
      } else {
        // const {user} = response.data
        window.location.replace('/')
      }
    })
  }

  const fetchUser = async () => {
    try {
      const response = await http().get('/api/user')
      const user = response.data
      setUser(user)
    } catch (e) {
      setUser(null)
      console.log('User not logged in')
    }
  }

  useEffect(() => {
    fetchUser()
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
            <Link to="/" onClick={logoutHandler} className="hover:text-green">Logout</Link>
            :
            <a href="/login" className="hover:text-green">Login</a>
          )}
        </div>

        <Button value="Contact" link="#" roundness="2xl" height="2" hidden={true} />

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
