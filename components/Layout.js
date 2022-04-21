import Header from './Header'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Layout({ children }) {
  const { pathname } = useRouter()
  useEffect(() => {
    var mainDiv = document.getElementById('main')
    mainDiv.scrollTop = 0
  }, [pathname])
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="shrink-0">
        <Header />
        <Navbar />
      </div>
      <div className="flex page-structure">
        <Sidebar />
        <main id="main" className="w-full scroll-smooth overflow-scroll">
          {children}
          <Footer></Footer>
        </main>
      </div>
    </div>
  )
}
