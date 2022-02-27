import Image from 'next/image'
import Layout from '../components/Layout'
import Button from '../components/Button'
import epfl from '../assets/img/logos/logo-sponsor-epfl.svg'
import trust from '../assets/img/logos/logo-sponsor-trust-valley.svg'
import vaud from '../assets/img/logos/logo-sponsor-spei.svg'
import illustration from '../assets/img/cds-illustration.png'
import defaults from '../common/defaults.js'


export default function Home() {
  return (
      <div className="front-page-main pl-24 flex flex-col">
        <div>
          <h1 className="text-3xl text-white pt-32 leading-snug">Condensation is an <strong>open-source</strong> project disrupting how we create applications to match the challenges of the era of data.</h1>
          <div className='flex mt-12'>
            <Button content="Discover Condensation" />
            <div className='w-6'></div>
            <Button content="Get in touch"/>
          </div>
        </div>
        <div className='flex-1'></div>
        <p className='text-white mt-12'>Sponsored by</p>
        <div className='flex flex-row mt-4 pb-12 items-center'>
          <a className='mr-10' href={defaults.url.trustvalley} target="_blank">
            <Image
              width={210}
              height={30}
              src={trust}
              alt="Trust Valley logo" />
          </a>
          <a className='mr-10' href={defaults.url.epfl} target="_blank">
            <Image
              width={72}
              height={20}
              src={epfl}
              alt="EPFL logo" />
          </a>
          <a href={defaults.url.spei} target="_blank"> 
            <Image
              width={72}
              height={24}
              src={vaud}
              alt="Canton de Vaud logo" />
          </a>
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