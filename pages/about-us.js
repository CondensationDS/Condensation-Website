import Layout from '../components/Layout'

import Description from '../components/Description'
import Anchor from '../components/Anchor'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
import NextPage from '../components/NextPage'
import Contribution from '../components/Contribution'

export default function MeetOurTeam() {  
  return (
    <div className="page-container">
      <Title content="Meet our team"></Title>

      <Description content="Condensation is goverened by the founders of the technology. The project is supported by a group of passionated persons welcoming everyone even without prior knowledge in distributed systems."></Description>
      <Anchor description="What drives us" id="#test-1"></Anchor>
      <Anchor description="Who we are" id="#test-2"></Anchor>
      <Anchor description="Join our community" id="#test-3"></Anchor>

      <SubTitle content="What drives us"></SubTitle>
      <p>We enhance the collaboration and the trust in the digital world by providing people with tools ensuring the safety and the ownership of their data. We focus on data distributed because we believe that they represent a better way to build our interactions with each other. For us, decentralization opens the way to a better balance of power on the network and to reducing the vulnerability of people and companies.</p>     
     
      <SubTitle content="Who we are"></SubTitle>
      <p>Our managing committee is mostly based in Lausanne, Switzerland, and welcomes remote members. As a team, we encourage personal initiative and share decision making with who actively participates and brings value to the project.</p>

      <SubSubTitle content="Our advisors"></SubSubTitle>
      <p>We are supported by research mentors and business coaches from the Swiss startup ecosystem :
        <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
          <li>Prof. Serge Vaudenay is leading the Security and Cryptography Laboratory (LASEC) at the EPFL university, he hosted CDS to challenge the technological choices of the core technology and investigate opportunities for research.</li>
          <li>Fabrice Guye is general manager at Senthorus a leading cyberdefense company in Switzerland, he is coaching Condensation in the context of the accelerator program named Trust Valley for supporting creation of partnerships with organizations.</li>
        </ul>
      </p>
      <SubSubTitle content="Special thanks"></SubSubTitle>

      <p>Multiple individuals already committed to help with the initiation of this project, we would like to highlight special thanks for the following people :
        <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
          <li>Max Mouradian - co-founded the first messenger using CDS.</li>
          <li>Eduardo Dhoki - first contributor to work on the core to create a typescript version.</li>
          <li>Rafiki Cai - for supporting the efforts to vulgarize the topic of distributed systems.</li>
          <li>Christopher Métrailler - for doing the first integration of the technology in an IoT device.</li>
          <li>Charline Lavigne - for helping with the development of this contribution platform.</li>
        </ul>
      </p>

      <SubTitle content="Join our community"></SubTitle>
      <p>You believe in CDS? Make it grow with us! We encourage invidual and companies to get involved and join our emerging community, you can contact us with the following.</p>

      <SubSubTitle content="Email"></SubSubTitle>
      <p>If you want to share project requirements, please send your message to info@condensation.io to directly get it addressed to CDS team.</p>  

      <SubSubTitle content="Discord"></SubSubTitle>
      <p>If you have any question about the technology feel free to directly chat with us and get support from CDS early community on our Discord server.</p>  

      <div className='ml-20 mt-40 mb-12'>
        <NextPage descripton={"Envision your solution"} link={'/your-solution'}></NextPage>
      </div>

      <Contribution></Contribution>

  </div>

  )
}

MeetOurTeam.getLayout = function getLayout(page) {
  return (
    <Layout>      
      {page}
    </Layout>
  )
}

