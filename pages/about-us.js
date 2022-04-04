import Layout from '../components/Layout'

import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
import NextPage from '../components/NextPage'
import Contribution from '../components/Contribution'

import thomas from '../assets/img/profile-picture-thomas-lochmatter.png'
import alex from '../assets/img/profile-picture-alex-mouradian.png'
import lou from '../assets/img/profile-picture-lou-locci.png'
import souksou from '../assets/img/profile-picture-thomas-souksouvan.png'
import People from '../components/People'

import defaults from '../common/defaults'

export default function MeetOurTeam() {
  return (
    <div className="page-container max-w-screen-2xl">
      <Title content="Meet our team" title="We are leading a shift of paradigm." />

      <SubTitle
        content="What drives us"
        title="We work on protecting people's digital rights while building a more collaborative and sustainable digital world."
      />

      <div className="text-container p-8 sm:px-28 sm:mb-20 text-lg">
        We foster trust and collaboration in the digital world. Our goal is to develop tools
        providing people with data ownership all together with data safety. We focus on distributed
        technologies because we believe that they are a better way to build our interactions with
        each other. For us, decentralization is paving the way to a better balance of power, but
        also to reducing people and companies vulnerabilities in the digital world.
      </div>

      <SubTitle
        content="Who we are"
        title="Condensation is governed by the founders of the technology supported by an open and spirited group of people."
      />

      <SubSubTitle content="Our managing committee."></SubSubTitle>

      <div className="text-container p-8 sm:px-28 text-lg">
        Our managing committee is mostly based in Lausanne, Switzerland, and welcomes remote
        members. As a team, we encourage personal initiative and share decision making with who
        actively participates and brings value to the project.
      </div>

      <div className="flex flex-col gap-20 pt-5 sm:px-28 mb-8">
        <People
          name="Thomas Lochmatter"
          picture={thomas}
          contribution="is the author of CDS"
          role="he is responsible of the core technology"
          description="Communication systems engineer, he holds a PhD in robotics. He started programming in his childhood and has always been intrigued by distributed systems and self-organization. Over the past 10 years, has also been teaching programming, scientific computing, and system security at EPFL."
        />

        <People
          name="Alex Mouradian"
          picture={alex}
          contribution="created the first use-cases"
          role="he is responsible of the project development"
          description="Engineer with a background in management, energy systems, and environmental monitoring. He has always been concerned about the development of societies and met Thomas as his programming teacher. Over the past years, he has founded entrepreunarial projects and worked as a digital strategy consultant."
        />

        <People
          name="Lou Locci"
          picture={lou}
          contribution="created first introductions to CDS"
          role="she is responsible of education and training"
          description="Engineer with a background in Bioengineering and deep-learning. She loves to build teams, and explain technical solutions with comprehensive concepts and tutorials. Over the past years, she worked as a data scientist and as a software developer."
        />

        <People
          name="Thomas Souksouvan"
          picture={souksou}
          contribution="is making distributed apps"
          role="he is responsible of application developement"
          description="Graduated as a software developer with an entrepreneurial background. He got passionned by the decentralization change from their early days. Over the past years he leaded entrepreneurial projects and worked as technical leader for software development projects."
        />
      </div>

      <SubSubTitle content="Our early community."></SubSubTitle>

      <div className="text-container p-8 sm:px-28 text-lg">
        Condensation is an open project, and started to receive contributions in 2022. We welcome
        the support from individuals, companies and mentors from the startup ecosystem.
      </div>

      <div className="flex flex-wrap p-8 sm:px-28 gap-8">
        <div className="flex-col p-8 border border-gray-200 basis-60 shrink-0">
          <div>GitHub stars</div>
          <div className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
            418
          </div>
        </div>

        <div className="flex-col p-8 border border-gray-200 basis-60 shrink-0">
          <div>Commited lines of code</div>
          <div className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
            80k
          </div>
        </div>

        <div className="flex-col p-8 border border-gray-200 basis-60 shrink-0">
          <div>Contributing companies</div>
          <div className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
            3
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-200 my-8 sm:my-28"></div>

      <div className="text-container pl-8 sm:px-28 text-2xl sm:text-3xl mt-12 mb-12 font-bold text-black">
        <span>Do you want to be part of the data distribution journey?</span>
        <span className="underline text-blue-500 underline-offset-8 ml-2"></span>
        <a
          className="mail underline text-blue-500 underline-offset-8 ml-1"
          href={defaults.url.discord}
          target="_blank"
        >
          Join our Discord
        </a>
      </div>

      <div className="ml-8 sm:ml-28 mb-12">
        <NextPage descripton={'Adopt Condensation'} link={'/adopt-condensation'}></NextPage>
      </div>

      <Contribution link="https://github.com/CondensationDS/Condensation-Website/blob/main/pages/about-us.js" />
    </div>
  )
}

MeetOurTeam.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
