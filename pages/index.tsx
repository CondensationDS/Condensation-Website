import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import epfl from '../assets/img/logos/logo-sponsor-epfl.svg'
import trust from '../assets/img/logos/logo-sponsor-trust-valley.svg'
import vaud from '../assets/img/logos/logo-sponsor-spei.svg'
import illustration from '../assets/img/cds-illustration.png'

export default function Home() {      
  return (   
    <div className='flex flex-col w-full bg-red'>
      <div className='absolute top-10 right-0 overflow-hidden max-h-[85%]'>
          <Image src={illustration} />  
      </div>      
      <div className='w-full justify-center items-center max-w-[80%]'>
        <p className={`p-10 m-5 ${styles['main-header-title']}`}>Condensation is an <strong>open-source</strong> project disrupting how we create applications to match the challenges of the era of data.</p>
      </div>      
      <div className='flex pl-20'>
        <button type="button"
          className='inline-flex items-center px-6 py-2 text-sm font-medium text-center rounded-full bg-white'>
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 mt-0.5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          </button>
          <button type="button"
          className='inline-flex ml-5 items-center px-6 py-2 text-sm font-medium text-center rounded-full bg-transparent text-white border'>
          Get in touch
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 mt-0.5" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          </button>
      </div>
  
      <div className='md:absolute md:p-20 bottom-0'>
        <p className='text-white'>Sponsored by</p>
        <div className='flex flex-row mt-5'>
          <a className='mr-10'>
            <Image
                className='mr-10'
                src={trust}
                alt="Logo trust valley" />  
          </a>
          <a className='mr-10 pt-2'>
            <Image
              src={epfl}
              alt="Logo epfl" />  
          </a>   
          <a className='mr-10 pt-2'>
            <Image
              src={vaud}
              alt="Logo canton de vaud" />  
          </a>   
        </div>
      </div> 
    </div> 
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>      
      {page}
    </Layout>
  )
}