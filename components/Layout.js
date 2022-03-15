import Header from './Header'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="shrink-0">
        <Header />
        <Navbar />
      </div>

      <div className="flex page-structure">
        <Sidebar />
        <main className="w-full scroll-smooth overflow-scroll">
          {children}
          <Footer></Footer>
        </main>
      </div>
    </div>
  )
}
