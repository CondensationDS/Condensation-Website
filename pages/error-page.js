import Image from 'next/image'
import Logo from '../assets/img/logos/logo-condensation-data-system.svg'
import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div>
      <div className="error-page h-screen w-screen flex items-center justify-center">
        <div className="bg-white basis-5/6 h-3/4 m-12 rounded-xl">
          <div className="p-7">
            <Link href="/">
              <a>
                <Image src={Logo} alt="Condensation logo" />
              </a>
            </Link>
          </div>
          <div className="h-4/6 flex flex-col items-center justify-center p-7">
            <h1 className="font-bold text-2xl text-center">
              Sorry, we couldn't find the page you were looking for.
            </h1>
            <Link href="/">
              <a className="px-6 py-2 text-sm font-medium rounded-full bg-gray-200 mt-7">
                Back to homepage
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
