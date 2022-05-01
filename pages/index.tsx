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

import company from '../assets/img/buildings-company.svg'
import developer from '../assets/img/developer-code.svg'
import contributor from '../assets/img/contribution-hearth.svg'

import background from '../assets/img/cds-bg-leaf.jpg'

import defaults from '../common/defaults.js'

export default function Home() {
  return (
    <div className="front-page-main flex flex-col">
      <div className="p-8 relative sm:p-28">
        <h1 className="max-w-screen-md text-4xl sm:text-5xl text-white font-bold leading-snug z-20">
          Condensation is an open-source technology to build collaborative and robust networks.
        </h1>
        <div className="flex mt-8 justify-items-end z-20">
          <a
            className="inline-flex items-center py-2 text-center text-white text-xl border-b"
            target="_blank"
            href={`mailto:${defaults.email}`}
          >
            Contact us for a demo
          </a>
        </div>

        <div className="absolute bottom-0 right-0 left-0 top-0 z-10">
          <Image layout="fill" objectFit="cover" src={background} alt="Macro liquid." />
        </div>

        <div className="absolute bottom-0 right-0 left-0 top-0 z-10 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>
      <div className="p-8 sm:px-28">
        <div className="flex my-2 gap-16 content-center max-w-screen-md">
          <a className="flex content-center" href={defaults.url.trustvalley} target="_blank">
            <Image width={300} height={50} src={trust} alt="Trust Valley logo" />
          </a>
          <a className="flex content-center" href={defaults.url.epfl} target="_blank">
            <Image width={100} height={30} src={epfl} alt="EPFL logo" />
          </a>
          <a className="flex content-center" href={defaults.url.spei} target="_blank">
            <Image width={100} height={34} src={vaud} alt="Canton de Vaud logo" />
          </a>
        </div>
      </div>

      <div className="h-px bg-gray-200"></div>

      <div className="p-8 sm:p-28">
        <div className="font-bold text-lg">Features</div>
        <div className="max-w-screen-sm pb-16 text-black text-4xl font-bold">
          <h2>Making individuals and industries the sole owners of their data.</h2>
        </div>
        <div className="grid grid-row-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-16">
            <Image
              width={60}
              height={60}
              src={privacy}
              alt="Dashed eye representing data privacy."
            />
            <div className="mt-4 mb-2 text-black text-xl font-bold">End-to-end privacy</div>
            <div>With end-to-end encryption, there is no need to trust intermediary actors.</div>
          </div>
          <div className="mb-16">
            <Image
              width={60}
              height={60}
              src={certification}
              alt="Dashed eye representing data privacy."
            />
            <div className="mt-4 mb-2 text-black text-xl font-bold">Certified data</div>
            <div>
            The origin and completeness of the data is tracked by design and can be verified at any time.
            </div>
          </div>
          <div className="mb-16">
            <Image
              width={60}
              height={60}
              src={distribution}
              alt="Dashed eye representing data privacy."
            />
            <div className="mt-4 mb-2 text-black text-xl font-bold">Distributed network</div>
            <div>Objects, people and organizations are interconnected but remain self-reliant.</div>
          </div>
          <div className="mb-16">
            <Image width={60} height={60} src={merge} alt="Dashed eye representing data privacy." />
            <div className="mt-4 mb-2 text-black text-xl font-bold">Performant editing</div>
            <div>Data synchronisation is optimized by using efficient dynamic data structures.</div>
          </div>
        </div>
        <div>
          <Button content="Learn more" link="/discover" />
        </div>
      </div>

      <div className="h-px bg-gray-200"></div>

      <div className="p-8 sm:p-28">
        <div className="font-bold text-lg">Industry</div>
        <div className="max-w-screen-sm pb-16 text-black text-4xl font-bold">
          <h2>Moving from data silos to flexible networks by securing data constitutionally.</h2>
        </div>
        <div className="grid grid-row-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="relative h-96 bg-black rounded overflow-hidden">
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
          <div className="relative h-96 bg-black rounded overflow-hidden">
            <Image layout="fill" objectFit="cover" src={legal} alt="People signing a contract." />
            <div className="text-white text-2xl absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent leading-snug">
            Certifying data and complying with regulations
            </div>
          </div>
          <div className="relative h-96 bg-black rounded overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src={city}
              alt="City from night exposed to attacks."
            />
            <div className="text-white text-2xl absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent leading-snug">
              Protecting privacy and populations with cyber-defense
            </div>
          </div>
          <div className="relative h-96 bg-black rounded overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src={data}
              alt="Image of the earth representing communities from multiple cities which generate big data."
            />
            <div className="text-white text-2xl absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent leading-snug">
            Handling big data and fostering digital collaboration
            </div>
          </div>
        </div>
        <div>
          <Button content="Discover use-cases" link="/use-cases" />
        </div>
      </div>

      <div className="h-px bg-gray-200"></div>

      <div className="p-8 sm:p-28">
        <div className="font-bold text-lg">Get started</div>
        <h2 className="max-w-screen-sm pb-16 text-black text-4xl font-bold">
        Condensation is building its community and is now available in early access.
        </h2>
        <div className="flex flex-wrap gap-8">
          <div className="basis-72 border p-8 shrink-0">
            <Image
              height={40}
              width={40}
              src={company}
              alt="City from night which is exposed to attacks."
            />
            <div className="my-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 font-bold">
              What about adopting data distribution in your company?{' '}
            </div>
            <div className="text-2xl text-black font-bold">
              <a
                className="underline underline-offset-4"
                target="_blank"
                href={`mailto:${defaults.email}`}
              >
                Contact us
              </a>{' '}
              to join forces and meet your goal.
            </div>
          </div>

          <div className="basis-72 border p-8 shrink-0">
            <Image
              height={40}
              width={40}
              src={contributor}
              alt="City from night which is exposed to attacks."
            />
            <div className="my-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 font-bold">
              Interested in contributing to CDS's success?{' '}
            </div>
            <div className="text-2xl text-black font-bold">
              <a
                className="underline underline-offset-4"
                target="_blank"
                href={defaults.url.discord}
              >
                Join our discord
              </a>{' '}
              to get things done together.
            </div>
          </div>

          <div className="basis-72 border p-8 shrink-0 align-left">
            <Image
              height={40}
              width={40}
              src={developer}
              alt="City from night which is exposed to attacks."
            />
            <div className="my-4 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 font-bold">
            What if you built an app with CDS?{' '}
            </div>
            <span className="text-2xl text-black font-bold">
              <a
                className="underline underline-offset-4"
                target={'_blank'}
                href={defaults.url.github}
              >
                Star our main repo
              </a>{' '}
              for the documented release.
            </span>
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-200"></div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
