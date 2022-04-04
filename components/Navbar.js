import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/img/logos/logo-condensation-data-system.svg'
import { CDSContext } from '../common/context/CDSContext'
import Burger from '../assets/img/burger.svg'

import defaults from '../common/defaults.js'

const Navbar = () => {
  const { openSidebar } = useContext(CDSContext)
  return (
    <div>
      <nav className="border-b border-gray-200 py-3">
        <div className="flex flex-nowrap items-left">
          <div className="h-7 bg-red"></div>
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
          <div className="flex-grow"></div>
          <a
            className="hidden lg:flex mr-4 h-8 items-center bg-gradient-to-br from-sky-500 to-blue-500 px-6 text-white rounded-full font-bold"
            target="_blank"
            href={`mailto:${defaults.email}`}
          >
            Contact us for a demo
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
