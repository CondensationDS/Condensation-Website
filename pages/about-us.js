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

      <div className="p-5 sm:px-20 sm:mb-20 text-lg">
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

      <div className="p-5 sm:px-20 text-lg">
        Our managing committee is mostly based in Lausanne, Switzerland, and welcomes remote
        members. As a team, we encourage personal initiative and share decision making with who
        actively participates and brings value to the project.
      </div>
      <div class="bg-gray-200 h-px my-6"></div>
      <div className="text-container flex flex-col gap-20 pt-5 sm:px-20 mb-8">
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
      <div class="bg-gray-200 h-px my-6"></div>
      <SubSubTitle content="Our advisors supporting the project strategy."></SubSubTitle>
      <div className="px-5 sm:px-20">
        We are supported by research mentors and business coaches from the Swiss startup ecosystem :
        <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
          <li>
            Prof. <strong>Serge Vaudenay</strong> is leading the Security and Cryptography
            Laboratory (LASEC) at the EPFL university, he hosted CDS to challenge the technological
            choices of the core technology and investigate opportunities for research.
          </li>
          <li>
            <strong>Fabrice Guye</strong> is general manager at Senthorus a leading cyberdefense
            company in Switzerland, he is coaching Condensation in the context of the accelerator
            program named Trust Valley for supporting the development of partnerships.
          </li>
        </ul>
      </div>

      <SubSubTitle content="Special thanks to notable contributions."></SubSubTitle>
      <div className="px-5 sm:px-20">
        Multiple individuals already committed to help with the initiation of this project, we would
        like to highlight special thanks for the following people :
        <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
          <li>
            <strong>Max Mouradian</strong> - co-founded the first messenger using CDS.
          </li>
          <li>
            <strong>Eduardo Dhoki</strong> - first contributor to work on the core to create a
            typescript version.
          </li>
          <li>
            <strong>Christopher Métrailler</strong> - for the first integration of the technology in
            an IoT device.
          </li>
          <li>
            <strong>Rafiki Cai</strong> - for supporting the efforts to vulgarize the topic of
            distributed systems.
          </li>
          <li>
            <strong>Charline Lavigne</strong> - for helping with the development of this
            contribution platform.
          </li>
        </ul>
      </div>

      <div className="text-container pl-5 sm:px-20 text-3xl mt-10 mb-20 font-bold text-black">
        <span>Do you want to be part of the data distribution journey?</span>
        <span className="underline text-blue-500 underline-offset-8 ml-2"></span>
        <a
          className="mail underline text-blue-500 underline-offset-8 ml-3"
          href={defaults.url.discord}
          target="_blank"
        >
          Join our Discord
        </a>
        .
      </div>

      <div className="ml-5 sm:ml-20 mb-12">
        <NextPage descripton={'Envision your solution'} link={'/your-solution'}></NextPage>
      </div>

      <Contribution></Contribution>
    </div>
  )
}

MeetOurTeam.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
