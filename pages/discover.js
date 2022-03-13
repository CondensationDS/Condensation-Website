import Layout from '../components/Layout'
import Image from 'next/image'

import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
import NextPage from '../components/NextPage'
import Contribution from '../components/Contribution'

import devices from '../assets/img/cds-client-first.svg'
import message from '../assets/img/cds-secured-document.svg'
import store from '../assets/img/cds-secured-storage.svg'

import users from '../assets/img/illustration-data-owner.png'
import sysadmin from '../assets/img/illustration-system-admin.png'
import devs from '../assets/img/illustration-developers.png'

export default function Discover() {
  return (
    <div className="page-container">

      <Title 
        content="What is Condensation?" 
        title="A system made for data trust and ownership."
      />

      <SubTitle 
        content="Overview"
        title="CDS is an industry oriented technology to adopt data distribution and cybersecurity without doubts on being the first mover."
      />

      <div className="flex flex-wrap px-24 pt-16 pb-24 gap-20">

        <div className="max-w-md basis-120">

          <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500'>
            A lightweight and open-source code base.  
          </h3>
          <div className='pt-4'>
            You can use Condensation for commercial purpose for free,
            it is organised in lightweight modules which can be audited by a single person. 
            Moreover, it can be customized with new implementations for specific purposes such as preferred encryption methods or pre-defined conflict resolution rules.
          </div>

        </div>

        <div className="max-w-md basis-120">

          <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500'>Generic to build tailored solutions.</h3>
            <div className='pt-4'>
              You can manage the complete lifecycle of data with Condensation, that’s why it is called a data-system. 
              It excels with synchronization performances in a fully distributed setup, provides a single protocol to connect multiple devices with end-to-end data security,
              and stores data without centralization constraints.
            </div>

        </div>

          <div className="max-w-md basis-120">

            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500'>Secured with market proven algorithms.</h3>
            <div className='pt-4'>
              The implementation is independent from dependencies and use basic cryptographic primitives extracted from challenged open-source projects. 
              Moreover, the choice of the algorithms fits to nowadays device capabilities to ensure run time performances that fits to connected objects, or high speed execution of apps.
            </div>

          </div>

          <div className="max-w-md basis-120">

            <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500'>Compliant with regulations.</h3>
            <div className='pt-4'>
              Condensation fits to GDPR and other data privacy and protection regulations. 
              Besides the inherent security and the capacity to certify data, it makes a clear statement on who is responsible of the data and where it stored. 
              Thus, data protection and ownership is part of the technology and not of complex mitigations.
            </div>

          </div>

      </div>


      <SubTitle 
        content="Guiding principles"
        title="Condensation put backs the control of data in the hands of its owner while giving the flexibility to build a market ready solution."
        />

      <div className="flex flex-nowrap px-24 pt-8 pb-20 gap-20">

        <div className="flex-1 rounded-lg py-12">

          <div className="h-20 w-24 mb-6 flex align-center">
            <Image width="100%" height="100%" objectFit="contain" src={devices} alt="Connected devices"></Image>
          </div>
          <h3 className='text-2xl font-bold text-black'>Managing the data where it is created.</h3>
          <div className='pt-4'>
            CDS avoids moving data to centralized infrastructures by computing it directly where it is created, reducing this way the data transmission efforts. CDS can select the piece of data to share with indexing servers, limiting it, for example, to data intended to produce analyses or commercial services.
          </div>

        </div>


        <div className="flex-1 rounded-lg py-12">
          <div className="h-20 w-24 mb-6 flex align-center">
            <Image width="100%" height="100%" objectFit="contain" src={message} alt="Secured message"></Image>
          </div>
          <h3 className='text-2xl font-bold text-black'>Protecting the data itself from end-to-end.</h3>
          <div className='pt-4'>
            CDS secures individuals and companies privacy by design. When data is shared, CDS ensures that only the recipient can decrypt and read it on their device. Moreover, before being sent, the data is structured in an object that cannot be modified without leaving a trace. Thus, the emitter’s data is secured and is totally trustworthy for the recipient.
          </div>

        </div>

        <div className="flex-1 rounded-lg py-12">

          <div className="h-20 w-20 mb-6 flex align-center">
            <Image width="100%" height="100%" objectFit="contain" src={store} alt="Secured database"></Image>
          </div>

          <h3 className='text-2xl font-bold text-black'>Storing data anywhere without constraints.</h3>
          <div className='pt-4'>
            Each account could decide where to store its data - for example on a server at home, or in a cloud service located in their country. Because the data remains encrypted at all times, the storage security is no longer an issue. 
          </div>

        </div>

      </div>

      <SubTitle 
        content="Who benefit from CDS?"
        title="CDS creates a collaborative network connecting people, companies and objects without trusting intermediaries."
      />

      <div className='flex mt-20 ml-24'>
        <div className="w-60 h-60">
          <Image width="240px" height="240px" objectFit="contain" src={users} alt="End user of applications"></Image>
        </div>
        <div className='ml-12'>
          <h3 className='text-2xl font-bold text-black mb-4'>People and companies using applications</h3>
          <div className='max-w-xl'>
            CDS started with a statement - the data concerning people should remain in their ownership.
            And this concept of data ownership is realized with the following capabilities :
            <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
              <li>I can protect my data in order to ensure my privacy is respected.</li>
              <li>I can trust the data I receive has not been manipulated.</li>
              <li>I can control where my data is stored.</li>
              <li>I can collaborate on data without intermediaries.</li>
            </ul>
            It gives real ownership of data while being able to interact with others efficiently.
          </div>
        </div>
      </div>

      <div className='flex mt-20 ml-24'>
        <div className="w-60 h-60">
          <Image width="240px" height="240px" objectFit="contain" src={sysadmin} alt="System administator"></Image>
        </div>
        <div className='ml-12'>
          <h3 className='text-2xl font-bold text-black mb-4'>System administrators mainting IT infrastructures</h3>
          <div className='max-w-xl'>
            CDS is protects the data itself and so the person managing the infrastructure where the data
            flow and where the data is stored don’t have risks to compromise the data with the following :
            <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
              <li>I can manage data without having access to private information.</li>
              <li>I know exactly where the data is stored.</li>
              <li>I can scale my infrastructure horizontally without limitations.</li>
              <li>I can replicate data efficiently.</li>
            </ul>
            It creates a system where there is no need to trust the IT infrastructure.
          </div>
        </div>
      </div>

      <div className='flex mt-20 ml-24'>
        <div className="w-60 h-60">
          <Image width="240px" height="240px" objectFit="contain" src={devs} alt="Distributed application developers"></Image>
        </div>
        <div className='ml-12'>
          <h3 className='text-2xl font-bold text-black mb-4'>Developers building applications.</h3>
          <div className='max-w-xl'>
            CDS simplifies the development of distributed applications. It provides an interface in the
            form of a document which is known as a flexible data structuring tool. The core algorithm
            automatically manage the encrytion and efficient synchronisation of data and give to the
            developer the following benefits :
            <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
              <li>I can build an app with end-to-end encryption without knowing about cryptography.</li>
              <li>I can create trusted systems where the data can be certified and verified.</li>
              <li>
                I have the flexibility to start from a centralized solution to go toward distribution.
              </li>
              <li>I can connect multiple devices or services using a single protocol.</li>
            </ul>
            Its a one stop solution to manage data securely from the creation to the storage.
          </div>
        </div>
      </div>

      <div className="ml-20 mt-40 mb-12">
        <NextPage descripton={'Case studies'} link={'/case-studies'}></NextPage>
      </div>

      <Contribution></Contribution>
    </div>
  )
}

Discover.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
