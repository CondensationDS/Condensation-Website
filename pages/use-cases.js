import Layout from '../components/Layout'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Contribution from '../components/Contribution'
import UseCases from '../components/UseCases'

import imageTopMessenger from '../assets/img/use-case-messenger-phone.png'
import imageBottomMessenger from '../assets/img/use-case-messenger-person.png'
import imageSideMessenger from '../assets/img/use-case-messenger-texting.png'

import votingPin from '../assets/img/use-case-voting-pin.png'
import votingResults from '../assets/img/use-case-voting-results.png'
import votingBlockchain from '../assets/img/use-case-voting-blockchain.png'

import imageTopVehicle from '../assets/img/use-case-vehicle-map.png'
import imageBottomVehicle from '../assets/img/use-case-vehicle-microchip.png'
import imageSideVehicle from '../assets/img/use-case-vehicle-bike.png'

import NextPage from '../components/NextPage'
import defaults from '../common/defaults'

export default function CaseStudies() {
  return (
    <div className="page-container max-w-screen-2xl">
      <Title content="Use-cases" title="Making apps ready for the data era." />
      <SubTitle
        content="Pilot projects"
        title=" Together with our contributors we created web, mobile and IoT pilot projects awarded for their innovation."
      />

      <div className="mt-20"></div>

      <div className="ml-28 h-px bg-gray-200"></div>

      <UseCases
        content="A smart metering system to track electric vehicles while ensuring reduced data consumption."
        imageTop={imageTopVehicle}
        altTop="map with a route"
        imageBottom={imageBottomVehicle}
        altBottom="electronic component"
        imageSide={imageSideVehicle}
        altSide="moving bike"
        awards={[
          'Awarded by TheArk foundation,',
          'Granted by Act for Change sustainability program,',
          'Finalist of Start contest and BCVs creators contest.'
        ]}
      ></UseCases>

      <div className="ml-28 h-px bg-gray-200"></div>

      <UseCases
        content="An e-Voting system with data transparency to make sure our rights are respected in a digitized society."
        imageTop={votingResults}
        altTop="US map with voting results."
        imageBottom={votingBlockchain}
        altBottom="Blockchain illustration."
        imageSide={votingPin}
        altSide="I voted pin."
        awards={['Awarded by EPFL ignition grant.']}
      ></UseCases>

      <div className="ml-28 h-px bg-gray-200"></div>

      <UseCases
        content="An end-to-end encrypted messenger to protect the privacy of our digital conversations."
        imageTop={imageTopMessenger}
        altTop="Phone with messenging apps."
        imageBottom={imageBottomMessenger}
        altBottom="Shadow of a person."
        imageSide={imageSideMessenger}
        altSide="Person texting."
        awards={[
          'Awarded by EPFL XGrant program,',
          'Awarded by the french embassy in Switerland,',
          'Received by Swissnex in San Francisco.'
        ]}
      ></UseCases>

      <div className="h-px bg-gray-200"></div>

      <div className="text-container pl-8 sm:pl-28 text-3xl mt-12 sm:mt-28 mb-12 font-bold text-black">
        Do you want to learn more about our past and ongoing projects?{' '}
        <a
          className="mail underline text-blue-500 underline-offset-8"
          href={`mailto:${defaults.email}`}
        >
          Contact us
        </a>
        .
      </div>

      <div className="ml-8 mt-8 sm:ml-28 sm:mt-20 mb-12">
        <NextPage descripton={'How it works?'} link={'/how-it-works'}></NextPage>
      </div>

      <Contribution link="https://github.com/CondensationDS/Condensation-Website/blob/main/pages/use-cases.js" />
    </div>
  )
}

CaseStudies.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
