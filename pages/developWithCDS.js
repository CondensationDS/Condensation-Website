import ContentPageLayout from '../components/ContentPageLayout'

export default function DevelopWithCDS() {  
  return (
    <div>
      <div class="gradient-bg-home">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 h-64 flex-1 flex items-center">
            <p class="ml-3 font-medium text-white truncate">
              <span class="sm:text-xl text-lg md:hidden"> Develop with CDS </span>
              <span class="sm:text-xl hidden md:inline text-lg"> Develop with CDS </span>
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
            Are you a developer ...
          </span>
        </p>
      </div>
    </div>
  </div>
</div>
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

