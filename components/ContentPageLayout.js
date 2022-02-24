import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from '../styles/ContentPage.module.css'

export default function ContentPageLayout({ children }) {
    return (
        <div className={styles.container}>
        <Header />
        <Navbar />
        <div class="flex ...">
            <div className='flex-none'>
                <Sidebar />
            </div>
            <div className='block flex-auto'>
            <main>
                {children}
            </main>
            <Footer />
            </div>
        </div>
      </div>

    )}

    //export default ContentPageLayout;