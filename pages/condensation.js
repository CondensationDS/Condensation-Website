import ContentPageLayout from '../components/ContentPageLayout'

export default function Condensation() {  
  return (
    <div>
      <div class="gradient-bg-home">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 h-64 flex-1 flex items-center">
            <p class="ml-3 font-medium text-white truncate">
              <span class="sm:text-xl text-lg md:hidden"> Condensation </span>
              <span class="sm:text-xl hidden md:inline text-lg"> What is Condensation ? </span>
            </p>
          </div> 
        </div>
      </div>
    </div>
    <div>
    <div class="head-content">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 min-h-64 flex-1 flex items-center">
        <p>
          <span class="text-base hidden md:inline">
          CDS - short for Condensation Data-System, 
          is an open-source project for building secure and efficient applications in a distributed system. 
          Inspired the immutability of the Blockchain, the merging of git and the communication of the email system, 
          CDS is an easy-to-use tool that gives to deveoper the power to give users full ownership of their data.
          </span>
        </p>
      </div>
    </div>
  </div>
</div>
</div>

  )
}

Condensation.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout>      
      {page}
    </ContentPageLayout>
  )
}

