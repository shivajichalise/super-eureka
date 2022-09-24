import {useState} from 'react'
import {Button} from '../Button/Button'
import './Navbar.css'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <h1 className="w-full text-2xl">Super Eureka</h1>
        </div>

        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          <a href="#" className="hover:text-green">Latest</a>
          <a href="#" className="hover:text-green">About</a>
        </div>

        <Button value="Contact" link="#" />

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
          <a href="#" className="hover:text-green">Latest</a>
          <a href="#" className="hover:text-green">About</a>
        </div>
      </div>

      {/* Horizontal Dash Line */}
      <div className="my-5">
        <hr />
      </div>
    </div>
  )
}
