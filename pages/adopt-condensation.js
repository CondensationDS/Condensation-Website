import Layout from '../components/Layout'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'

import Contribution from '../components/Contribution'
import defaults from '../common/defaults'
import SquaredTile from '../components/SquaredTile'

import privacy from '../assets/img/cds-data-privacy.svg'
import integrity from '../assets/img/cds-data-integrity.svg'
import signature from '../assets/img/cds-data-signature.svg'

import distribution from '../assets/img/cds-data-distribution.svg'
import iot from '../assets/img/cds-iot-networks.svg'
import offline from '../assets/img/cds-offline-first.svg'

import streaming from '../assets/img/cds-data-streaming.svg'
import collaboration from '../assets/img/cds-data-collaboration.svg'
import replication from '../assets/img/cds-data-replication.svg'

export default function MakeItHappen() {
  return (
    <div className="page-container max-w-screen-2xl">
      <Title content="Envision your solution" title="Distribution of data is now in your hands." />
      <SubTitle
        content="Success factors"
        title="Condensation will help you build collaborative products protecting privacy and enhancing the economy of trust."
      />
      <div className="text-container px-8 sm:pl-28 text-xl sm:text-2xl mt-16 mb-4">
        <h3 className="text-blue-600 inline-block font-bold">Make data ownership a reality.</h3>
        <div>Build your solution with data control and certification.</div>
      </div>
      <div className="grid grid-cols-1 place-items-center sm:flex sm:flex-wrap sm:place-items-center sm:px-28 pt-5 gap-8">
        <SquaredTile
          title="End-to-end privacy"
          subtitle="to protect secrets and personal data"
          icon={privacy}
          color={'blue'}
        ></SquaredTile>
        <SquaredTile
          title="Digital truth"
          subtitle="to verify the data reliability"
          icon={integrity}
          color={'blue'}
        ></SquaredTile>
        <SquaredTile
          title="Digital signature"
          subtitle="to ensure the data origin"
          icon={signature}
          color={'blue'}
        ></SquaredTile>
      </div>

      <div className="text-container px-8 sm:pl-28 text-xl sm:text-2xl mt-24 mb-8">
        <h3 className="text-purple-600 inline-block font-bold">
          Break centralization constraints.
        </h3>
        <div>
          Distribute data among the interconnected actors and devices forming the network of your
          solution.
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center sm:flex sm:flex-wrap sm:px-28 pt-5 gap-8">
        <SquaredTile
          title="Connect objects"
          subtitle="with security and low consumption"
          icon={iot}
          color={'purple'}
        ></SquaredTile>
        <SquaredTile
          title="Work offline"
          subtitle="for mobility and independence"
          icon={offline}
          color={'purple'}
        ></SquaredTile>
        <SquaredTile
          title="Relocate storage"
          subtitle="for scalability and sovereignty"
          icon={distribution}
          color={'purple'}
        ></SquaredTile>
      </div>

      <div className="text-container px-8 sm:pl-28 text-xl sm:text-2xl mt-24 mb-4">
        <h3 className="text-rose-600 inline-block font-bold">Get ready for data intensiveness.</h3>
        <div>
          Allow your users to collaborate on data without compromising the performance of your
          solution.
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center sm:flex sm:flex-wrap sm:place-items-center sm:px-28 pt-5 gap-8">
        <SquaredTile
          title="Stream"
          subtitle="with efficient upload of data in live"
          icon={streaming}
          color={'rose'}
        ></SquaredTile>
        <SquaredTile
          title="Collaborate"
          subtitle="with simultaneous data editing"
          icon={collaboration}
          color={'rose'}
        ></SquaredTile>
        <SquaredTile
          title="Replicate"
          subtitle="without sharing redundancies"
          icon={replication}
          color={'rose'}
        ></SquaredTile>
      </div>

      <div className="p-8 sm:px-28 text-xl">
        All by design, with flexibility and scalability, to let your project evolve without limits.
      </div>

      <SubTitle
        content="Conception & development"
        title="Interested in adopting data distribution? We offer to guide your team towards this goal
        with the support of experienced engineers and developers."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 px-8 pt-10 sm:px-28 sm:pt-16 sm:pb-10 gap-10 max-w-screen-xl">
        <div className="max-w-lg basis-120">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
          We define your success factors.
          </h3>
          <div className="pt-4 text-base">
          We explore your specific needs on:
          <ul className="py-4 pl-5 sm:px-6 list-disc marker:text-blue-400 text-slate-500">
          <li>Data privacy and reduction of security risks.</li>
          <li>Data certification and trust enhancement.</li>
          <li>Data distribution and scalability.</li>
          <li>Data synchronization and reduction of operating costs.</li>
        </ul>
          </div>
        </div>

        <div className="max-w-lg basis-120">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
          We specify your solution's foundations.
          </h3>
          <div className="pt-4">
          We provide you with: 
          <ul className="py-4 pl-5 sm:px-6 list-disc marker:text-blue-400 text-slate-500">
          <li>Customised architecture and data structure diagrams.</li>
           <li>Guidance on compatible hardware and/or software dependencies for your specific need.</li> 
          <li>Help for deep understanding of your app and budget estimations.</li>
          </ul>
          </div>
        </div>

        <div className="max-w-lg basis-120">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
          We transform an existing solution of yours.
          </h3>
          <div className="pt-4">
          We define a roadmap for your solution:
          <ul className="py-4 pl-5 sm:px-6 list-disc marker:text-blue-400 text-slate-500">
          <li>We identify weaknesses that can be improved with CDS.</li>
          <li>We propose a step-by-step approach to transform your product whith maintaining current operations. </li>
          <li>We define futur increments that can be integrated in the evolution of your product.</li>
        </ul>
          </div>
        </div>

      <div className="max-w-lg basis-120">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
          We develop and maintain your product.
          </h3>
          <div className="pt-4">We are flexible and can adapt easily to your need :</div>
          <div className="pt-4">
            We are able build an agile project with your team and, dynamically adapt to your priorities. 
            For most complex projects we combine CDS expertize with development companies’s workforce 
            in order to make your product grow in the long term. 
            We are partnered with best in class development companies in Switzerland.
          </div>

      </div>
      </div>

      <div className="text-container px-10 sm:px-28 text-2xl sm:text-3xl my-10 sm:mt-20 font-bold text-black">
        <span>Do you have a project in mind?</span>
        <a
          className="mail underline text-blue-500 underline-offset-8 ml-2"
          href={`mailto:${defaults.email}`}
        >
          Contact us
        </a>
      </div>
     

      <Contribution link="https://github.com/CondensationDS/Condensation-Website/blob/main/pages/adopt-condensation.js" />
    </div>
  )
}

MakeItHappen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
