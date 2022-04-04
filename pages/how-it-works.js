import Layout from '../components/Layout'

import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import Step from '../components/Step'
import NextPage from '../components/NextPage'
import Contribution from '../components/Contribution'

import step1 from '../assets/img/actor-account.svg'
import step2 from '../assets/img/trusted-devices.svg'
import step3 from '../assets/img/app-database.svg'
import step4 from '../assets/img/encrypted-integrity.svg'
import step5 from '../assets/img/storage-multiple.svg'
import step6 from '../assets/img/actors-group.svg'

import defaults from '../common/defaults'

export default function HowItWorks() {
  return (
    <div className="page-container max-w-screen-2xl">
      <Title content="How it works" title="Exchanging secret and certified data." />

      <div className="h-px bg-gray-200"></div>

      <Step
        number="1"
        title="A person creates an account within a CDS distributed network."
        description="An account helps to identify a person that joins a network, its a single address which stands as a digital mailbox which helps to communicate with other. There messages can be sent or retrieved."
        illustration={step1}
      />

      <Step
        number="2"
        title="He connects his own devices to be trusted by his account."
        description="The device is the place where data is owned and encrypted. When a device is linked to an account, keys are generated to properly recognize devices and manage the communication. Multiple devices can be linked to an account."
        illustration={step2}
      />

      <Step
        number="3"
        title="On his device he installs and uses an application from a service provider."
        description="The app is the place where the data is managed and modified as it contains the logic. The application contains a local database from where the person can directly access to his data, even while being offline."
        illustration={step3}
      />

      <Step
        number="4"
        title="Condensation certifies and encrypt the data from the device."
        description="It uses a Blockchain structure which gives many advantages when it comes to sharing and synchronizing data among distributed actors. It helps to trust the source of data, to verify the data is complete and not altered."
        illustration={step4}
      />

      <Step
        number="5"
        title="A copy of the data is stored where decided for each person."
        description="The owner of the data have the flexibility to decide where to keep a record of his data, either it is on a cloud, on a localized server, or on premise. When being stored, the data always remain encrypted which avoids the risks of breaches."
        illustration={step5}
      />

      <Step
        number="6"
        title="Persons are connected by passing envelopes containing data."
        description="The accounts are used as relays used to pass from a person to another a message which contains an update of data. A merging algorithm avoid conflicts and ensures actors share the same truth."
        illustration={step6}
      />

      <div className="mx-8 mt-10 sm:ml-28 sm:mt-20 mb-12">
        <NextPage descripton={'Explore the technology'} link={'/deep-dive'}></NextPage>
      </div>

      <Contribution link="https://github.com/CondensationDS/Condensation-Website/blob/main/pages/how-it-works.js" />
    </div>
  )
}

HowItWorks.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
