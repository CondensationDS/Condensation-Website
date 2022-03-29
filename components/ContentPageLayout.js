import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import Sidebar from './Sidebar'

export default function ContentPageLayout({ children }) {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex ...">
        <div className="flex-none">
          <Sidebar />
        </div>
        <div className="block flex-auto">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

//export default ContentPageLayout;
