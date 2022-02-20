import Link from 'next/link'

export default function Sidebar() {

    return (
        <div className='sidebar'>
            <div className='pl-5'>
                <ul>
                    <li className='list-none'>
                        <Link href="/condensation">
                            <a>What is Condensation?</a>
                        </Link>
                    </li>
                    <li className='list-none mt-3'>
                        <Link href="/about">
                            <a>Case studies</a>
                        </Link>
                    </li>
                    <li className='list-none mt-3'>
                        <Link href="/about">
                            <a>Develop with CDS</a>
                        </Link>
                    </li>
                    <li className='list-none mt-3'>
                        <Link href="/about">
                            <a>Meet the team</a>
                        </Link>
                    </li>
                    <li className='list-none mt-3'>
                        <Link href="/about">
                            <a>Our services</a>
                        </Link>
                    </li>
                    <div className='bg-gray-200 line mt-5 mr-5'></div>
                </ul>
            </div>            
        </div>        
    )
}