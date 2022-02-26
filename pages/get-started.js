import ContentPageLayout from '../components/ContentPageLayout'

import Description from '../components/Description'
import Anchor from '../components/Anchor'
import SubTitle from '../components/Layout'

export default function DevelopWithCDS() {
  return (
    <div>

      <Description content="CDS - short for Condensation Data-System, is an open-source project for building secure and efficient applications in a distributed system. Inspired the immutability of the Blockchain, the merging of git and the communication of the email system, CDS is an easy-to-use tool that gives people full ownership of their data."></Description>

      <Anchor description="Overview" id="#test-1"></Anchor>
      <Anchor description="How Condensation works?" id="#test-2"></Anchor>
      <Anchor description="Who benefit from CDS?" id="#test-3"></Anchor>
      <SubTitle content="Overview"></SubTitle>
    </div>

  )
}

DevelopWithCDS.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout>
      {page}
    </ContentPageLayout>
  )
}

