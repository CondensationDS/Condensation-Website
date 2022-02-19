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
        <div className='flex invisible h-0 md:invisible sm:invisible sm:h-0 lg:visible'>
          <Sidebar />
          <div>
            <main className={styles.main}>
              {children}
            </main>
            <Footer />
          </div>
        </div>   
        <div className='flex-col sm:visible md:visible lg:invisible'>                    
            <main className={styles.main}>
              {children}
            </main>
            <Footer />          
        </div>      
      </div>
    )
}