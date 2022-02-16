import Layout from './components/Layout'

export default function Condensation() {  
  return (    
    <div>test</div>
  )
}

Condensation.getLayout = function getLayout(page) {
  return (
    <Layout>      
      {page}
    </Layout>
  )
}
