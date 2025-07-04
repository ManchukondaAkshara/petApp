import React, { useState } from "react"
import {
  useUser,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react"
import { TicketPlus } from "lucide-react"
import { Navigate, useNavigate } from "react-router-dom"

const Navbar = () => {
  const { user } = useUser()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const navigate = useNavigate()
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            PetSite
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto transition-all duration-300`}
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 p-4 md:p-0 rounded-lg md:rounded-none">
            {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-700 dark:text-white rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:text-blue-700 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Auth button */}
            <li>
              {!user ? (
                <SignInButton>
                  <span className="block py-2 px-3 text-gray-700 dark:text-white rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 md:hover:text-blue-700 transition-colors duration-200 cursor-pointer">
                    Login
                  </span>
                </SignInButton>
              ) : (
                <div className="flex items-center gap-2">
                  <UserButton>
                    <UserButton.MenuItems>
                      <UserButton.Action label = "My Orders" labelIcon = {<TicketPlus width = {15}/>} onClick={() => navigate('/my-bookings')}/>
                    </UserButton.MenuItems>
                  </UserButton>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
