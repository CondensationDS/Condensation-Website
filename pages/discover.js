import Layout from '../components/Layout'
import Image from 'next/image'

import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
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
    <div className="page-container max-w-screen-2xl">
      <Title content="What is Condensation?" title="A system made for data trust and ownership." />
      <SubTitle
        content="Overview"
        title="Condensation meets the security and technical requirements to start distributing sensitive data in an industrial context."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 px-8 pt-10 sm:px-28 sm:pt-16 sm:pb-10 gap-10 max-w-screen-xl">
        <div className="max-w-lg basis-120">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
            A lightweight and open-source code base.
          </h3>
          <div className="pt-4 text-base">
          Condensation can be used for commercial purpose without any fees. 
          It is organized in three lightweight modules that can be easily audited. 
          Moreover, its implementation can be customized for specific needs, such as preferred 
          encryption algorithms or pre-defined conflict resolution rules.
          </div>
        </div>

        <div className="max-w-lg basis-120">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
            Generic enough to build tailored solutions.
          </h3>
          <div className="pt-4">
          Condensation is a data-system, i.e able to manage a complete data lifecycle. 
          It excels particularly at data synchronization in a distributed set-up. 
          Its main advantages are a single protocol to connect multiple devices, 
          constitutional data security from end to end, and data stores free from centralization constraints.
          </div>
        </div>

        <div className="max-w-lg basis-120">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
            Secured with market proven algorithms.
          </h3>
          <div className="pt-4">
          Condensation implementation is self-reliant from software dependencies. 
          It uses cryptographic primitives based on open-source projects continuously challenged by cyber-security communities. 
          The choice of algorithms ensures run time performances that fits common digital devices, IoTs, and high speed apps. 
          </div>
        </div>

        <div className="max-w-lg basis-120">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
            Compliant with regulations.
          </h3>
          <div className="pt-4">
          Condensation is compliant with GDPR and other privacy regulations (contact us for more information). 
          More importantly, data ownership and data storage are clearly defined and managed through the implementation of CDS. 
          This particularity puts the "data sensitivity" at the core of the technology, 
          and no longer delegated to complex internal measures.
          </div>
        </div>
      </div>

      <SubTitle
        content="Guiding principles"
        title="Condensation makes flexible market-ready solutions with the guarantee of data ownership."
      />

      <div className="grid grid-row-1 lg:grid-cols-3 px-8 sm:px-28 pt-10 pb-10 gap-16 max-w-screen-xl">
        <div className="rounded-lg py-5">
          <div className="w-full mb-3">
            <Image
              width={90}
              height={120}
              objectFit="contain"
              src={devices}
              alt="Connected devices"
            ></Image>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-black">
            Managing the data where it is created.
          </h3>
          <div className="pt-4">
          CDS avoids the use of centralized infrastructures by computing data directly where it is created, 
          thus reducing risks and cost du to data transport. 
          To do so, CDS is able to select the specific piece of data to share with indexing servers, limiting it, 
          for example, to data intended to produce analyses or commercial services.
          </div>
        </div>
        <div className="rounded-lg py-5">
          <div className="w-full mb-3">
            <Image
              width={90}
              height={120}
              objectFit="contain"
              src={message}
              alt="Secured message"
            ></Image>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-black">
            Protecting the data itself from end-to-end.
          </h3>
          <div className="pt-4">
          The CDS protects the privacy of individuals and companies by design. 
          When data is shared, CDS ensures that only the recipient can decrypt and read it on their device. 
          Furthermore, before being sent, the data is structured in an object that cannot be changed without leaving a trace. 
          Thus, the sender's data is secure and completely trustworthy for the recipient.
          </div>
        </div>
        <div className="rounded-lg py-5">
          <div className="w-full mb-3">
            <Image
              width={90}
              height={120}
              objectFit="contain"
              src={store}
              alt="Secured database"
            ></Image>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-black">
            Storing data anywhere without constraints.
          </h3>
          <div className="pt-4">
            Each account can decide where to store its data - for example on a server at home, or
            in a cloud service located in their country. Because the data remains encrypted at all
            times, the storage security is no longer an issue.
          </div>
        </div>
      </div>

      <SubTitle
        content="Who benefits from CDS?"
        title="CDS makes possible to build collaborative networks connecting people, companies and devices without the need to trust intermediaries."
      />

      <div className="grid grid-rows-1 sm:flex mt-20 mx-8 sm:mx-28">
        <div className="hidden sm:block w-20 h-20 sm:w-60 sm:h-60">
          <Image
            width="240px"
            height="240px"
            objectFit="contain"
            src={users}
            alt="End user of applications"
          ></Image>
        </div>
        <div className="sm:ml-20">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            People and companies in general
          </h3>
          <div className="max-w-xl">
            CDS started with a statement - individuals and companies should remain the sole owners of their data. 
            This concept of data ownership is made possible by the following capabilities:
            <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
              <li>Protecting my data in order to ensure my privacy.</li>
              <li>To trust the data I receive, and to make sure that it has not been manipulated.</li>
              <li>Control where my data is stored.</li>
              <li>Collaborate on data without intermediaries.</li>
            </ul>
            CDS ensures data ownership while being able to interact efficiently with others.
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 sm:flex mt-20 mx-8 sm:mx-28">
        <div className="hidden sm:block w-20 h-20 sm:w-60 sm:h-60">
          <Image
            width="240px"
            height="240px"
            objectFit="contain"
            src={sysadmin}
            alt="System administator"
          ></Image>
        </div>
        <div className="sm:ml-20">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            System administrators and IT/Infra managers
          </h3>
          <div className="max-w-xl">
          CDS secures data by design. It protects infrastructures from compromising data with the following features:
            <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
              <li>The data is managed with remaning encrypted.</li>
              <li>The data is processed where the data is stored.</li>
              <li>The infrastructure can be scaled horizontally without limitations.</li>
              <li>The data is replicated and back-ups are created efficiently.</li>
            </ul>
            CDS provides a system to manage data that limits risks coming from infrastructure.
          </div>
        </div>
      </div>

      <div className="grid grid-rows-1 sm:flex mt-20 mx-8 sm:mx-28">
        <div className="hidden sm:block w-20 h-20 sm:w-60 sm:h-60">
          <Image
            width="240px"
            height="240px"
            objectFit="contain"
            src={devs}
            alt="Distributed application developers"
          ></Image>
        </div>
        <div className="sm:ml-20">
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            Developers building applications
          </h3>
          <div className="max-w-xl">
          CDS simplifies the development of distributed applications. 
          It comes with a flexible and easy-to-use document management interface for developers. 
          The core algorithm provides them with the following capabilities :
            <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
              <li>Building encrypted apps without prior cryptography knowledge.</li>
              <li>Creating apps that can certify and secure the data.</li>
              <li>Migrating apps from centralizated to distributed architecture.</li>
              <li>Connecting multiple devices or services using a single protocol.</li>
            </ul>
            CDS is a compact and elegant solution for managing data securely in its entire lifecycle.
          </div>
        </div>
      </div>

      <div className="ml-8 mt-12 sm:ml-28 sm:mt-40 mb-12">
        <NextPage descripton={'Discover use cases'} link={'/use-cases'}></NextPage>
      </div>

      <Contribution link="https://github.com/CondensationDS/Condensation-Website/blob/main/pages/discover.js" />
    </div>
  )
}

Discover.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
