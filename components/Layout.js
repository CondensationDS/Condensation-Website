import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from '../styles/Home.module.css'

export default function Layout({ children }) {
    return (
      <div className={styles.container}>
        <Header /> 
        <Navbar />         
        <div className='flex-none md:flex hidden h-0 md:visible sm:h-full'>
          <Sidebar />
          <div>
            <main className={styles.main}>
              {children}
            </main>
            <Footer />
          </div>
        </div>     
        <div className='flex-none block h-full sm:hidden md:h-0'>                    
            <main className={styles.main}>
              {children}
            </main>
            <Footer />          
        </div>      
      </div>
    )
}