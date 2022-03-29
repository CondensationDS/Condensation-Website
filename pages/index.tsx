import Image from 'next/image'
import Layout from '../components/Layout'
import Button from '../components/Button'

import epfl from '../assets/img/logos/logo-sponsor-epfl.svg'
import trust from '../assets/img/logos/logo-sponsor-trust-valley.svg'
import vaud from '../assets/img/logos/logo-sponsor-spei.svg'

import city from '../assets/img/cds-city-illustration.jpg'
import legal from '../assets/img/cds-legal-illustration.jpg'
import data from '../assets/img/cds-data-illustration.jpg'
import manufacturing from '../assets/img/cds-manufacturing-illustration.jpg'

import privacy from '../assets/img/cds-privacy-thumbnail.png'
import certification from '../assets/img/cds-certification-thumbnail.png'
import distribution from '../assets/img/cds-distribution-thumbnail.png'
import merge from '../assets/img/cds-merge-thumbnail.png'

import defaults from '../common/defaults.js'

export default function Home() {
  return (
    <div className="front-page-main flex flex-col">
      ^
      <div className="p-5 sm:p-20">
        <h1 className="max-w-screen-md text-4xl sm:text-5xl text-black leading-snug">
          Condensation is an open-source technology to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-500">
            build collaborative and robust networks
          </span>{' '}
          using a data ownership approach.
        </h1>
        <div className="flex mt-8 justify-items-end">
          <Button content="Contact us for an introduction" />
        </div>
      </div>
      <div className="p-5 sm:p-20">
        <div className="text-lg text-gray">Proudly sponsored by</div>
        <div className="grid grid-row-1 sm:grid-cols-3 my-4 gap-5 sm:gap-10 sm:content-center max-w-screen-md">
          <div className="sm:mx-auto">
            <a href={defaults.url.trustvalley} target="_blank">
              <Image width={300} height={50} src={trust} alt="Trust Valley logo" />
            </a>
          </div>
          <div className="sm:mx-auto pt-1">
            <a href={defaults.url.epfl} target="_blank">
              <Image width={100} height={30} src={epfl} alt="EPFL logo" />
            </a>
          </div>
          <div className="sm:mx-auto">
            <a href={defaults.url.spei} target="_blank">
              <Image width={100} height={34} src={vaud} alt="Canton de Vaud logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-5 sm:p-20">
        <div className="text-blue-500">Features</div>
        <div className="max-w-screen-sm pb-24 text-black text-3xl font-bold">
          <h2>
            Making people and actors of the market the owner of their data, while connecting them in
            a trustable, scalable and efficient system.
          </h2>
        </div>
        <div className="grid grid-row-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div>
            <Image
              width={60}
              height={60}
              src={privacy}
              alt="Dashed eye representing data privacy."
            />
            <div className="mt-4 mb-2 text-black text-xl font-bold">End-to-end privacy</div>
            <div>
              Trustless to intermediaries as a data owner encrypt information for specific
              receivers.
            </div>
          </div>
          <div>
            <Image
              width={60}
              height={60}
              src={certification}
              alt="Dashed eye representing data privacy."
            />
            <div className="mt-4 mb-2 text-black text-xl font-bold">Certified data</div>
            <div>
              The origin and completeness of the data is tampered and can always be verified.
            </div>
          </div>
          <div>
            <Image
              width={60}
              height={60}
              src={distribution}
              alt="Dashed eye representing data privacy."
            />
            <div className="mt-4 mb-2 text-black text-xl font-bold">Distributed network</div>
            <div>
              Connecting objects, people and organizations while remaining sovereign and
              independent.
            </div>
          </div>
          <div>
            <Image width={60} height={60} src={merge} alt="Dashed eye representing data privacy." />
            <div className="mt-4 mb-2 text-black text-xl font-bold">Performant editing</div>
            <div>Excelling at data synchronization using a dynamic data structure.</div>
          </div>
        </div>
        <div>
          <Button content="Learn more about Condensation" />
        </div>
        <div className="mt-32 text-blue-500">Industry transformation</div>
        <div className="max-w-screen-sm pb-16 text-black text-3xl font-bold">
          <h2>
            We enable the transformation of the industry from centralized data in constrained
            systems to distributed data open for collaboration.
          </h2>
        </div>
        <div className="grid grid-row-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="relative lg:w-56 h-96 bg-black rounded overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src={manufacturing}
              alt="Milling machine being connected to a distributed network."
            />
            <div className="text-white text-2xl absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent leading-snug">
              Connecting machines to our networks
            </div>
          </div>
          <div className="relative lg:w-56 h-96 bg-black rounded overflow-hidden">
            <Image layout="fill" objectFit="cover" src={legal} alt="People signing a contract." />
            <div className="text-white text-2xl absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent leading-snug">
              Certification for compliance and regulatory
            </div>
          </div>
          <div className="relative lg:w-56 h-96 bg-black rounded overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src={city}
              alt="City from night which is exposed to attacks."
            />
            <div className="text-white text-2xl absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent leading-snug">
              Cyber-defence to protect privacy and for security
            </div>
          </div>
          <div className="relative lg:w-56 h-96 bg-black rounded overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src={data}
              alt="Image of the earth representing communities from multiple cities which generate big data."
            />
            <div className="text-white text-2xl absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent leading-snug">
              Processing big data and collaborating
            </div>
          </div>
        </div>
        <div>
          <Button content="Discover our success factors" />
        </div>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
