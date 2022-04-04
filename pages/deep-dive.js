import Layout from '../components/Layout'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
import NextPage from '../components/NextPage'
import Contribution from '../components/Contribution'
import Card from '../components/Card'
import defaults from '../common/defaults'

export default function DevelopWithCDS() {
  return (
    <div className="page-container max-w-screen-2xl">
      <Title content="Technical deep-dive" title="Bridging mutability and immutability." />

      <SubTitle
        content="Concepts"
        title="CDS combine cryptographic primitives and mathematical models to achieve data distribution with conflict-free merge, and end-to-end encryption."
      />

      <div className="p-8 sm:px-28 mt-10 mb-10 sm:mt-20 sm:mb-32 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
        <ul>
          <li>SHA-256 hash encryption</li>
          <li>AES-256 symmetrical encryption</li>
          <li>RSA-2048 asymetrical encryption</li>
          <li>Merkle tree blockchain</li>
          <li>Join-semilattice data merge</li>
        </ul>
      </div>

      <SubTitle
        content="Source code"
        title="To better understand the implementation, you can review the specifications and the source code in early access."
      />

      <div className="p-8 sm:px-28 text-xl mt-8 text-container">
        The Condensation library is the fruit of one mind and reached maturity after a long research
        period. Many samples of code, notes and documentation were created and we transparently work
        on simplifying and completing the different ressources.
      </div>

      <SubSubTitle content="Read the low level implementation specifications."></SubSubTitle>
      <div className="p-8 sm:px-28 text-lg text-container">
        The specifications can be found on <a className="text-blue-500">docs.condensation.io</a>.
        Low level description is well described and we welcome feedback to complete the
        documentation.
      </div>

      <SubSubTitle content="Review implementations of mature and in progress versions."></SubSubTitle>
      <div className="p-8 sm:px-28 text-lg text-container">
        We currently have a number of native implementations, both from Thomas and from the
        community - we believe supporting multiple platforms will be a key success driver.
      </div>

      <div className="pt-8 pl-10 sm:px-28 flex gap-8 flex-wrap max-w-5xl">
        <Card title="Java Library" status="Mature - being packaged" />

        <Card title="Javascript Library" status="Low level implementation mature" />

        <Card title="Typescript Library" status="Started by community" />

        <Card title="C++ Library" status="Mature" />

        <Card title="Command line tools" status="Mature" />

        <Card title="HTTP Store" status="Mature" />
      </div>

      <SubSubTitle content="Research and forseen developments."></SubSubTitle>
      <div className="p-8 sm:px-28 text-lg text-container">
        Moreover, we are currently preparing the innovations to maintain our source code and propose
        specific implementations.
      </div>

      <div className="pt-8 pl-10 sm:px-28 flex gap-8 flex-wrap max-w-5xl">
        <Card title="Automatic portability" status="In progress" />

        <Card title="Wasm version" status="In progress" />

        <Card title="Quantum proof encryption" status="Analysis" />

        <Card title="No ownership storage" status="Analysis" />
      </div>

      <div className="h-px bg-gray-200 mt-28"></div>

      <div className="text-container px-8 sm:px-28 text-2xl sm:text-3xl mt-10 sm:mt-24 font-bold text-black">
        <span>Do you want to get involved and contribute to core developments?</span>
        <a
          className="mail underline text-blue-500 underline-offset-8 ml-3"
          href={`mailto:${defaults.email}`}
        >
          Get in touch
        </a>
        .
      </div>

      <div className="mx-8 mt-12 sm:ml-28 sm:mt-20 mb-12">
        <NextPage descripton={'Meet our team'} link={'/about-us'}></NextPage>
      </div>

      <Contribution link="https://github.com/CondensationDS/Condensation-Website/blob/main/pages/deep-dive.js" />
    </div>
  )
}

DevelopWithCDS.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
