import Image from 'next/image'
import Arrow from '../assets/img/cds-arrow.svg'

export default function Button({ content, link }) {
  return (
    <a
      type="button"
      className="inline-flex items-center py-2 text-center text-blue-500 text-xl border-b border-blue-500"
      href={link}
    >
      {content}
    </a>
  )
}
