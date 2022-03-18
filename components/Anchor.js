import AnchorIcon from '../assets/img/anchor-icon.svg'

export default function Anchor({ description, id }) {
  return (
    <div className="inline-block pr-8">
      <a className="flex flex-row items-center hover:text-blue-600" href={id}>
        <Image className="ml-10" src={AnchorIcon} alt="Anchor Icon" />
        <span className="text-xl">{description}</span>
      </a>
    </div>
  )
}
