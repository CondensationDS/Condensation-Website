import Image from 'next/image'

export default function UseCases({content, imageTop, imageBottom, imageSide, altTop, altBottom, altSide, textLeft}) {
    if(textLeft){
        return(
            <div className='bg-[#EAEAEA] flex flex-col lg:flex-row mr-14'>
                <p className='text-xl lg:text-2xl mx-10 my-10 lg:my-auto xl:basis-1/2'> 
                    {content}
                </p>
            <div className='flex p-10 justify-center'>
                <div className='basis-64'>
                    <Image 
                        src={imageTop}
                        alt={altTop} />
                    <Image 
                        src={imageBottom}
                        alt={altBottom} />
                </div>
                <div className='basis-64 ml-10'>
                    <Image 
                        src={imageSide}
                        alt={altSide} />
                </div>
            </div>
        </div>
        )
    }else{
        return(
            <div className='bg-[#EAEAEA] flex flex-col lg:flex-row mr-14'>
            <div className='flex p-10 justify-center'>
                <div className='basis-64'>
                    <Image 
                        src={imageTop}
                        alt={altTop} />
                    <Image 
                        src={imageBottom}
                        alt={altBottom} />
                </div>
                <div className='basis-64 ml-10'>
                    <Image 
                        src={imageSide}
                        alt={altSide} />
                </div>
            </div>
                <p className='text-xl lg:text-2xl mx-10 my-10 lg:my-auto xl:basis-1/2'> 
                    {content}
                </p>
        </div>
        )
    }
}

