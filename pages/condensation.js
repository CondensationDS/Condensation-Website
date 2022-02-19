import Layout from '../components/Layout'

export default function Condensation() {  
  return (    
    <div>Layout condensation / need to use sublayout</div>
  )
}

Condensation.getLayout = function getLayout(page) {
  return (
    <Layout>      
      {page}
    </Layout>
  )
}
