import Image from 'next/image'
import imageTop from '../assets/img/user-case-privacy-phone.png';
import imageBottom from '../assets/img/user-case-privacy-person.png';
import imageSide from '../assets/img/user-case-privacy-texting.png';


export default function UseCases(content) {
    return(
        <div className='bg-[#EAEAEA] flex flex-col md:flex-row w-[80%] m-auto'>
            <p className='w-[60%] md:w-[40%] text-[3vw] md:text-[1.9vw] ml-10 mt-10 md:m-auto md:ml-10'>
            {content}
            </p>
            <div className='w-[90%] md:w-[55%] flex p-10 m-auto'>
                <div className='w-[48%] my-auto'>
                    <Image 
                    src={imageTop}
                    alt="Use case illustration" />
                    <Image 
                    src={imageBottom}
                    alt="Use case illustration" />
                </div>
                <div className='w-[48%] ml-10 mx-auto'>
                    <Image 
                    src={imageSide}
                    alt="Use case illustration" />
                </div>
            </div>
        </div>
    )
}

