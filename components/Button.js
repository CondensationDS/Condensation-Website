import Image from 'next/image'
import Arrow from '../assets/img/cds-arrow.svg'

export default function Button({ content }) {
  return (
    <button
      type="button"
      className="button-cds inline-flex items-center px-4 py-1 lg:px-6 lg:py-2 text-sm font-medium text-center rounded-full bg-white"
    >
      {content}
      <span className="ml-5 pt-1">
        <Image src={Arrow} alt="Arrow Icon" />
      </span>
    </button>
  )
}
