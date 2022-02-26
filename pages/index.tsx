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
    <div className="front-page-main pl-24">
      <div>
        <h1 className="text-3xl text-white">Condensation is an <strong>open-source</strong> project disrupting how we create applications to match the challenges of the era of data.</h1>
        <div className='flex mt-12'>
          <Button content="Discover Condensation" />
          <div className='w-6'></div>
          <Button content="Get in touch"/>
        </div>
      </div>
      <div className='grow'></div>
      <p className='text-white'>Sponsored by</p>
      <div className='flex flex-row mt-3 pb-20 items-center'>
        <a className='mr-12' href={defaults.url.trustvalley}>
          <Image
            src={trust}
            alt="Trust Valley logo" />
        </a>
        <a className='mr-12' href={defaults.url.epfl}>
          <Image
            src={epfl}
            alt="EPFL logo" />
        </a>
        <a href={defaults.url.spei}>
          <Image
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