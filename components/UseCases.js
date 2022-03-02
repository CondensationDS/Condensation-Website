import Image from 'next/image'

export default function UseCases(content, imageTop, imageBottom, imageSide, altTop, altBottom, altSide, textLeft) {
    const text = <p className='text-xl lg:text-2xl mx-10 my-10 lg:my-auto'> 
                    {content}
                </p>
    const images = <div className='flex p-10 justify-center'>
                        <div className='basis-60'>
                            <Image 
                                src={imageTop}
                                alt={altTop} />
                            <Image 
                                src={imageBottom}
                                alt={altBottom} />
                        </div>
                        <div className='basis-60 ml-10'>
                            <Image 
                                src={imageSide}
                                alt={altSide} />
                        </div>
                    </div>
    const [first, second] = textLeft
        ? [text, images]
        : [images, text]

    return(
        <div className='bg-[#EAEAEA] flex flex-col lg:flex-row mr-14 my-20'> 
            {first}
            {second}
         </div> 
    )
}


