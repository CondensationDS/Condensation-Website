import Layout from '../components/Layout'

import Description from '../components/Description'
import Anchor from '../components/Anchor'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
import Contribution from '../components/Contribution'

export default function MakeItHappen() {
  return (
    <div className="page-container">
      <Title content="Make it happen"></Title>

      <Description content="We propose a range of possible collaborations for organizations with the desire to discover Condenstion and build solutions to answer to their needs while contributing to an open-technology."></Description>
      <Anchor description="Define how to build your solution" id="#test-1"></Anchor>
      <Anchor description="Build your next-gen product" id="#test-2"></Anchor>
      <Anchor description="Raise awareness in your organization" id="#test-3"></Anchor>
      <Anchor description="Get in touch" id="#test-3"></Anchor>

      <SubTitle content="Define how to build your solution"></SubTitle>
      <p>
        Are you interested in adopting distributed technologies? We propose to guide you in the
        analysis of your use-case with the support of engineers and experienced developers.
      </p>

      <SubTitle content="Defining your success factors"></SubTitle>
      <p>
        We analyze with you how managing data with a distributed technology can positively impact
        your activities and align with the strategic vision of your organization. The solutions you
        can develop with CDS are focused on :
        <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
          <li>Data privacy to reduce security risks,</li>
          <li>Data certification to enhance trust,</li>
          <li>Data distribution to scale without limits,</li>
          <li>Efficient data updates to reduce operating costs.</li>
        </ul>
        Learn more about what you can do with CDS by reading our case-studies section.
      </p>

      <SubSubTitle content="Conceptualizing your solution"></SubSubTitle>
      <p>
        We believe that developing a new technology like CDS is only possible through its
        application to real world projects. Therefore we offer to contribute to the development of
        your solution.
      </p>

      <SubTitle content="Build your next-gen product"></SubTitle>
      <p>
        You believe in CDS? Make it grow with us! We encourage invidual and companies to get
        involved and join our emerging community, you can contact us with the following.
      </p>

      <SubSubTitle content="Demonstrate your product feasibility"></SubSubTitle>
      <p>
        If entering into the decentralization movement is something new for your organization, we
        can build a minimal project in a few weeks to demonstrate the technical feasibility of your
        target solution. Please, find examples in the proof-of-concept section. Moreover, we can
        provide documentation on request to train your developers on how to build the proof of
        concept by themselves by using our open-source technology for free.
      </p>

      <SubSubTitle content="Develop and maintain your product"></SubSubTitle>
      <p>
        We can build an agile project with you to dynamically adapt to your priorities and the
        opportunities you want to take advantage of. For most complex projects we combine CDS
        expertizes with development companies’s workforce in order to make your product grow in the
        long term. We are partnered with well-known development companies in Switzerland.
      </p>

      <SubSubTitle content="Transform your existing solution"></SubSubTitle>
      <p>
        We identify the shortfalls of your existing solution to map which element can get the
        benefits the most from CDS enablements. Through a roadmap we propose a step-by-step approach
        to transform your product while ensuring your running operations. We define increments with
        pragmatic solutions which can be merged with your product.
      </p>

      <SubTitle content="Raise awareness in your organization"></SubTitle>
      <p>
        We think that meeting people is the best way to enhance innovation and create a community
        around a growing technology. Thus, we propose to animate a keynote introductory event to
        talk in your organization. This talk is followed by an opportunity to join one of our coding
        challenge to support the concretization of personal ideas.
      </p>

      <SubSubTitle content="Talking about tech"></SubSubTitle>
      <p>
        We offer to give a keynote presentation in your organisation to raise awareness concerning
        the benefits of data decentralization. We will explain the drivers of distributed systems
        adoption, demystify key cryptographic concepts such as Blockchain structures, and finally
        describe the new capabilities it offers to build a product and to manage an IT
        infrastructure.
      </p>
      <p>
        This presentation is built with examples related to your activities and is followed by a Q&A
        session to elaborate on topics of particular interest to you. At the end of this talk
        attendees will be able to imagine potential applications in their field.{' '}
      </p>

      <SubSubTitle content="Coding challenge"></SubSubTitle>
      <p>
        We propose to guide developers into the world of cryptography and distributed
        infrastructures. We offer a creative and challenging tutorial to tackle Blockchain
        technology and help you discover use cases relevant to your own topics. Sessions are built
        around explaining concepts and applying them to a technical playground.
      </p>
      <p>
        This coding challenge can be prepared for different modules for IoT, mobile application or
        web development. Thus, we offer the opportunity to put in practice a new programming
        approach to build distibuted solutions.
      </p>

      <SubTitle content="Get in touch"></SubTitle>
      <p className="pb-20">Are you interested? Send us your request at info@condensation.io.</p>

      <Contribution></Contribution>
    </div>
  )
}

MakeItHappen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
