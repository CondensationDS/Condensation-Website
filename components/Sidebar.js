import Link from 'next/link'

export default function Sidebar() {

    return (
        <div className='py-6'>
            <div className='sidebar w-64'>
                <ul>
                    <li className='list-none py-0.5 px-6'>
                        <Link href="/What-is-condensation">
                            <a>What is Condensation?</a>
                        </Link>
                    </li>
                    <li className='list-none py-0.5 px-6'>
                        <Link href="/Case-studies">
                            <a>Case studies</a>
                        </Link>
                    </li>
                    <li className='list-none py-0.5 px-6'>
                        <Link href="/Develop-with-CDS">
                            <a>Develop with CDS</a>
                        </Link>
                    </li>
                    <li className='list-none py-0.5 px-6'>
                        <Link href="/Meet-the-team">
                            <a>Meet the team</a>
                        </Link>
                    </li>
                    <li className='list-none py-0.5 px-6'>
                        <Link href="/Make-it-happen">
                            <a>Make it happen</a>
                        </Link>
                    </li>
                </ul>
            </div>    

            <div className='bg-gray-200 line my-6 mx-6'></div>

            <div className='external-links w-64'>
                <ul>
                    <li className='list-none py-0.5 px-6'>
                        <a className='flex justify-between items-center' target={"_blank"} href="https://github.com/CondensationDS/Condensation">
                            <span className="flex-grow">Visit our GitHub</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
                        </a>
                    </li>
                    <li className='list-none py-0.5 px-6'>
                        <a className='flex justify-between items-center' target="_blank" href="https://discord.gg/9ASw6bCssg">
                            <span className="flex-grow">Join our Discord</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
                        </a>
                    </li>
                </ul>
            </div>            
        </div>        
    )
}