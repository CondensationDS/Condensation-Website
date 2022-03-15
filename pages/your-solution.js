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
      <Title content="Envision your solution" title="Distribution of data in now in your hands." />

      <SubTitle
        content="Conception"
        title="We can help you to analyse how CDS can advantage your use-case and to define the requirements for building your solution."
      />
      <p>
        Are you interested in adopting data distribution? We propose to guide you in the analysis of
        your use-case with the support of engineers and experienced developers.
      </p>

      <SubSubTitle content="Defining your success factors." />
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

      <SubSubTitle content="Specifying your solution's foundations."></SubSubTitle>
      <p>
        We conceptualize your decentralized solution by drawing an architecture diagram and
        structure of your data in the right schema. In addition, we can advise you on the compatible
        choices of hardware and/or dependencies to ensure the efficiency and security of your
        solution. It will give you a clear understanding of how to build your solution and to
        estimate its budget.
      </p>

      <SubSubTitle content="Planning the transformation of your existing solution."></SubSubTitle>
      <p className="mb-32">
        We identify the shortfalls of your existing solution to map which element can get the
        benefits the most from CDS enablements. Through a roadmap we propose a step-by-step approach
        to transform your product while ensuring your running operations. We define increments with
        pragmatic solutions which can be merged with your product.
      </p>

      <SubTitle
        content="Development"
        title="We can stand as technical experts to support your software developement."
      />

      <SubSubTitle content="Demonstrate your product feasibility"></SubSubTitle>
      <p>
        If entering into the decentralization movement is something new for your organization, we
        can build a minimal project in a few weeks to demonstrate the technical feasibility of your
        target solution. Please, find examples in the proof-of-concept section. Moreover, we can
        provide documentation on request to train your developers on how to build the proof of
        concept by themselves by using our open-source technology for free.
      </p>

      <SubSubTitle content="Develop and maintain your product"></SubSubTitle>
      <p className="mb-32">
        We can build an agile project with you to dynamically adapt to your priorities and the
        opportunities you want to take advantage of. For most complex projects we combine CDS
        expertizes with development companies’s workforce in order to make your product grow in the
        long term. We are partnered with best in class development companies in Switzerland.
      </p>

      <SubTitle
        content="Initiation"
        title="You believe in the project, but your organization is not there yet? We can work together to raise awareness."
      />
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

      <div className="text-container text-3xl mt-24 mb-32 font-bold text-black">
        Do you have a project in mind?{' '}
        <span className="underline text-blue-500 underline-offset-8">Contact us</span>.
      </div>

      <Contribution></Contribution>
    </div>
  )
}

MakeItHappen.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
