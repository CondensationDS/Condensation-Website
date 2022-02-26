import ContentPageLayout from '../components/ContentPageLayout'

export default function MeetTheTeam() {  
  return (
    <div>
      <Anchor description="Who benefit from CDS?" id="#test-3"></Anchor>
      <SubTitle content="Overview"></SubTitle>
  </div>

  )
}

MeetTheTeam.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout>      
      {page}
    </ContentPageLayout>
  )
}

