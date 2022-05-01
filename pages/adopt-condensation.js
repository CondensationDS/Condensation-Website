import Layout from '../components/Layout'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
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
        <div>
          Build your solution with data control and certification.
        </div>
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
        Distribute data among the interconnected actors and devices forming the network of your solution.
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
        <h3 className="text-rose-600 inline-block font-bold">
          Get ready for data intensiveness.
        </h3>
        <div>
          Allow your users to collaborate on data without compromising the performance of your solution.
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

      <div className="text-container px-8 sm:pl-28 text-2xl sm:text-3xl mt-24 mb-32 font-bold text-black">
        All by design, with flexibility and scalability, to let your project evolve without
        limits.
      </div>

      <SubTitle
        content="Conception"
        title="We can help you to analyse how CDS can advantage your use-case and to define the requirements for building your solution."
      />
      <div className="p-8 sm:px-28 text-lg text-container">
        Are you interested in adopting data distribution? We propose to guide you in the analysis of
        your use-case with the support of engineers and experienced developers.
      </div>

      <SubSubTitle content="Defining your success factors." />
      <div className="p-8 sm:px-28 text-lg text-container">
        We analyze with you how managing data with a distributed technology can positively impact
        your activities and align with the strategic vision of your organization. The solutions you
        can develop with CDS are focused on the following :
        <ul className="py-4 pl-5 sm:px-6 list-disc marker:text-blue-400 text-slate-500">
          <li>Data privacy to reduce security risks,</li>
          <li>Data certification to enhance trust,</li>
          <li>Data distribution to scale without limits,</li>
          <li>Efficient data updates to reduce operating costs.</li>
        </ul>
        Learn more about what you can do with CDS by reading our case-studies section.
      </div>

      <SubSubTitle content="Specifying your solution's foundations."></SubSubTitle>
      <div className="p-8 sm:px-28 text-lg text-container">
        We conceptualize your decentralized solution by drawing an architecture diagram and
        structure of your data in the right schema. In addition, we can advise you on the compatible
        choices of hardware and/or dependencies to ensure the efficiency and security of your
        solution. It will give you a clear understanding of how to build your solution and to
        estimate its budget.
      </div>

      <SubSubTitle content="Planning the transformation of your existing solution."></SubSubTitle>
      <div className="p-8 sm:px-28 sm:mb-20 text-lg text-container">
        We identify the shortfalls of your existing solution to map which element can get the
        benefits the most from CDS enablements. Through a roadmap we propose a step-by-step approach
        to transform your product while ensuring your running operations. We define increments with
        pragmatic solutions which can be merged with your product.
      </div>

      <SubTitle
        content="Development"
        title="We can stand as technical experts to support your software developement."
      />

      <SubSubTitle content="Demonstrate your product feasibility"></SubSubTitle>
      <div className="p-8 sm:px-28 text-lg text-container">
        If entering into the decentralization movement is something new for your organization, we
        can build a minimal project in a few weeks to demonstrate the technical feasibility of your
        target solution. Please, find examples in the proof-of-concept section. Moreover, we can
        provide documentation on request to train your developers on how to build the proof of
        concept by themselves by using our open-source technology for free.
      </div>

      <SubSubTitle content="Develop and maintain your product"></SubSubTitle>
      <div className="p-8 sm:px-28 sm:mb-32 text-lg text-container">
        We can build an agile project with you to dynamically adapt to your priorities and the
        opportunities you want to take advantage of. For most complex projects we combine CDS
        expertizes with development companies’s workforce in order to make your product grow in the
        long term. We are partnered with best in class development companies in Switzerland.
      </div>

      <SubTitle
        content="Initiation"
        title="You believe in the project, but your organization is not there yet? We can work together to raise awareness."
      />
      <div className="p-8 sm:px-28 text-lg text-container">
        We think that meeting people is the best way to enhance innovation and create a community
        around a growing technology. Thus, we propose to animate a keynote introductory event to
        talk in your organization. This talk is followed by an opportunity to join one of our coding
        challenge to support the concretization of personal ideas.
      </div>

      <SubSubTitle content="Talking about tech"></SubSubTitle>
      <div className="p-8 sm:px-28 text-lg text-container">
        We offer to give a keynote presentation in your organisation to raise awareness concerning
        the benefits of data decentralization. We will explain the drivers of distributed systems
        adoption, demystify key cryptographic concepts such as Blockchain structures, and finally
        describe the new capabilities it offers to build a product and to manage an IT
        infrastructure.
      </div>
      <div className="p-8 sm:px-28 text-lg text-container">
        This presentation is built with examples related to your activities and is followed by a Q&A
        session to elaborate on topics of particular interest to you. At the end of this talk
        attendees will be able to imagine potential applications in their field.{' '}
      </div>

      <SubSubTitle content="Coding challenge"></SubSubTitle>
      <div className="p-8 sm:px-28 text-lg text-container">
        We propose to guide developers into the world of cryptography and distributed
        infrastructures. We offer a creative and challenging tutorial to tackle Blockchain
        technology and help you discover use cases relevant to your own topics. Sessions are built
        around explaining concepts and applying them to a technical playground.
      </div>
      <div className="p-8 sm:px-28 text-lg text-container">
        This coding challenge can be prepared for different modules for IoT, mobile application or
        web development. Thus, we offer the opportunity to put in practice a new programming
        approach to build distibuted solutions.
      </div>

      <div className="h-px bg-gray-200 mt-28"></div>

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
