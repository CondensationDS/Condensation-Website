import Layout from '../components/Layout'

import Description from '../components/Description'
import Anchor from '../components/Anchor'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
import NextPage from '../components/NextPage'
import Contribution from '../components/Contribution'
import Card from '../components/Card'

export default function DevelopWithCDS() {
  return (
    <div className="page-container">
      <Title 
        content="Technical deep-dive"
        title="Discover the technological backbone."
      />

      <SubTitle 
        content="Concepts"
        title="Condensation combine mathematical models to achieve data distribution, conflict-free merge, and end-to-end encryption."
      />

      <div className='text-container mt-20 mb-32 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500'>
        <ul>
          <li>SHA-256 hash encryption</li>
          <li>AES-256 symmetrical encryption</li>
          <li>RSA-2048 asymetrical encryption</li>
          <li>Merkle tree blockchain</li>
          <li>Actor model with message passing approach</li>
          <li>Join-semilattice data merge</li>
        </ul>
      </div>

      <SubTitle 
        content="Source code"
        title="To better understand the implementation, you can review the specifications and the source code in early access."
      />

      <p className='text-xl mt-8'>
        The actual stable version of CDS is the fruit of one mind and reached maturity after a long
        research period. Many samples of code, notes and documentation were created and we transparently
        work on simplifying and completing the different ressources. 
      </p>

      <SubSubTitle content="Read the low level implementation specifications."></SubSubTitle>
      <p>
        The specifications can be found on <a className='text-blue-500'>docs.condensation.io</a>. Low level description is well
        described and we welcome feedback to complete the documentation.
      </p>

      <SubSubTitle content="Review implementations of mature and in progress versions."></SubSubTitle>
      <p>
        We currently have a number of native implementations, both from Thomas and from the community - we believe supporting multiple platforms will be a key success driver.
      </p>

      <div className='pt-8 pl-24 flex gap-8 flex-wrap max-w-5xl'>

        <Card
          title="Java Library"
          status="Mature - being packaged"
        />

        <Card
          title="Swift Library"
          status="Started - on hold"
        />

        <Card
          title="Javascript Library"
          status="Low level implementation mature"
        />

        <Card
          title="Typescript Library"
          status="Started by community"
        />

        <Card
          title="C++ Library"
          status="Mature"
        />

        <Card
          title="Command line tools"
          status="Mature"
        />

        <Card
          title="HTTP Store"
          status="Mature"
        />


      </div>


      <SubSubTitle content="Research and forseen developments."></SubSubTitle>
      <p>
        Moreover, we are currently preparing the innovations to maintain our source code and propose specific implementations.
      </p>

      <div className='pt-8 pl-24 flex gap-8 flex-wrap max-w-5xl'>

        <Card
          title="Automatic portability"
          status="In progress"
        />

        <Card
          title="Wasm version"
          status="In progress"
        />

        <Card
          title="Quantum proof encryption"
          status="Analysis"
        />

        <Card
          title="No ownership storage"
          status="Analysis"
        />

      </div>

      <div className='text-container text-3xl mt-24 mb-32 font-bold text-black'>
        Do you want to get involved and contribute to core developments? <span className='underline text-blue-500 underline-offset-8'>Get in touch</span>.
      </div>


      <div className="ml-20 mt-40 mb-12">
        <NextPage descripton={'Meet our team'} link={'/about-us'}></NextPage>
      </div>

      <Contribution></Contribution>
    </div>
  )
}

DevelopWithCDS.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
