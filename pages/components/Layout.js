import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import styles from '../../styles/Home.module.css'

export default function Layout({ children }) {
    return (
      <div className={styles.container}>
        <Header /> 
        <Navbar />      
          <main className={styles.main}>  
            {children}
          </main>
        <Footer />
      </div>
    )
}