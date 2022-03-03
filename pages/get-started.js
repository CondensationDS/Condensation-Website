import Layout from '../components/Layout'

import Description from '../components/Description'
import Anchor from '../components/Anchor'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
import NextPage from '../components/NextPage'
import Contribution from '../components/Contribution'

export default function DevelopWithCDS() {
  return (
    <div className="page-container">
      <Title content="Develop with CDS"></Title>

      <Description content="Are you a developer and would you like to put CDS into practice? Here we prepare a technical overview of the CDS technology and its current stage of development. We also propose a simple tutorial to illustrate CDS main features."></Description>
      <Anchor description="Make your first app with CDS" id="#test-1"></Anchor>
      <Anchor description="Learn about the core technology" id="#test-2"></Anchor>
      <Anchor description="Get CDS source code" id="#test-3"></Anchor>

      <SubTitle content="Make your first app with CDS (coming soon)"></SubTitle>
      <p>
        We are building a tutorial to make a simple end-to-end encrypted messenger to guide you
        through the installation of CDS, the setup of a distributed data storage and the creation of
        an end-to-end secured messaging application. The tutorial is intended for developers from
        basic level and will take approximately 4 hours.
      </p>

      <SubTitle content="Learn about the core technology"></SubTitle>
      <p>
        In this section you can find introductory material to learn about how CDS use data
        structures, cryptography and distribution. Moreover, to better understand the market context
        you can find our awesome list of existing articles and ressources.
      </p>

      <SubSubTitle content="Discover our technical approach"></SubSubTitle>
      <p>
        We invite you to visit our GitHub to discover a general introduction of the project.
        Moroever, we published articles to share the approach and technical choices for building the
        core technology :
      </p>

      <SubSubTitle content="Learning more about distributed systems"></SubSubTitle>
      <p>
        To better understand distributed systems and particularly what CDS is building, we invite
        you to discover the following articles :
        <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
          <li>Moving compute to data</li>
          <li>A comparison of distributed DBs</li>
          <li>What is the small web?</li>
        </ul>
      </p>

      <SubTitle content="Contribute to CDS source code"></SubTitle>
      <p>
        The actual stable version of CDS is the fruit of one mind and reached maturity after a long
        research period. Many samples of code, notes and documentation were created and we currently
        work on simplifying and completing the project ressources. This process is transparent and
        we invite you to directly get in touch with us in order to get involved.
      </p>

      <SubSubTitle content="Specifications"></SubSubTitle>
      <p>
        The specifications can be found on docs.condensation.io. Low level description is well
        described and we are working on improving the interface proposed to developers.
      </p>

      <SubSubTitle content="Implementations"></SubSubTitle>
      <p>
        We currently have a number of translations of CDS, as well as specific implentations, we
        believe that the success factor of Condensation will be to propose multiple implementations
        for many platforms.
        <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
          <li>
            Java library - was the first version of CDS proposed to the public through an Android
            app, it is stable but currently integrated with an application front-end and with a data
            visualisation console. This code should be dissociated from the app and packaged. You
            can find it in the CDS Java implementation repository on GitHub.
          </li>
          <li>
            Javascript library - to enable CDS adoption and meet the demand for building web apps,
            we are currently translating existing versions into Javascript. The low level part is
            ready and we target a full release in mid 2022. You can find it in the Javascript
            implementation repository on GitHub.
          </li>
          <li>
            Typescript library - was initiated by the community to provide a better experience for
            developers. We encourage contributors to continue this translation which doesn’t have a
            targetted release date. You can find it in the Typescript implementation repository on
            GitHub (access provided upon demand).
          </li>
          <li>
            C++ library - made for IoT systems to buffer and transmit measurements with end-to-end
            encryption. The library can handle network outages of several hours if enough memory is
            available on the device.
          </li>
          <li>
            HTTP store - made for the storage of actors’ immutable objects. It is a minimalistic
            tool to only store data and manage accounts. You can download it in the HTTP Store
            repository on GitHub.
          </li>
        </ul>
        Moreover, we are working on a tool to create and maintain multiple implementations with
        automatic portability of the code and we initiated a Wasm library.
      </p>

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
