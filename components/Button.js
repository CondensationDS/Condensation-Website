import Image from 'next/image'
import Arrow from '../assets/img/cds-arrow.svg'

export default function Button({ content }) {
  return (
    <button
      type="button"
      className="inline-flex items-center py-2 text-center text-blue-500 text-xl border-b"
    >
      {content}
      <span className="ml-5 pt-1">
        <Image src={Arrow} alt="Arrow Icon" />
      </span>
    </button>
  )
}
