import Image from 'next/image'
import AnchorIcon from '../assets/img/anchor-icon.svg'

export default function Anchor({ description, id }) {
  return (
    <a
      className="flex text-container md:pr-12 lg:pr-24 flex-row items-center hover:text-blue-600"
      href={id}
    >
      <Image className="ml-10" src={AnchorIcon} alt="Anchor Icon" />
      <span className="text-xl">{description}</span>
    </a>
  )
}
