import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import defaults from '../common/defaults'
import externalLinkIcon from '../assets/img/external-link.svg'
import { CDSContext } from '../common/context/CDSContext'

export default function Sidebar() {
  const router = useRouter()
  const { showSidebar, openSidebar } = useContext(CDSContext)

  return (
    <div
      className={`sidebar fixed h-full py-6 lg:relative lg:translate-x-0 z-40 ease-in-out duration-200 ${
        showSidebar ? 'translate-x-0' : '-translate-x-full md:bg-white'
      }`}
    >
      <div className="sidebar w-64">
        <ul>
          <li className={`list-none py-0.5 px-6 ${router.pathname == '/discover' ? 'active' : ''}`}>
            <Link href="/discover">
              <a onClick={openSidebar}>What is Condensation?</a>
            </Link>
          </li>
          <li
            className={`list-none py-0.5 px-6 ${
              router.pathname == '/case-studies' ? 'active' : ''
            }`}
          >
            <Link href="/case-studies">
              <a onClick={openSidebar}>Discover use cases</a>
            </Link>
          </li>
          <li
            className={`list-none py-0.5 px-6 ${router.pathname == '/get-started' ? 'active' : ''}`}
          >
            <Link href="/get-started">
              <a onClick={openSidebar}>Explore the technology</a>
            </Link>
          </li>
          <li className={`list-none py-0.5 px-6 ${router.pathname == '/about-us' ? 'active' : ''}`}>
            <Link href="/about-us">
              <a onClick={openSidebar}>Meet the team</a>
            </Link>
          </li>
          <li
            className={`list-none py-0.5 px-6 ${
              router.pathname == '/your-solution' ? 'active' : ''
            }`}
          >
            <Link href="/your-solution">
              <a onClick={openSidebar}>Envision your solution</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 line my-6 mx-6"></div>

      <div className="external-links w-64">
        <ul>
          <li className="list-none py-0.5 px-6">
            <a
              className="flex justify-between items-center"
              target={'_blank'}
              href={defaults.url.github}
            >
              <span className="flex-grow">Visit our GitHub</span>
              <Image src={externalLinkIcon} alt="Link github" />
            </a>
          </li>
          <li className="list-none py-0.5 px-6">
            <a
              className="flex justify-between items-center"
              target="_blank"
              href={defaults.url.discord}
            >
              <span className="flex-grow">Join our Discord</span>
              <Image src={externalLinkIcon} alt="Link Discord" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
