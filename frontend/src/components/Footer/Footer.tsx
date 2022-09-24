import {AiFillFacebook, AiFillTwitterSquare, AiFillInstagram} from 'react-icons/ai'

export const Footer = () => {
  return (
    <div className="bg-green">
      <div className="container flex flex-row-reverse justify-between items-center px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">

        {/* Logo */}
        <div className="flex flex-col">
          <h1 className="text-regular text-gray italic text-4xl">Super Eureka</h1>
          <p className="text-gray text-base">{new Date().getFullYear()} &copy; All rights reserved.</p>
        </div>

        {/* Socials */}
        <div className="flex justify-center space-x-4 text-gray">
          <AiFillFacebook size={25} className="hover:text-lightGreen" />
          <AiFillTwitterSquare size={25} className="hover:text-lightGreen" />
          <AiFillInstagram size={25} className="hover:text-lightGreen" />
        </div>
      </div>
    </div>
  )
}
