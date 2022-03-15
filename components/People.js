import Image from 'next/image'

export default function People({ picture, name, contribution, role, description }) {
  return (
    <div className="flex">
      <div className="shrink-0 w-32 h-32">
        <Image width="144px" height="144px" objectFit="container" src={picture} alt={name}></Image>
      </div>
      <div className="pl-8">
        <h4 className="font-bold text-xl text-stone-900 mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500">
            {name}
          </span>{' '}
          {contribution},<br />
          {role}.
        </h4>
        <div>{description}</div>
      </div>
    </div>
  )
}
