import Layout from '../components/Layout'

import Description from '../components/Description'
import Anchor from '../components/Anchor'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import SubSubTitle from '../components/SubSubTitle'
import NextPage from '../components/NextPage'
import Contribution from '../components/Contribution'

export default function Discover() {
  return (
    <div className="page-container">
      <Title content="What is Condensation?"></Title>

      <Description content="CDS - short for Condensation Data-System, is an open-source project for building secure and efficient applications in a distributed system. Inspired the immutability of the Blockchain, the merging of git and the communication of the email system, CDS is an easy-to-use tool that gives people full ownership of their data."></Description>
      <Anchor description="Overview" id="#test-1"></Anchor>
      <Anchor description="How Condensation works?" id="#test-2"></Anchor>
      <Anchor description="Who benefit from CDS?" id="#test-3"></Anchor>

      <SubTitle content="Overview"></SubTitle>
      <SubSubTitle content="A lightweight data-system"></SubSubTitle>
      <p>
        The complete lifecycle of data can be managed with CDS, that’s why it is called a
        data-system. It is organised in three lightweight modules to efficiently manage the data in
        the application, transport it while ensuring end-to-end security and storing it without
        centralization constraints.
      </p>

      <SubSubTitle content="Which foster decentralization"></SubSubTitle>
      <p>
        Condensation follows the concept of trustless system, it means people can exchange
        information with each other without having to trust intermediaries such as providers of data
        transport channels or cloud infrastructures. Given that, applications can scale with
        flexibility by distributing data where it ensures better performances and security.
      </p>

      <SubSubTitle content="Being open-source"></SubSubTitle>
      <p>
        The core technology of Condensation is now mature and we believe it will benefit to many
        developers. The code is available under an open licence and we are actively working on
        facilitating the adoption of the technology by sharing the knowledge of the project and
        building developer tools. We welcome any individual or company who wants to contribute to
        our mission.
      </p>

      <SubTitle content="How Condensation works?"></SubTitle>
      <SubSubTitle content="Managing the data where it is created"></SubSubTitle>
      <p>
        With CDS, the data is computed in two ways with the principle to move the compute to where
        the data is - and not to move the data in centralized infrastructures. First, the data
        concerning an account is managed directly on the device of the person using an application,
        in order to ensure his data is only read there and his privacy is respected. Secondly, only
        the data to produce analytics or business services can be shared seperately to indexing
        servers which can eventually be queried.
      </p>
      <p>
        It makes a clear distinction of data as being personal and totally under the control of the
        owner, or private and under the control of a trusted company, or simply public. Multiple
        roles can be defined to decide how to move the data which gives flexibility.
      </p>

      <SubSubTitle content="Protecting the data itself"></SubSubTitle>
      <p>
        With CDS, when someone send data he can ensure only the receiver can unlock the information
        from his device to read it. Moreover, before to be sent, the data is locked into a structure
        which cannot be modified without leaving a tamper. It provides an automatic verification of
        data to know it has not been altered and it comes from the right person.
      </p>
      <p>
        By design, privacy of people is respected and same goes for companies, which can manage
        confidential information without exposing themselves to risk of data breaches on the storage
        or on the network.
      </p>

      <SubSubTitle content="Storing data without constraints"></SubSubTitle>
      <p>
        With CDS, each person having an account for an application can decide where they want to
        store their own data - it could be in a server at their home or in a Cloud service located
        in their country. As the data itself is protected, it can be stored with less concerns about
        the security of the storage device.
      </p>
      <p>
        Similarly, the provider of an application can decide with flexibility where the data will
        flow independently if the network is secured or not, or if the transmission channel is
        stable or gets interrupted. It makes the system robust, even if the network isn’t trusted.
      </p>

      <SubTitle content="Who benefit from CDS?"></SubTitle>
      <SubSubTitle content="People and companies using applications"></SubSubTitle>
      <p>
        CDS started with a statement - the data concerning people should remain in their ownership.
        And this concept of data ownership is realized with the following capabilities :
        <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
          <li>I can protect my data in order to ensure my privacy is respected.</li>
          <li>I can trust the data I receive has not been manipulated.</li>
          <li>I can control where my data is stored.</li>
          <li>I can collaborate on data without intermediaries.</li>
        </ul>
        It gives real ownership of data while being able to interact with others efficiently.
      </p>

      <SubSubTitle content="System administrators mainting IT infrastructures"></SubSubTitle>
      <p>
        CDS is protects the data itself and so the person managing the infrastructure where the data
        flow and where the data is stored don’t have risks to compromise the data with the following
        :
        <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
          <li>I can manage data without having access to private information.</li>
          <li>I know exactly where the data is stored.</li>
          <li>I can scale my infrastructure horizontally without limitations.</li>
          <li>I can replicate data efficiently.</li>
        </ul>
        It creates a system where there is no need to trust the IT infrastructure.
      </p>

      <SubSubTitle content="Developers building applications"></SubSubTitle>
      <p>
        CDS simplifies the development of distributed applications. It provides an interface in the
        form of a document which is known as a flexible data structuring tool. The core algorithm
        automatically manage the encrytion and efficient synchronisation of data and give to the
        developer the following benefits :
        <ul className="py-4 pl-5 list-disc marker:text-blue-400 text-slate-500">
          <li>I can build an app with end-to-end encryption without knowing about cryptography.</li>
          <li>I can create trusted systems where the data can be certified and verified.</li>
          <li>
            I have the flexibility to start from a centralized solution to go toward distribution.
          </li>
          <li>I can connect multiple devices or services using a single protocol.</li>
        </ul>
        Its a one stop solution to manage data securely from the creation to the storage.
      </p>

      <div className="ml-20 mt-40 mb-12">
        <NextPage descripton={'Case studies'} link={'/case-studies'}></NextPage>
      </div>

      <Contribution></Contribution>
    </div>
  )
}

Discover.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
