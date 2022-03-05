import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/img/logos/logo-condensation-data-system.svg'
import { CDSContext } from '../common/context/CDSContext'
import Burger from '../assets/img/burger.svg'

const Navbar = () => {
  const { openSidebar } = useContext(CDSContext)
  return (
    <div>
      <nav className="bg-white border-b border-gray-200 py-3">
        <div className="flex flex-nowrap items-center">
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={openSidebar}
          >
            <span className="sr-only">Open main menu</span>
            <Image src={Burger} alt="Burger icon" />
          </button>
          <Link href="/">
            <a href="/" className="flex w-96 px-6">
              <Image src={Logo} alt="Condensation logo" />
            </a>
          </Link>
          <div className="flex-grow h-7 bg-red"></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
