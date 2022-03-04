import Image from 'next/image'

export default function UseCases({content, imageTop, altTop, imageBottom, altBottom, imageSide, altSide, textLeft}) {
    const text = <h1 className='use-cases-title font-bold text-3xl px-10 my-7 xl:my-auto'> 
                    {content}
                </h1>

    let leftImages = <div className='flex flex-col my-auto'>
                        <div className='pb-7'> 
                            <Image src={imageTop} alt={altTop} height='285px' />
                        </div>
                        <div className='flex'>
                            <Image src={imageBottom} alt={altBottom} height='285px' />
                        </div> 
                    </div>

    let rightImage = <div className='flex p-10'>
                        <Image src={imageSide} alt={altSide} height='600px' width='300px' />
                    </div>

    const [firstImage, secondImage] = textLeft ? [leftImages, rightImage] : [rightImage, leftImages]

    const images = <div className='flex items-center mx-auto'>
                        {firstImage}
                        {secondImage}
                    </div>

    const [firstElem, secondElem] = textLeft ? [text, images] : [images, text]

    return(
        <div className='use-cases-container bg-gray-200 flex flex-col xl:flex-row my-20 ml-24 mr-14'> 
            {firstElem}
            {secondElem}
         </div> 
    )
}


