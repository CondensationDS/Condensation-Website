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
      <div className="w-64">
        <ul>
          <li className={`list-none py-0.5 px-6 ${router.pathname == '/discover' ? 'active' : ''}`}>
            <Link href="/discover">
              <a onClick={openSidebar}>What is Condensation?</a>
            </Link>
          </li>
          <li
            className={`list-none py-0.5 px-6 ${router.pathname == '/use-cases' ? 'active' : ''}`}
          >
            <Link href="/use-cases">
              <a onClick={openSidebar}>Discover use cases</a>
            </Link>
          </li>
          <li
            className={`list-none py-0.5 px-6 ${
              router.pathname == '/how-it-works' ? 'active' : ''
            }`}
          >
            <Link href="/how-it-works">
              <a onClick={openSidebar}>How it works?</a>
            </Link>
          </li>
          <li
            className={`list-none py-0.5 px-6 ${router.pathname == '/deep-dive' ? 'active' : ''}`}
          >
            <Link href="/deep-dive">
              <a onClick={openSidebar}>Explore the technology</a>
            </Link>
          </li>
          <li
            className={`list-none py-0.5 px-6 ${
              router.pathname == '/adopt-condensation' ? 'active' : ''
            }`}
          >
            <Link href="/adopt-condensation">
              <a onClick={openSidebar}>Adopt Condensation</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 line my-6 mx-6"></div>

      <div className="w-64">
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
              href={`mailto:${defaults.email}`}
            >
              <span className="flex-grow">Contact us</span>
              <Image src={externalLinkIcon} alt="Link to email" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
