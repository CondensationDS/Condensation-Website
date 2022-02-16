import type { NextPage } from 'next'
import Link from 'next/link'
import Header from './components/Header'
import Navbar from './components/Navbar'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer'

const Home: NextPage = () => {
  return (    
    <div className={styles.container}>   
      <Header></Header>     
      <Navbar></Navbar>       
      <main className={styles.main}>  
        <Link href="/condensation">
          <a>About Us</a>
        </Link>                  
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Home
